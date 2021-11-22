import React, { useState, useEffect } from 'react';
import $ from 'jquery'

import PrivacyPolitics from '../TermsAndConditions';
import Testimonys from '../Testimonys';
import FormTestimony from './FormTestimony';

import ContactUs from '../ContactUs';

export default function Support(props) {

    const [ page, setPage ] = useState('testimonys');

    const changeContent = e => {

        if(e.target.id === 'conditions'){

            setPage('conditions');

        } else if(e.target.id === 'testimonys') {

            setPage('testimonys');

        }

    }

    const showForm = () => {

        setPage('new-testimony');

    }

    const contact = () => {

        setPage('contact-us');

    }

    return(

        <div className='row px-3'>
            <div className='col-12'>
                <h3>Soporte ImporLan</h3>
                <p>
                    Consigue toda la información que necesitas para así poder desenvolverte correctamente dentro del panel de ImporLan
                </p>
                <p>
                    También puedes enviarnos un <a type='button' id='contact-us' className='p-0 text-white underline' onClick={ contact }>correo electrónico directo</a> con cualquier duda
                </p>
            </div>
            <div className='col-12 col-md-10 mx-auto mt-3'>
                <div className='col-12 d-flex align-items-center'>
                    <div className='col-6 border-right-white pb-2 text-center'>
                        <button id='testimonys' className='btn p-0 text-white strong' onClick={ changeContent }>
                            Testimonios
                        </button>
                    </div>
                    <div className='col-6 pb-2 text-center'>
                        <button id='conditions' className='btn p-0 text-white strong' onClick={ changeContent }>
                            Políticas de Privacidad
                        </button>
                    </div>
                </div>
                <div className='col-12 bg-main-white text-blue-primary border-radius shadow' id='supportContent'>
                    {
                        page === 'conditions' ?

                            <PrivacyPolitics />

                        :

                        page === 'testimonys' ?

                            <Testimonys showForm={ showForm } />

                        :

                        page === 'contact-us' ?

                            <ContactUs />

                        :

                            <FormTestimony res={ props.res } />

                    }
                </div>
            </div>
        </div>

    )

}