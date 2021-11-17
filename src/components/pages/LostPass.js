import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../const';

export default function LostPass(props) {

    const [ data, setData ] = useState({});

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

            console.log(res.data)

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

    }, [])

    return(

        <div className='row pb-5'>
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='col-12 col-md-8 mx-auto py-4 px-4' onSubmit={ handleSubmit }>
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
                    <div className='col-10  mx-auto form-group mt-5'>
                        <input type='email' id='email' style={ styles.inputs } className='form-control' placeholder='Escribe tu correo electrónico...' onChange={ handleChange } required />
                    </div>
                    <div className='col-12 d-flex justify-content-end mt-3'>
                        <button className='btn text-gray' style={ styles.inputs }>
                            Solicitar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )

}