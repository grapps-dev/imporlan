import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import Plan from '../layouts/Plan';

export default function PlansUSA() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const plans = [

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

                '1 requerimiento específico',
                '9 propuestas/cotizaciones',
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
                '15 propuestas/cotizaciones',
                'Análisis de ofertas y recomendaciones'

            ]
        }

    ]

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    ¿Quieres comprar una embarcación?
                </h2>
            </div>
            <div className='col-12 mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <div className='col-12 px-0' style={{ 'height': '100%' }}>
                            <div className='col-12 py-4 border-radius' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                                <p className='mb-0'>
                                    Da el primer paso seleccionando uno de nuestros planes de compra
                                </p>
                                <div className='d-block mt-5'>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Contratas el plan
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Recibes las propuestas
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Seleccionas las 3 mejores
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Chequeamos y recomendamos
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Eliges y enviamos mecánico
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Recibes reporte y decides
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Se firma contrato y compramos
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckSquare } className='text-purple mr-3' />
                                            Importamos y entregamos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-5 px-0 mt-md-0 col-md-8'>
                        <div className='col-12 px-0'>
                            <div className='row col-12 justify-content-center mx-0'>
                                { plans.map(plan => <Plan col='6' plan={ plan } key={ plan.id } />) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}