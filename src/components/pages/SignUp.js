import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

import countriesJSON from '../../assets/resources/countries.json';

import IconDefault from '../../assets/img/icon-default.jpg';

import { URL_LOCAL_BACKEND as LOCAL } from '../../const';

export default function SignUp(props) {

    const [ countries, setCountries ] = useState(countriesJSON);
    const [ error, setError ] = useState('');
    const [ data, setData ] = useState({});

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

            if($('#terms').prop('checked')){
                axios.post(LOCAL + 'users', formData, {headers:{"Content-Type" : "multipart/form-data"}})
                .then(res => {

                    if(res.data === 'email_error'){

                        props.res('El correo electrónico ya se encuentra registrado', 'red');
                        setError('** La cuenta de correo electrónico está registrada. Verifique e intente nuevamente. **');
                        $('#email').addClass('border-error');

                    } else {

                        props.res(res.data, 'green');
                        setError('')
                        $('.form-control').removeClass('border-error');
                        e.target.reset();

                    }

                })
                .catch(error => {

                    props.res('Ha ocurrido un error. Por favor, intente de nuevo más tarde', 'red');
                    e.target.reset();
                    console.log(error.response);

                })
            } else {

                props.res('Debe aceptar las Políticas de Privacidad para continuar', 'red');
                $('#terms').addClass('border-error');

            }

        } else {

            props.res('Todos los campos son obligatorios', 'red');
            $('.form-control').each((i, el) => el.value === '' ? $('#' + el.id).addClass('border-error') : '');
            setError('** Todos los campos son obligatorios **')

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
                    <div className='col-12 px-5 text-center my-3'>
                        <strong>
                            Crea una cuenta disfruta de nuestros planes y servicios
                        </strong>
                    </div>
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
                                    <option value=''>País *</option>
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
                            <input type='text' className='form-control' id='secondAddress' placeholder='Dirección 2' style={ styles.inputs } onChange={ handleChange } />
                        </div>
                    </div>
                    <div className='col-12 d-lg-flex px-0 px-md-3 align-items-center'>
                        <div className='form-group container-file col-12 col-lg-6'>
                            <input type='file' className='form-control' id='photo' placeholder='Foto de Perfil *' style={ styles.inputs } onChange={ handleChangeIMG }  />
                        </div>
                        <div className='form-group col-12 col-lg-6 d-inline-block align-items-center'>
                            <img id='previewPhoto' className='d-block mx-auto' src={ IconDefault } width='120px' height='120px' alt='Default user' style={{ 'borderRadius': '50%' }} />
                            <span className='d-block text-justify mt-2'>Puedes escoger tu foto más tarde, pero recuerda hacerlo antes de contratar uno de nuestros planes</span>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3 mt-3'>
                        <div className='form-group col-12 mb-0'>
                            <label htmlFor='terms'><input type='checkbox' id='terms' required /> He leído y aceptado los <Link to='terms-and-conditions' className='text-white'>Términos de Privacidad y Uso</Link></label>
                        </div>
                    </div>
                    <div className='col-12 text-danger mb-3'>
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