import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL_LOCAL_BACKEND as LOCAL } from '../../const';

import Testimony from '../layouts/Testimony';
import Load from '../layouts/Load';

export default function Testimonys() {

    const [ testimonys, setTestimonys ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getTestimonys = async() => {

        setLoading(true);
        await axios.get(LOCAL + 'testimonys')
        .then(res => {

            console.log(res.data);
            setTestimonys(res.data);
            setLoading(false);

        })
        .catch(err => {

            console.log(err);
            setLoading(false);

        })

    }

    useEffect(() => {

        getTestimonys();

    }, [ setTestimonys ])

    return(

        <>

            {
                loading ?

                    <Load />

                :

                <div className='row pb-5'>
                    <div className='col-12 text-center'>
                        <h2 className='text-gradient-blue'>
                            Testimonios
                        </h2>
                        <strong>
                            En ImporLan, trabajamos en pro del cliente, por eso la opinión de los mismos es muy importante, ya que son la mejor forma de demostrar nuestra forma de trabajo y calidad
                        </strong>
                    </div>
                    <div className='col-12'>
                        <div className='col-12 px-0 mt-4 text-center'>
                            {
                                testimonys.map(testimony => <Testimony testimony={ testimony } />)
                            }
                        </div>
                    </div>
                </div>

            }

        </>

    )

}