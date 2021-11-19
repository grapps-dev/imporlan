import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import LoginFigureTop from '../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../assets/img/login-figure-bottom.png';

import { URL_LOCAL_BACKEND as URL } from '../../const';

export default function NewPassForm(props) {

    const [ data, setData ] = useState({});
    const [ btnText, setBtnText ] = useState('Guardar');

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        },
        form: {

            display: props.display

        }

    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        $('.form-control').removeClass('border-error');
        setBtnText('');
        $('.spinner-border').removeClass('d-none');

        var formData = {

            pass: data.newPass,
            token: props.tokenPass

        }
        await axios.put(URL + 'update-pass', formData)
        .then(res => {  

            props.res(res.data, 'green');
            setTimeout(() => {

                window.location.href = 'http://localhost:3000/imporlan/sign-in';

            }, 2500)

        })

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.id ] : e.target.value

        })

    }

    return(

                <form className='col-12 col-md-8 mx-auto py-4 px-4' onSubmit={ handleSubmit } style={ styles.form }>
                    <div className='col-12 text-center mb-3'>
                        <h2 className='text-gradient-blue'>
                            Nueva Contraseña
                        </h2>
                        <strong>
                            Ingresa tu nueva contraseña
                        </strong>
                    </div>
                    <div className='col-10 mx-auto form-group mt-5'>
                        <input type='password' id='newPass' style={ styles.inputs } className='form-control' placeholder='Nueva contraseña' onChange={ handleChange } required />
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
    )

}