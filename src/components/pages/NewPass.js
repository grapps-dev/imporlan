import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function NewPass(props) {

    const [ data, setData ] = useState({});

    const { token } = useParams();

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        }

    }

    const handleSubmit = async(e) => {}

    const handleChange = e => {}

    useEffect(() => {

        console.log(token);

    }, []);

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