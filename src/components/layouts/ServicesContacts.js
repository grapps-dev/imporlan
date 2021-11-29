import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import 'animate.css';

import LoginFigureTop from '../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../assets/img/login-figure-bottom.png';

import { URL_LOCAL_BACKEND } from '../../const';

export default function ServicesContacts(props){

    const [ error, setError ] = useState('');
    const [ data, setData ] = useState({});
    const [ counter, setCounter ] = useState(0);
    const [ btnText, setBtnText ] = useState('Enviar');

    const { service } = useParams();

    /*$(window).ready(() => {

        window.scrollTo(0, 0);

    })*/

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

    const handleSubmit = async(e) => {

        e.preventDefault();
        setBtnText('');
        $('.spinner-border').removeClass('d-none');
        setData({

            ...data,
            service: service

        })
        let formData = data;

        await axios.post(URL_LOCAL_BACKEND + 'contact-service', formData)
        .then(res => {

            console.log(res.data);
            props.res(res.data, 'green')
            setBtnText('Enviar');
            $('.spinner-border').addClass('d-none');
            e.target.reset();

        })
        .catch(err => {

            console.log(err.response);

        })

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.id ] : e.target.value

        });

        if(e.target.id === 'contentComment'){

            var stringLength = e.target.value.length;
            if(stringLength <= 500){

                setCounter(e.target.value.length);
                $('#counter-error').addClass('d-none');
                $('#text-counter').css('bottom', '8px');

            } else {

                $('#counter-error').removeClass('d-none');
                $('#text-counter').css('bottom', '32px');

            }

        }

    }

    return(

        <div className='row pb-5 animate__animated animate__backInRight'>
            <img src={ LoginFigureTop } className='figureTop' style={{ 'position': 'absolute', 'right': '0px', 'top': '0px', 'maxWidth': '300px' }} />
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='py-4 px-4' onSubmit={ handleSubmit }>
                    <div className='col-12 px-2 text-center my-3'>
                        <h2 className='text-gradient-blue'>
                            {
                                service === 'course' ?

                                    "Cursos de Navegación"

                                :

                                    "Servicio de Inscripción"
                            }
                        </h2>
                        <strong>
                            {
                                service === 'course' ?

                                    "Envíanos un mensaje y te contactaremos con las personas indicadas para hacer de esto una tarea muy simple y entretenida"

                                :

                                    "Envíanos un mensaje y te presentaremos los mejores precios y el menor tiempo posible para la realización de la inscripción"
                            }
                        </strong>
                    </div>
                    <div className='col-12 d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='name' placeholder='Nombres *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='text' className='form-control' id='secondName' placeholder='Apellidos *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-md-flex mt-3 px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='number' step='1' className='form-control' id='phone' placeholder='Teléfono *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    {
                        service === 'register-ships' ?
                            
                            <>
                                <div className='col-12 d-md-flex mt-3 px-0 px-md-3'>
                                    <div className='form-group col-12 col-md-6'>
                                        <input type='text' className='form-control' id='mark' placeholder='Marca *' style={ styles.inputs } onChange={ handleChange } required />
                                    </div>
                                    <div className='form-group col-12 col-md-6'>
                                        <input type='text' className='form-control' id='model' placeholder='Modelo *' style={ styles.inputs } onChange={ handleChange } required />
                                    </div>
                                </div>
                                <div className='col-12 d-md-flex mt-3 px-0 px-md-3'>
                                    <div className='form-group col-12 col-md-6'>
                                        <input type='text' className='form-control' id='size' placeholder='Dimensiones *' style={ styles.inputs } onChange={ handleChange } required />
                                    </div>
                                    <div className='form-group col-12 col-md-6'>
                                        <input type='number' step='1' className='form-control' id='year' placeholder='Año * (Ej. 2020)' style={ styles.inputs } onChange={ handleChange } required />
                                    </div>
                                </div>
                                <div className='col-12 d-md-flex justify-content-center text-center mt-3 px-0 px-md-3'>
                                    <div className='form-group col-12 col-md-6'>
                                        <input type='number' step='1' className='form-control' id='weight' placeholder='Peso * (En Kg)' style={ styles.inputs } onChange={ handleChange } required />
                                    </div>
                                    <input type='hidden' id='service' value={ service } />
                                </div>
                            </>
                        
                        :

                            service === 'course' ?

                                <>
                                    <div className='col-12 d-md-flex mt-3 px-0 px-md-3'>
                                        <div className='form-group col-12 col-md-6'>
                                            <input type='text' className='form-control' id='level' placeholder='Nivel *' style={ styles.inputs } onChange={ handleChange } required />
                                        </div>
                                        <div className='form-group col-12 col-md-6'>
                                            <input type='text' className='form-control' id='location' placeholder='Ubicación *' style={ styles.inputs } onChange={ handleChange } required />
                                        </div>
                                    </div>
                                    <input type='hidden' id='service' value={ service } />
                                </>

                            :

                                ''

                    }
                    <div className='col-12 d-flex mt-3 px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <textarea type='content' className='form-control' id='contentComment' placeholder='Escriba su mensaje... *' rows='10' style={ styles.textarea } onChange={ handleChange }></textarea>
                            <span id='text-counter' style={ styles.textcounter }>500 / { counter }</span>
                            <em id='counter-error' className='d-none text-danger'>Por favor, ingrese un máximo de 500 caracteres</em>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3' style={{ 'zIndex': 9999 }}>
                        <div className='form-group col-12 mb-0 text-gray'>
                            <label htmlFor='terms'><input type='checkbox' id='terms' required /> He leído y aceptado los <Link to='terms-and-conditions' className='text-gray underline'>Términos de Privacidad y Uso</Link></label>
                        </div>
                    </div>
                    <div className='col-12 text-danger'>
                        <div className='col-12'>
                            <strong>{ error }</strong>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3' style={{ 'zIndex': 9999 }}>
                        <div className='col-12 d-flex justify-content-center justify-content-md-end'>
                            <button className='btn text-gray' type='submit' style={ styles.inputs }>
                                <span>{ btnText }</span>
                                <div className='spinner-border d-none'>
                                    <span className='sr-only'>Cargando...</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <img src={ LoginFigureBottom } className='figureBottom' style={{ 'position': 'absolute', 'left': '0', 'bottom': '0', 'maxWidth': '300px', 'zIndex': '9' }}  />
        </div>

    )

}