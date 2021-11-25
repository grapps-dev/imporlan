import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Load from '../../layouts/Load';
import PlanReview from '../../layouts/Admin/PlanReview';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

export default function Index(props){

    const [ loading, setLoading ] = useState(false);
    const [ plans, setPlans ] = useState([]);
    const [ user, setUser ] = useState({});

    const getActivesPlans = async(token, id) => {

        await axios.get(URL + 'actives-plans/' + id, {
            headers : {
               "Authorization" : `Bearer ${ token } `
           }
        })
        .then(res => {

            setLoading(false);
            setPlans(res.data);

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

                getActivesPlans(props.token, props.user.id);

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

            <div className='row'>
                <div className='col-12'>
                    <h3>Planes de Cliente</h3>
                    <p>
                        Visualiza todos los planes y servicios que se encuentren en pleno desarrollo, a fin de tener el máximo control sobre sus embarcaciones.
                    </p>
                    <div className='col-12 col-md-10 mx-auto'>
                        <div className='col-12 bg-main-white text-blue-primary border-radius px-md-4 py-2 pb-md-5 shadow'>
                            {
                                plans.map(plan => <PlanReview plan={ plan } key={ plan.id } />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>

    )

}