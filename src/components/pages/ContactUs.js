import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    
    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "1px solid rgb(0, 23, 74)"

        }

    }

    return (
        
        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Contáctanos
                </h2>
            </div>
            <div className='col-12 col-md-10 mx-auto mt-5 bg-img-blue-boat py-4 px-4 border-radius shadow'>
                <form>
                    <div className='col-12 d-flex'>
                        <div className='form-group col-md-6'>
                            <input type='text' className='form-control' id='name' placeholder='Nombres' style={ styles.inputs } />
                        </div>
                        <div className='form-group col-md-6'>
                            <input type='text' className='form-control' id='secondName' placeholder='Apellidos' style={ styles.inputs } />
                        </div>
                    </div>
                    <div className='col-12 d-flex mt-3'>
                        <div className='form-group col-md-6'>
                            <input type='email' className='form-control' id='email' placeholder='Correo Electrónico' style={ styles.inputs } />
                        </div>
                        <div className='form-group col-md-6'>
                            <input type='number' step='1' className='form-control' id='phone' placeholder='Teléfono' style={ styles.inputs } />
                        </div>
                    </div>
                    <div className='col-12 d-flex mt-3'>
                        <div className='form-group col-12'>
                            <textarea type='email' className='form-control' id='email' placeholder='Correo Electrónico' rows='10' style={ styles.inputs }></textarea>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group col-12'>
                            <input type='checkbox' id='terms' /> He léido y aceptado los <Link to='terms-and-conditions' className='text-white  '>Términos de Privacidad y Uso</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactUs;
