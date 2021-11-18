import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

import LoginFigureTop from '../../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../../assets/img/login-figure-bottom.png';

const Formtestimony = (props) => {

    const [ counter, setCounter ] = useState(0);
    const [ data, setData ] = useState({});
    const [ error, setError ] = useState('');
    const [ btnText, setBtnText ] = useState('Publicar');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

        e.preventDefault();
        var formData = {

            content: data.contentTestimony,
            user: user.id,
            token: token

        }

        await axios.post(URL + 'testimonys', formData)
        .then(res => {

            if(res.data === 'exist'){

                props.res('Usted ya tiene un testimonio publicado', 'red');

            } else {

                props.res(res.data, 'green')

            }

        })
        .catch(err => {

            console.log(err);

        })

        e.target.reset();

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

    $('#content').css('position', 'relative');

    return (
        <div className='row pb-5'>
            <img src={ LoginFigureTop } style={{ 'position': 'absolute', 'right': '0px', 'top': '0px', 'maxWidth': '300px' }} />
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='py-4 px-4' onSubmit={ handleSubmit }>
                    <div className='col-12 px-5 text-center my-3'>
                        <h2 className='text-gradient-blue'>
                            Testimonio
                        </h2>
                        <strong>
                            Publica una pequeña reseña sobre lo que fue para ti trabajar con nosotros
                        </strong>
                    </div>
                    <div className='col-12 d-flex mt-3 px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <textarea className='form-control' id='contentTestimony' placeholder='Escriba su mensaje... *' rows='10' style={ styles.textarea } onChange={ handleChange }></textarea>
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
    );
}

export default Formtestimony;
