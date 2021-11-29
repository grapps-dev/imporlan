import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

import LoginFigureTop from '../../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../../assets/img/login-figure-bottom.png';

export default function QuickAsk(props) {

    const [ data, setData ] = useState({});
    const [ error, setError ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ btnText, setBtnText ] = useState('Publicar');

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        },
        textarea: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "30px"

        },
        textcounter: {

            position: 'absolute',
            bottom: "8px",
            right: '80px'

        }

    }

    const handleSubmit = async(e) => {

        e.preventDefault()
        await axios.post(URL + 'new-ask', data)
        .then(res => {

            props.res(res.data, 'green');
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

        })

        if(e.target.id === 'answer'){

            var stringLength = e.target.value.length;
            if(stringLength <= 1200){

                setCounter(e.target.value.length);
                $('#counter-error').addClass('d-none');
                $('#text-counter').css('bottom', '8px');

            } else {

                $('#counter-error').removeClass('d-none');
                $('#text-counter').css('bottom', '32px');

            }

        }

    }

    return (
        <div className='row pb-5'>
            <img src={ LoginFigureTop } style={{ 'position': 'absolute', 'right': '0px', 'top': '0px', 'maxWidth': '300px' }} />
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='py-4 px-4' onSubmit={ handleSubmit }>
                    <div className='col-12 px-5 text-center my-3'>
                        <h2 className='text-gradient-blue'>
                            Preguntas Frecuentes
                        </h2>
                        <strong>
                            Registra las preguntas frecuentes del sistema
                        </strong>
                    </div>
                    <div className='col-12 d-md-flex flex-column mt-3 px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <input type='text' className='form-control' id='question' placeholder='Pregunta *' style={ styles.inputs } onChange={ handleChange } required />
                        </div>
                        <div className='form-group col-12'>
                            <label className='d-block strong' htmlFor='answer'>Respuesta *</label>
                            <textarea className='col-12' rows='10' id='answer' onChange={ handleChange } style={ styles.textarea }></textarea>
                            <span id='text-counter' style={ styles.textcounter }>1200 / { counter }</span>
                            <em id='counter-error' className='d-none text-danger'>Por favor, ingrese un máximo de 1200 caracteres</em>
                        </div>
                    </div>
                    <div className='col-12 text-danger'>
                        <div className='col-12'>
                            <strong>{ error }</strong>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3'>
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
            <img src={ LoginFigureBottom } style={{ 'position': 'absolute', 'left': '0', 'bottom': '0', 'maxWidth': '300px', 'zIndex': 9     }}  />
        </div>
    )
}