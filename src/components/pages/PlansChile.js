import React from 'react';
import { Link } from 'react-router-dom';

import Plan from '../layouts/Plan';

import Agent from '../../assets/img/agent.png';
import Chat from '../../assets/img/chat.png';
import EarthGlobe from '../../assets/img/earth-globe.png';

export default function PlansChile() {

    const plans = [

        {
            id: 0,
            name: 'Plan Fragata Chile',
            actualPrice: '67.600',
            oldPrice: '89.900',
            content: [

                'Monitoreo por 7 días',
                '1 requerimiento específico',
                '5 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        },
        {
            id: 1,
            name: 'Plan Capitán de Navío Chile',
            actualPrice: '119.600',
            oldPrice: '142.900',
            content: [

                '1 requerimiento específico',
                '9 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        },
        {
            id: 2,
            name: 'Plan Almirante Chile',
            actualPrice: '189.600',
            oldPrice: '219.900',
            content: [

                'Monitoreo por 21 días',
                '1 requerimiento específico',
                '15 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        }

    ]

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Servicios de Búsqueda de Lanchas
                </h2>
                <h4>
                    Así es como funciona
                </h4>
            </div>
            <div className='col-12 mt-5'>
                <div className='col-12 d-flex align-items-center'>
                    <div className='col-md-3'>
                        <img src={ Agent } className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <div className='col-12'>
                            <p>
                                <strong>
                                    Obtienes un gestor de búsqueda de lanchas
                                </strong>
                                <p>
                                    Compra el servicio y un gestor te ayudará a buscar y ver las mejores opciones actuales acorde a tu requerimiento.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex align-items-center mt-5'>
                    <div className='col-md-3 bg-purple border-circle-1'>
                        <img src={ Chat } className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <div className='col-12'>
                            <p>
                                <strong>
                                    Nos comunicamos con el dueño y hacemos la negociación de parte de ti.
                                </strong>
                                <p>
                                    Una vez seleccionadas las mejores opciones para avanzar con la inspección tomaremos contacto con el dueño y realizaremos las averiguaciones y negociación pertinente. ¡Intentaremos conseguir el mejor precio posible!
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex align-items-center mt-5'>
                    <div className='col-md-3 bg-purple border-circle-1'>
                        <img src={ EarthGlobe } className='img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <div className='col-12'>
                            <p>
                                <strong>
                                    ¡Gestionamos la compra de principio a fin!
                                </strong>
                                <p>
                                    Si todo sale bien y el vendedor quiere vender, entonces estamos listos para iniciar el procedimiento de importación “todo incluido” te ayudaremos a llevar la lancha de manera segura hasta Santiago o a la puerta de tu casa.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-5 bg-white py-5 px-4 border-radius shadow text-center'>
                    <h4>
                        Ve nuestros Planes de Búsqueda y contrata el que más se ajuste a tus necesidades
                    </h4>
                </div>
            </div>
            <div className='row col-12 mt-3'>
                { plans.map(plan => <Plan col='4' plan={ plan } key={ plan.id } />) }
            </div>
        </div>

    )

}