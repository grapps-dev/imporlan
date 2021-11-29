import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../const';

import QuickAsk from './QuickAsk';
import Load from '../layouts/Load';

export default function QuickAsks() {

    const [ asks, setAsks ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {

        getAsks();

    }, [ setAsks ])

    const getAsks = async() => {

        await axios.get(URL + 'quick-asks')
        .then(res => {

            console.log(res.data)
            setAsks(res.data);

        })
        .catch(err => {

            console.log(err.response)

        })

    }

    return(

        loading ? 

            <Load />

        :

            <div className='row pb-5'>
                <div className='col-12 text-center'>
                    <h2 className='text-gradient-blue'>
                        Preguntas Frecuentes
                    </h2>
                </div>
                <div className='col-12 d-flex justify-content-between flex-wrap px-0 mt-4'>
                    {
                        asks.map(ask => <QuickAsk key={ ask.id } ask={ ask } />)
                    }
                </div>
            </div>

    )

}