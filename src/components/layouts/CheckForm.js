import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function CheckForm() {

    const [ totalQuote, setTotalQuote ] = useState(0);

    const handleQuote = e => {

        var total = 0;
        $('#quotes-links input').each((i, el) => {

            if(el.value.length > 0){

                total += 1;

            }

        })
        setTotalQuote(total * 9900)
        console.log(totalQuote)

    } 

    return(

        <div className='col-12 mt-5 px-0'>
            <div className='row px-0'>
                <div className='col-lg-4'>
                    <div className='col-12 d-flex align-items-center p-4 bg-img-blue-boat border-radius' style={{ 'height': '100%' }}>
                        <form>
                            <div className='form-group'>
                                <h4 className='w-100 text-center my-4'>
                                    ¿Dónde quieres la embarcación?
                                </h4>
                                <div className='w-100 mt-3'>
                                    <select className='form-control'>
                                        <option value='chile'>Chile</option>
                                        <option value='usa'>USA</option>
                                    </select>
                                    <input className='form-control mt-2' placeholder='Place/Port' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <h4 className='w-100 text-center my-4'>
                                    Datos Personales
                                </h4>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control mt-2' placeholder='Nombre' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' placeholder='Apellido' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='email' className='form-control' placeholder='Correo Electrónico' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='number' step='1' className='form-control' placeholder='Número telefónico' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <h4 className='w-100 text-center my-4'>
                                    Lugar de Residencia
                                </h4>
                                <div className='form-group mt-3'>
                                    <select name='country' className='form-control'>
                                        <option value='chile'>Chile</option>
                                        <option value='usa'>USA</option>
                                    </select>
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' placeholder='Región/Estado' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' placeholder='Pueblo/Ciudad' />
                                </div>
                                <div className='form-group mt-3'>
                                    <input type='text' step='1' className='form-control' placeholder='Casa/Número de Apartamento' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-lg-8 mt-3 mt-lg-0'>
                    <div className='col-12 p-4 bg-img-blue-boat border-radius'>
                        <form>
                            <div className='form-group'>
                                <h4 className='w-100 text-center mt-4 mb-5'>
                                    ¿Cómo va a cotizar? 
                                </h4>
                                <div className='w-100 mt-3'>
                                    <select className='form-control'>
                                        <option value='links'>Cotizar  con enlaces</option>
                                        <option value='text'>cotizar con textos</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-group' id='quotes-links'>
                                <div className='mt-4 mb-5 text-center'>
                                    <h4 className='w-100 text-center'>
                                        Enlaces de las lanchas a cotizar
                                    </h4>
                                    <span>
                                        ¡Ingrese el (los) enlaces del barco y te lo cotizaremos para donde quieras!
                                    </span>
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación (obligatorio)' required />
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación' />
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación' />
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación' />
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación' />
                                </div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Enlace de embarcación' />
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <div className='col-12'>
                                        <h4 className='d-block'>
                                            Total
                                        </h4>
                                        <h1 className='d-block mt-3'>
                                            $ <span id='total-quote'>{ totalQuote }</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <h4>
                                        <Link to='/imporlan/terms-and-conditions' className='text-white'>Términos y Condiciones</Link>
                                    </h4>
                                    <p>
                                        Acepto los términos y condiciones para suscribirme a este servicio, y por la presente confirmo que he leído las <Link className='text-white underline' to='/imporlan/terms-and-conditions'>Políticas de Privacidad</Link>.
                                    </p>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button type='button' className='w-100 btn bg-white py-3' onClick={ handleQuote } style={{ "borderRadius": '90px' }}>
                                    Cotizar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}