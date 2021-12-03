import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PlanReview(props){

    const [ date, setDate ] = useState({});
    const [ profile, setProfile ] = useState('');
    const [ planTitle, setTitle ] = useState('');
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
        if(sessionStorage.getItem('profile') === 'cliente') {

            setTitle(plan.plan.name)

        } else {

            setTitle(plan.user.name);

        }
        

    }, [ setDate, setProfile ])

    return(

        <div className='d-flex flex-wrap border-bottom'>
            <div className='col-12 d-flex flex-wrap align-items-center py-3 justify-content-between'>
                <div className='col-12 col-md-5'>
                    <strong>{ planTitle }</strong>
                    <span className='d-block' style={{ 'fontSize': '10px' }}>
                        <strong>Fecha de ingreso: </strong>
                        {
                            date.in
                        }
                    </span>
                </div>
                <div className='col-12 d-flex justify-content-between col-md-5 col-xl-5 px-0'>
                    <div>
                        <strong>Paso: </strong>
                        {
                            plan.step
                        }
                    </div>
                    <div>
                        {
                            sessionStorage.getItem('profile') === 'cliente' ? 

                                <>
                                    <strong>Precio: </strong>
                                    {
                                        '$' + plan.plan.price
                                    }
                                </>

                            :

                                <>
                                    <strong>Plan: </strong>
                                    {
                                        plan.plan.name.replace('Plan ', '')
                                    }
                                </>

                        }
                    </div>
                </div>
                <div className='col-12 d-flex justify-content-end px-0 justify-content-lg-center col-md-2'>
                    <Link to='#' className='underline d-flex align-items-center'>
                        Ver más <FontAwesomeIcon className='ml-2' icon={ faChevronRight } />
                    </Link>
                </div>
            </div>
        </div>

    )

}