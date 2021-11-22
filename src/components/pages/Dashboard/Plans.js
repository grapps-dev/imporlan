import React, { useState, useEffect } from 'react';
import $ from 'jquery'

import ContactUs from '../ContactUs';
import PlansChile from '../PlansHow';

import Plan from '../../layouts/Plan';

export default function Support(props) {

    const [ page, setPage ] = useState('chile');
    const [ user, setUser ] = useState({});

    const plansChile = [

        {
            id: 1,
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
            id: 2,
            name: 'Plan Capitán de Navío Chile',
            actualPrice: '119.600',
            oldPrice: '142.900',
            content: [

                'Monitoreo por 14 días',
                '1 requerimiento específico',
                '8 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        },
        {
            id: 3,
            name: 'Plan Almirante Chile',
            actualPrice: '189.600',
            oldPrice: '219.900',
            content: [

                'Monitoreo por 21 días',
                '1 requerimiento específico',
                '12 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        }

    ]

    const plansUSA = [

        {
            id: 4,
            name: 'Plan Fragata USA',
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
            id: 5,
            name: 'Plan Capitán de Navío USA',
            actualPrice: '119.600',
            oldPrice: '142.900',
            content: [

                'Monitoreo por 14 días',
                '1 requerimiento específico',
                '8 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        },
        {
            id: 6,
            name: 'Plan Almirante USA',
            actualPrice: '189.600',
            oldPrice: '219.900',
            content: [

                'Monitoreo por 21 días',
                '1 requerimiento específico',
                '12 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        }

    ]

    const changeContent = e => {

        if(e.target.id === 'chile'){

            setPage('chile');

        } else if(e.target.id === 'usa') {

            setPage('usa');

        }

    }

    useEffect(() => {

        setUser(JSON.parse(sessionStorage.getItem('user')));

    }, [ setUser ])

    const showForm = () => {

        setPage('new-testimony');

    }

    const contact = () => {

        setPage('contact-us');

    }

    return(

        <div className='row'>
            <div className='col-12'>
                <h3>Planes ImporLan</h3>
                <p>
                    No esperes más y contrata ya alguno de nuestros planes tanto en Estados Unidos como en Chile y vive la experiencia de comprar tus embarcaciones y recibirlas sin salir de casa
                </p>
            </div>
            <div className='col-12 col-md-10 mx-auto mt-3'>
                <div className='col-12 d-flex align-items-center'>
                    <div className='col-6 border-right-white pb-2 text-center'>
                        <button id='chile' className='btn p-0 text-white strong' onClick={ changeContent }>
                            Chile
                        </button>
                    </div>
                    <div className='col-6 pb-2 text-center'>
                        <button id='usa' className='btn p-0 text-white strong' onClick={ changeContent }>
                            USA
                        </button>
                    </div>
                </div>
                <div className='col-12 bg-main-white text-blue-primary border-radius px-md-4 py-2 pb-md-5 shadow' id='supportContent'>
                    {
                        page === 'chile' ?

                            <div className='col-12 mt-5 px-0 mt-md-0'>
                                <h2 className='text-gradient-blue text-center mt-2 mb-4'>
                                    Planes de Búsqueda en Chile
                                </h2>
                                <div className='col-12 px-0'>
                                    <div className='row col-12 justify-content-center mx-0'>
                                        { plansChile.map(plan => <Plan col='6' plan={ plan } key={ plan.id } user={ user } />) }
                                    </div>
                                </div>
                            </div>

                        :

                        page === 'usa' ?

                            <div className='col-12 mt-5 px-0 mt-md-0'>
                                 <h2 className='text-gradient-blue text-center mt-2 mb-4'>
                                    Planes de Búsqueda en USA
                                </h2>
                                <div className='col-12 px-0'>
                                    <div className='row col-12 justify-content-center mx-0'>
                                        { plansUSA.map(plan => <Plan col='6' plan={ plan } key={ plan.id } />) }
                                    </div>
                                </div>
                            </div>

                        :

                            ''

                    }
                </div>
            </div>
        </div>

    )

}