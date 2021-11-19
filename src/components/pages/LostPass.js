import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../const';

import LoginFigureTop from '../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../assets/img/login-figure-bottom.png';

import NewPassForm from './NewPass';

export default function LostPass(props) {

    const [ data, setData ] = useState({});
    const [ display, setDisplay ] = useState('none');
    const [ btnText, setBtnText ] = useState('Solicitar');
    const { token } = useParams();

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        }

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.id ] : e.target.value

        });

    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        var formData = {

            email: data.email,
            token: data.token

        }
        await axios.post(URL + 'lost-pass', formData)
        .then(res => {

            props.res(res.data, 'green');

        })
        .catch(err => {

            console.log(err.response);

        })

    }

    const generateRandomString = (num) => {
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for(var i = 0; i < 3; i++){

            result += Math.random().toString(36).substring(0, num);

        }

        setData({

            ...data,
            token: result

        });
    }

    useEffect(() => {

        generateRandomString(16);
        if(token){

            $('#lostPassForm').addClass('d-none');
            setDisplay('block');

        } else {

            $('#lostPassForm').removeClass('d-none');
            setDisplay('none');

        }
        

    }, [ ])

    var imgTop = `<img src=${ LoginFigureTop } style='position: absolute; right: 0; top: 0; max-width: 300px' />`
    var imgBottom = `<img src=${ LoginFigureBottom } style='position: absolute; left: 0; bottom: 0; max-width: 300px' />`

    $('#content').css('position', 'relative');
    if(!$('#figureTop').length && !$('#figureBottom').length){
  
        $('#content').prepend(imgTop);
        $('#content').append(imgBottom);
  
    } else {

        $('#content img').remove();

    }

    return(

        <div className='row pb-5' style={{ 'position': 'relative' }}>
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form id='lostPassForm' className='col-12 col-md-8 mx-auto py-4 px-4' onSubmit={ handleSubmit }>
                    <div className='col-12 text-center mb-3'>
                        <h2 className='text-gradient-blue'>
                            Recuperar Contraseña
                        </h2>
                        <strong>
                            ¿Has olvidado tu contraseña? ¡No te preocupes!
                            <br />
                            En 2 sencillos pasos podrás recuperarla
                        </strong>
                    </div>
                    <div className='col-10 mx-auto form-group mt-5'>
                        <input type='email' id='email' style={ styles.inputs } className='form-control' placeholder='Escribe tu correo electrónico...' onChange={ handleChange } required />
                    </div>
                    <div className='col-10 d-flex mx-auto justify-content-end mt-3'>
                        <button className='btn text-gray d-flex align-items-center' type='submit' style={ styles.inputs }>
                            <span>{ btnText }</span>
                            <div className='spinner-border d-none'>
                                <span className='sr-only'>Cargando...</span>
                            </div>
                        </button>
                    </div>
                </form>
                <NewPassForm display={ display } tokenPass={ token } res={ props.res } />
            </div>
        </div>

    )

}