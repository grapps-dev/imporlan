import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

export default function SignIn(props) {

    const [ error, setError ] = useState('');
    const [ data, setData ] = useState({});

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

    const handleChange = e => {

        setData({
            ...data,
            [ e.target.id ] : e.target.value
        });
        
    }

    const handleSubmit = e => {

        e.preventDefault();
        props.login(data);

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 col-md-6 mx-auto mt-5'>
                <form className='py-4 px-4 d-flex flex-column justify-content-center' onSubmit={ handleSubmit } style={{ 'minHeight': '400px' }}>
                    <div className='col-12 text-center mb-3'>
                        <h2 className='text-gradient-blue'>
                            Iniciar Sesión
                        </h2>
                    </div>
                    <div className='col-12 mx-auto d-md-flex px-0 mb-3'>
                        <div className='form-group col-12'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico' style={ styles.inputs } onChange={ handleChange }  />
                        </div>
                    </div>
                    <div className='col-12 mx-auto d-md-flex px-0'>
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
                            <button className='btn text-gray' type='submit' style={ styles.inputs }>
                                Ingresar
                            </button>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3 text-center mt-3 text-gray'>
                        ¿Ha olvidado su contraseña? <Link to='/imporlan/lost-pass' className='text-gray underline'>Recupérela aquí</Link>
                    </div>
                </form>
            </div>
        </div>

    )

}