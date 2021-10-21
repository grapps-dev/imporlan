import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

import countriesJSON from '../../assets/resources/countries.json';

import IconDefault from '../../assets/img/icon-default.jpg';

import { URL_LOCAL_BACKEND as LOCAL } from '../../const';

export default function SignUp() {

    const [ countries, setCountries ] = useState(countriesJSON);
    const [ error, setError ] = useState('');
    const [ data, setData ] = useState({});
    const [ img, setImg ] = useState('');

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "1px solid rgb(0, 23, 74)"

        },
        textcounter: {

            position: 'absolute',
            bottom: "8px",
            right: '80px'

        }

    }

    const renderIMG = (input) => {

        if(input.files && input.files[0]){

            var reader = new FileReader();
            reader.onload = e => {

                $('#previewPhoto').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
            setData({

                ...data,
                [ input.id ] : input.files[0]
    
            })

        }

    }

    const handleChangeIMG = e => {

        renderIMG(e.target);

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.id ] : e.target.value

        });

    }

    const handleSubmit = e => {

        e.preventDefault();

        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('secondName', data.secondName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('pass', data.pass);
        formData.append('country', data.country);
        formData.append('address', data.address);
        formData.append('secondAddress', data.secondAddress ? data.secondAddress : '');
        formData.append('photo', data.photo);
        if(data.name && data.secondName && data.email && data.phone && data.pass && data.country && data.address && data.photo){

            axios.post(LOCAL + 'users', formData, {headers:{"Content-Type" : "multipart/form-data"}})
            .then(res => {

                console.log(res.data);

            })
            .catch(e => {

                console.log(e.response);

            })

        }

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Regístrate
                </h2>
            </div>
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='bg-img-blue-boat py-4 px-4 border-radius shadow' onSubmit={ handleSubmit }>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='name' placeholder='Nombres *' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='secondName' placeholder='Apellidos *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico *' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='password' className='form-control' id='pass' placeholder='Contraseña *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='number' step='1' className='form-control' id='phone' placeholder='Teléfono *' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <div className='select-container'>
                                <select className='form-control' id='country' style={ styles.inputs } onChange={ handleChange } required>
                                    <option value=''>País</option>
                                    {
                                        countries.map(country => <option hey={ country.code } value={ country.name_es }>{ country.name_es }</option>)
                                    }
                                </select>
                                <i className='border-black'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='address' placeholder='Dirección 1 *' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='secondAddress' placeholder='Dirección 2' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-xl-flex px-0 px-md-3'>
                        <div className='form-group container-file col-12 col-lg-6'>
                            <input type='file' className='form-control' id='photo' placeholder='Foto de Perfil *' style={ styles.inputs } onChange={ handleChangeIMG }  />
                        </div>
                        <div className='form-group col-12 col-lg-6 d-flex align-items-center'>
                            <img id='previewPhoto' src={ IconDefault } width='80px' height='80px' className='border-radius' alt='Default user' />
                            <span className='ml-2'>Puedes escoger tu foto más tarde, pero recuerda hacerlo antes de contratar uno de nuestros planes</span>
                        </div>
                    </div>
                    <div className='col-12 text-danger'>
                        <div className='col-12'>
                            <strong>{ error }</strong>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3'>
                        <div className='col-12 d-flex justify-content-center justify-content-md-end'>
                            <button className='btn' type='submit' style={ styles.inputs }>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )

}