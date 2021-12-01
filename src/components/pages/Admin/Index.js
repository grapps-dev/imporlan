import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Load from '../../layouts/Load';
import PlanReview from '../../layouts/Admin/PlanReview';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

import { faFrown } from '@fortawesome/free-solid-svg-icons';

export default function Index(props){

    const [ loading, setLoading ] = useState(false);
    const [ plans, setPlans ] = useState([]);
    const [ user, setUser ] = useState({});
    const [ finishedPlans, setFinished ] = useState([]);

    const filterPlans = (plans) => {

        plans.map(plan => {

            if(plan.step === 5){

                setFinished({

                    ...finishedPlans,
                    plan

                })

            }

        })

    }

    const getActivesPlans = async(token) => {

        await axios.get(URL + 'actives-plans', {
            headers : {
               "Authorization" : `Bearer ${ token } `
           }
        })
        .then(res => {

            setLoading(false);
            console.log(res.data)
            setPlans(res.data);
            filterPlans(res.data);
            res.data.length > 0 ? $('#titleActivePlans').removeClass('d-none') :  $('#titleActivePlans').addClass('d-none');

        })
        .catch(err => {

            console.log(err);

        })

    }

    useEffect(() => {

        setLoading(true);
        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')));
            setTimeout(() => {

                getActivesPlans(props.token);

            }, 500)

        } else {

            let loc = window.location.origin;
            window.location.href = loc;

        }

    }, [ setLoading, setUser ])

    return(

        <>
        {

            loading ?

                <Load />

            :

            <div className='row mx-0 mx-lg-3'>
                <div className='col-12'>
                    <h3>Planes de Cliente</h3>
                    <p>
                        Visualiza todos los planes y servicios que se encuentren en pleno desarrollo, a fin de tener el máximo control sobre tus embarcaciones.
                    </p>
                    <div className='col-12 mx-auto'>
                        <div className='col-12 bg-main-white text-blue-primary border-radius px-md-4 py-3 shadow'>
                            <h5 id='titleActivePlans' className='d-none'>
                                Planes Activos
                            </h5>
                            <div style={{ 'maxHeight': '300px', 'overflowY': 'auto' }}>
                                {
                                    plans.length > 0 ?
                                        plans.map(plan => <PlanReview plan={ plan } key={ plan.id } />)
                                    :

                                        <>
                                            <h5>
                                                No existen planes contratados actualmente <FontAwesomeIcon icon={ faFrown } />
                                            </h5>
                                        </>
                                }
                            </div>
                        </div>
                        <div className='col-12 px-0 mt-5'>
                            <div className='col-12 bg-main-white text-blue-primary border-radius px-md-4 py-3 shadow'>
                                <h5>
                                    Planes Culminados
                                </h5>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>

    )

}