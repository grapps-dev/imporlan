import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $, { data } from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as LOCAL } from '../../const';

const ContactUs = (props) => {
    
    const [ counter, setCounter ] = useState(0);
    const [ data, setData ] = useState({});
    const [ error, setError ] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    const handleSubmit = (e) => {

        e.preventDefault();
        if(data.name && data.secondName && data.email && data.phone && data.contentComment){

            var formData = {

                name : data.name,
                secondName : data.secondName,
                email : data.email,
                phone : data.phone,
                content: data.contentComment
    
            }
            if($('#terms').prop('checked')){
    
                axios.post(LOCAL + 'contacts', formData, {headers:{"Content-Type" : "application/json"}})
                .then(res => {
    
                    props.res(res.data, 'green');
                    setError('')
                    $('.form-control').removeClass('border-error');
                    e.target.reset();
    
                })
                .catch(e => {
    
                    console.log(e.response);
    
                })
    
            } else {
    
                alert('No seleccionado')
    
            }

        } else {

            props.res('Todos los campos son obligatorios', 'red');
            $('.form-control').each((i, el) => el.value === '' ? $('#' + el.id).addClass('border-error') : '');
            setError('** Todos los campos son obligatorios **')

        }

    }

    return (
        
        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Contáctanos
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
                    <div className='col-12 d-md-flex mt-3 px-0 px-md-3'>
                        <div className='form-group col-12 col-md-6'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                        <div className='form-group col-12 col-md-6'>
                            <input type='number' step='1' className='form-control' id='phone' placeholder='Teléfono *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                    </div>
                    <div className='col-12 d-flex mt-3 px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <textarea type='content' className='form-control' id='contentComment' placeholder='Escriba su mensaje... *' rows='10' style={ styles.inputs } onChange={ handleChange }></textarea>
                            <span id='text-counter' style={ styles.textcounter }>500 / { counter }</span>
                            <em id='counter-error' className='d-none text-danger'>Por favor, ingrese un máximo de 500 caracteres</em>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3'>
                        <div className='form-group col-12 mb-0'>
                            <input type='checkbox' id='terms' required /> <label htmlFor='terms'>He léido y aceptado los <Link to='terms-and-conditions' className='text-white'>Términos de Privacidad y Uso</Link></label>
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

    );
}

export default ContactUs;
