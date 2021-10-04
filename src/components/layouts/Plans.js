import React from 'react';

import Plan from './Plan';

export default function Plans() {

    const plans = [

        {
            id: 0,
            name: 'Plan Fragata',
            actualPrice: '67.600',
            oldPrice: '89.900',
            content: [

                'Monitoreo por 7 días',
                '1 requerimiento específico',
                '5 propuestas/cotizaciones'

            ]
        },
        {
            id: 1,
            name: 'Plan Capitán de Navío',
            actualPrice: '119.600',
            oldPrice: '142.900',
            content: [

                'Monitoreo por 14 días',
                '1 requerimiento específico',
                '5 propuestas/cotizaciones'

            ]
        },
        {
            id: 2,
            name: 'Plan Almirante',
            actualPrice: '189.600',
            oldPrice: '219.900',
            content: [

                'Monitoreo por 21 días',
                '1 requerimiento específico',
                '5 propuestas/cotizaciones'

            ]
        }

    ]

    return(

        <div className='col-12 px-0' style={{ 'marginTop': '10rem' }}>
            <h4 className='text-gradient-blue text-center'>
                Nosotros haremos la búsqueda por ti y te enviamos las mejores opciones del momento en USA
            </h4>
            <div className='row mt-3'>
                { plans.map(plan => <Plan plan={ plan } />) }
            </div>
        </div>

    )

}