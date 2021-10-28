import React from 'react';

import Plan from './Plan';

export default function Plans(props) {

    const { plans } = props;

    return(

        <div className='col-12 px-0' style={{ 'marginTop': '3rem' }}>
            <h4 className='text-gradient-blue text-center'>
                Nosotros haremos la búsqueda por ti y te enviamos las mejores opciones del momento en USA
            </h4>
            <div className='row mt-3'>
                { plans.map(plan => <Plan col='4' plan={ plan } key={ plan.id } />) }
            </div>
        </div>

    )

}