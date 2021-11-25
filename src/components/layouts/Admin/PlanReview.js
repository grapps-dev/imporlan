import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PlanReview(props){

    const [ date, setDate ] = useState({});
    const { plan } = props;

    useEffect(() => {

        let { created_at } = props.plan;
        let inDate = created_at;
        let d = '';
        for(var i = 0; i <= 9; i++){

            d += inDate[i];

        }

        setDate({

            ...date,
            in: d

        })
        

    }, [ setDate ])

    return(

        <div className='d-flex flex-wrap border-bottom'>
            <div className='col-12 d-flex align-items-center py-3 justify-content-between'>
                <div className='col-auto'>
                    <strong>{ plan.plan.name }</strong>
                    <span className='d-block' style={{ 'fontSize': '10px' }}>
                        <strong>Fecha de ingreso: </strong>
                        {
                            date.in
                        }
                    </span>
                </div>
                <div>
                    <strong>Precio: </strong>
                    {
                        '$' + plan.plan.price
                    }
                </div>
                <div>
                    <Link to='#' className='underline d-flex align-items-center'>
                        Ver más <FontAwesomeIcon className='ml-2' icon={ faChevronRight } />
                    </Link>
                </div>
            </div>
        </div>

    )

}