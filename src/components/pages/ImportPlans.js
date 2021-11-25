import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import Plan from '../layouts/Plan';

export default function ImportPlans() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const plans = [

        {
            id: 0,
            name: 'Plan base',
            actualPrice: 'Gastos incluidos. Valores publicados',
            oldPrice: '',
            content: [

                'Inspección Casco, interior, exterior, motor',
                'Test Drive Directo',
                'Reporte detallado (PDF)',
                'Recomendación',
                'Negociación',
                'Revisión de documentos',
                'Tramitación de compra',
                'Gestión naviera',
                'Gestión aduana',
                'Servicio logístico de Importación'

            ]
        },
        {
            id: 1,
            name: 'Plan Intermedio',
            actualPrice: 'Gastos incluidos. Valores publicados',
            oldPrice: '',
            content: [

                'Inspección Casco, interior, exterior, motor',
                'Test Drive Directo',
                'Reporte detallado (PDF)',
                'Recomendación',
                'Negociación',
                'Revisión de documentos',
                'Tramitación de compra',
                'Gestión naviera',
                'Gestión aduana',
                'Servicio logístico de Importación'

            ]
        },
        {
            id: 2,
            name: 'Plan Avanzando',
            actualPrice: 'Gastos incluidos. Valores publicados',
            oldPrice: '',
            content: [

                'Inspección Casco, interior, exterior, motor',
                'Test Drive Directo',
                'Reporte detallado (PDF)',
                'Recomendación',
                'Negociación',
                'Revisión de documentos',
                'Tramitación de compra',
                'Gestión naviera',
                'Gestión aduana',
                'Servicio logístico de Importación'

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