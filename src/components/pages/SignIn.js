import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function SignIn(props) {

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

    const handleChange = e => {

        setData({
            ...data,
            [ e.target.id ] : e.target.value
        });
        
    }

    const handleSubmit = e => {

        e.preventDefault();
        props.login(data);
        e.target.reset();

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Iniciar Sesión
                </h2>
            </div>
            <div className='col-12 col-md-6 mx-auto mt-5'>
                <form className='bg-img-blue-boat py-4 px-4 border-radius shadow' onSubmit={ handleSubmit }>
                    <div className='col-12 px-5 text-center my-3'>
                        <strong>
                            Ingresa a tu cuenta ImporLan
                        </strong>
                    </div>
                    <div className='col-12 col-md-10 mx-auto d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                    </div>
                    <div className='col-12 col-md-10 mx-auto d-md-flex px-0 px-md-3'>
                        <div className='form-group col-12'>
                            <input type='password' className='form-control' id='password' placeholder='Contraseña' style={ styles.inputs } onChange={ handleChange } required />
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
                                Ingresar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )

}