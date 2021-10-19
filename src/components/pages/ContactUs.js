import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as LOCAL } from '../../const';

const ContactUs = (props) => {
    
    const [ counter, setCounter ] = useState(0);
    const [ data, setData ] = useState({});

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

        if(e.target.id === 'content'){

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

    const handleSubmit = async(e) => {

        e.preventDefault();
        await axios.post(LOCAL + 'contacts', data)
        .then(res => {

            if(!data.email || !data.name || !data.secondName || !data.phone){

                props.res('Todos los campos son obligatorios', 'red');
                $('input').each((i, el) => el.value === '' ? $('#' + el.id).addClass('border-error') : '');

            } else {

                props.res(res.data, 'green');
                e.target.reset();

            }

        })
        .catch(e => {

            console.log(e);

        })

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
                            <textarea type='content' className='form-control' id='content' placeholder='Escriba su mensaje... *' rows='10' style={ styles.inputs } onChange={ handleChange } required></textarea>
                            <span id='text-counter' style={ styles.textcounter }>500 / { counter }</span>
                            <em id='counter-error' className='d-none text-danger'>Por favor, ingrese un máximo de 500 caracteres</em>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <input type='checkbox' id='terms' required /> He léido y aceptado los <Link to='terms-and-conditions' className='text-white'>Términos de Privacidad y Uso</Link>
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
