import React from 'react';

import ListCheck from '../../assets/img/list-check.png';
import AboutUsIMG from '../../assets/img/about-us.png';

export default function Information() {

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    ¿Cómo funciona ImporLan?
                </h2>
            </div>
            <div className='col-12 mt-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-5'>
                        <p>
                            En ImporLan te ofrecemos un servicio "todo en uno", el cual incluye el proceso de búsqueda, inspección, revisión, compra, envío y entrega de su embarcación en Santiago de Chile (Chile), o el lugar de su preferencia. Este servicio permite un seguimiento de su embarcación hasta que la misma sea entregada en la puerta de su casa.
                        </p>
                    </div>
                    <div className='col-lg-7'>
                        <img src={ AboutUsIMG } className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='col-12 mt-5 bg-white py-5 px-4 border-radius shadow'>
                <div className='col-12 text-center'>
                    <div className='col-12'>
                        <strong className='text-purple'>Opción A</strong> | <strong>
                            Cotización y Valores
                        </strong>
                    </div>
                    <div className='col-md-10 mx-auto mt-3'>
                        <p>
                            Si ya has visto la lancha que deseas dentro de alguno de los <a className='text-blue underline'>sitios webs con los que trabajamos</a>, y quieres saber cuál es el precio a pagar para tenerla en Santiago de Chile (Chile) o en el lugar de tu preferencia, entonces sólo deberás llenar los datos del formulario de nuestro <strong className='text-purple'>Cotizador Online</strong> y nosotros te enviaremos el importe total a pagar por la embarcación.
                        </p>
                        <div className='col-12 text-center'>
                            <button className='btn bg-white'>
                                Cotizar en línea
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 text-center mt-5'>
                    <div className='col-12'>
                        <strong className='text-purple'>Opción B</strong> | <strong>
                            Búsqueda
                        </strong>
                    </div>
                    <div className='col-md-10 mx-auto mt-3'>
                        <p>
                            Si deseas comprar un lancha, pero aún no has conseguido aquella que cumpla con tus expectativas, entonces nuestros <a className='text-blue underline'>Planes de Búsqueda</a> soon lo que necesitas. Sólo deberás llenar un formulario con los requerimientos básicos que deseas en tu embarcación, esto para que nosotros podemos conocer tus necesidades y conseguir la lancha capaz de satisacerlas. Dentro de nuestro sistema, podrás llevar un completo control del estado de tu plan y lancha en tiempo real gracias a proceso de 5 pasos que manejamos para todos nuestros <a className='text-blue underline'>Planes de Búsqueda</a>.
                        </p>
                        <div className='col-12 text-center'>
                            <button className='btn bg-white'>
                                Contratar Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 mt-5 bg-img-blue-boat pt-2 py-4 px-4 border-radius shadow'>
                <div className='col-12 text-center'>
                    <h3 className='text-white'>
                        Notas
                    </h3>
                </div>
                <div className='col-md-10 mx-auto'>
                    <ul>
                        <li className='d-flex'>
                            <div className='mr-3'>
                                <img src={ ListCheck } />
                            </div>
                            Las cifras que enviamos en cada publicación son los valores finales a pagar.
                        </li>
                        <li className='d-flex my-4'>
                            <div className='mr-3'>
                                <img src={ ListCheck } />
                            </div>
                            El Paso #1 es vital para dar inicio al proceso de compra y ver cuáles opciones hay disponibles para inspeccionar y comprar o bien sólo para conocer el valor final de la misma para ser llevada hasta la locación de tu preferencia.
                        </li>
                        <li className='d-flex mb-4'>
                            <div className='mr-3'>
                                <img src={ ListCheck } />
                            </div>
                            <div>
                                Al contratar un <a>Plan de Búsqueda</a>, un agente de ImporLan se contactará con usted a la brevedad para comenzar  trabajar en su requerimiento.
                            </div>
                        </li>
                    </ul>
                    <div className='bg-blue-primary-alpha border-radius-soft p-3 text-center'>
                        <h4>
                            ¡Quedamos más que atentos!
                        </h4>
                    </div>
                </div>
            </div>
        </div>

    )

}