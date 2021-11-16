import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import countriesJSON from '../../../assets/resources/countries.json';

import IconDefault from '../../../assets/img/icon-default.jpg';
import LoginFigureTop from '../../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../../assets/img/login-figure-bottom.png';

import { URL_LOCAL_BACKEND as LOCAL } from '../../../const';

export default function UpdateProfile(props) {

    const [ countries, setCountries ] = useState(countriesJSON);
    const [ error, setError ] = useState('');
    const [ data, setData ] = useState({});
    const [ btnText, setBtnText ] = useState('Actualizar');
    const [ user, setUser ] = useState({});

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        },
        textcounter: {

            position: 'absolute',
            bottom: "8px",
            right: '80px'

        }

    }

    useEffect(() => {

        var data = JSON.parse(sessionStorage.getItem('user'));
        var split = data.name.split(' ');
        setUser({
            name: split[0],
            secondName: split[1],
            email: data.email,
            photo: data.photo,
            phone: data.phone,
            address: data.address,
            secondAddress: data.secondAddress,
            enterprise: data.enterprise,
            post: data.post,
            country: data.country
        });

    }, [ setUser ])

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

            $('#removeButton').removeClass('d-none');

        }

    }

    const handleChangeIMG = e => {

        console.log('funcionando');
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
        $('.form-control').removeClass('border-error');
        setBtnText('');
        $('.spinner-border').removeClass('d-none');
        var captcha_token = $('#recaptchaResponse').val();

        console.log(captcha_token);
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('secondName', data.secondName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('pass', data.pass);
        formData.append('country', data.country);
        formData.append('address', data.address);
        formData.append('secondAddress', data.secondAddress ? data.secondAddress : '');
        formData.append('enterprise', data.enterprise);
        formData.append('post', data.post);
        formData.append('photo', data.photo);
        formData.append('profile_id', 2);
        formData.append('recaptcha_response', captcha_token);
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
                        console.log(res.data);
                    }
                    
                    setBtnText('Actualizar');
                    $('.spinner-border').addClass('d-none');

                })
                .catch(error => {

                    props.res('Ha ocurrido un error. Por favor, intente de nuevo más tarde', 'red');
                    e.target.reset();
                    console.log(error.response.data);
                    setBtnText('Actualizar');
                    $('.spinner-border').addClass('d-none');

                })
            } else {

                props.res('Debe aceptar las Políticas de Privacidad para continuar', 'red');
                $('#terms').addClass('border-error');
                setBtnText('Actualizar');
                $('.spinner-border').addClass('d-none');

            }

        } else {

            props.res('Todos los campos son obligatorios', 'red');
            $('.form-control').each((i, el) => el.value === '' ? $('#' + el.id).addClass('border-error') : '');
            setError('** Todos los campos son obligatorios **');
            setBtnText('Actualizar');
            $('.spinner-border').addClass('d-none');

        }

    }

    const removePhoto = e => {

        setData({

            ...data,
            photo : IconDefault

        })
        $('#previewPhoto').attr('src', IconDefault);
        $('#removeButton').addClass('d-none');

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 col-md-10 bg-main-white border-radius shadow mx-auto mt-5' id='formUpdateContainer'>
                <img src={ LoginFigureTop } style={{ 'position': 'absolute', 'right': '0px', 'top': '0px', 'maxWidth': '300px' }} />
                <form className='py-4 px-4 py-4 px-4 d-flex flex-column justify-content-center' onSubmit={ handleSubmit } style={{ 'minHeight': '400px' }}>
                    <div className='col-12 text-center mb-3'>
                        <h2 className='text-gradient-blue'>
                            Editar Perfil
                        </h2>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <input type='hidden' name='recaptcha_response' id='recaptchaResponse' />
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='name' placeholder='Nombres *' style={ styles.inputs } onChange={ handleChange } value={ user.name } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='secondName' placeholder='Apellidos *' style={ styles.inputs } onChange={ handleChange }  value={ user.secondName } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico *' style={ styles.inputs } onChange={ handleChange } value={ user.email } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='password' className='form-control' id='pass' placeholder='Contraseña *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='number' step='1' className='form-control' id='phone' placeholder='Teléfono *' style={ styles.inputs } onChange={ handleChange } value={ user.phone } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <div className='select-container'>
                                <select className='form-control' id='country' style={ styles.inputs } onChange={ handleChange } value={ user.country } required>
                                    <option value=''>País *</option>
                                    {
                                        countries.map(country => <option hey={ country.code } value={ country.name_es }>{ country.name_es }</option>)
                                    }
                                </select>
                                <i className='border-black'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3' style={{ 'zIndex': 9999 }}>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='address' placeholder='Dirección 1 *' style={ styles.inputs } onChange={ handleChange } value={ user.address } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='secondAddress' placeholder='Dirección 2' style={ styles.inputs } onChange={ handleChange } value={ user.secondAddress } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3' style={{ 'zIndex': 9999 }}>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='enterprise' placeholder='Empresa en la que trabaja *' style={ styles.inputs } onChange={ handleChange } value={ user.enterprise } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='post' placeholder='Cargo que ocupa *' style={ styles.inputs } onChange={ handleChange } value={ user.post } required />
                        </div>
                    </div>
                    <div className='col-12 d-lg-flex px-0 px-md-3 align-items-center'>
                        <div className='form-group container-file col-12 col-lg-6' style={{ 'zIndex': 999999 }}>
                            <input type='file' className='form-control' id='photo' placeholder='Foto de Perfil *' style={ styles.inputs } onChange={ handleChangeIMG } required  />
                        </div>
                        <div className='form-group col-12 col-lg-6 d-inline-block align-items-center'>
                            <button className='btn d-none' id='removeButton' style={{ 'position': 'absolute' }} onClick={ removePhoto }>
                                <FontAwesomeIcon icon={ faTimes } />
                            </button>
                            <img id='previewPhoto' className='d-block mx-auto' src={ 'http://api-imporlan.test/img/users/' + user.photo } width='120px' height='120px' alt='Default user' style={{ 'borderRadius': '50%' }} />
                            <span className='d-block text-gray text-justify mt-2'>Puedes escoger tu foto más tarde, pero recuerda hacerlo antes de contratar uno de nuestros planes</span>
                        </div>
                    </div>
                    <div className='col-12 text-danger mb-3'>
                        <div className='col-12'>
                            <strong>{ error }</strong>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3'>
                        <div className='col-12 d-flex justify-content-center justify-content-md-end'>
                            <button className='btn text-gray d-flex align-items-center' type='submit' style={ styles.inputs }>
                                <span>{ btnText }</span>
                                <div className='spinner-border d-none'>
                                    <span className='sr-only'>Cargando...</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
                <img src={ LoginFigureBottom } style={{ 'position': 'absolute', 'left': '0', 'bottom': '0', 'maxWidth': '300px', 'zIndex': 9     }}  />
            </div>
        </div>

    )

}