import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';

import { faCopy, faPhone, faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PayPalLogo from '../../assets/img/paypal-logo.svg';

export default function BankTransfer() {

    const copyText = (id) => (e) => {

        var aux = document.createElement('input');
        aux.setAttribute('value', document.getElementById(id).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Datos de tranferencia
                </h2>
            </div>
            <div className='row col-12 mx-auto mt-5 bg-img-blue-boat pt-2 py-4 px-4 border-radius shadow'>
                <div className='col-md-6 d-lg-flex align-items-center'>
                    <div className='col-xl-7'>
                        <strong>
                            CUENTA CORRIENTE (CLP)
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center'>
                        <span id='account-clp'>74233813</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-clp') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
                <div className='col-md-6 d-lg-flex mt-4 mt-md-0 align-items-center'>
                    <div className='col-lg-7'>
                        <strong>
                            CUENTA CORRIENTE (USD)
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center'>
                        <span id='account-usd'>5100369305</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-usd') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
                <div className='col-md-6 d-lg-flex mt-4 mt-lg-0 align-items-center'>
                    <div className='col-lg-7'>
                        <strong>
                            CÓDIGO SWIFT
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center'>
                        <span id='account-swift'>BSCHCLRM</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-swift') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
                <div className='col-md-6 d-lg-flex mt-4 mt-lg-0 align-items-center'>
                    <div className='col-lg-7'>
                        <strong>
                            IMPORLAN SPA RUT
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center'>
                        <span id='account-spa'>76.914.409-9</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-spa') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
                <div className='col-md-6 d-lg-flex mt-4 mt-lg-0 align-items-center'>
                    <div className='col-lg-7'>
                        <strong>
                            BANCO
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center'>
                        <span id='account-bank'>BANCO SANTANDER</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-bank') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
                <div className='col-md-6 d-lg-flex mt-4 mt-lg-0 align-items-center'>
                    <div className='col-lg-7'>
                        <strong>
                            CORREO ELECTRÓNICO
                        </strong>
                    </div>
                    <div className='col-lg-5 d-flex align-items-center' style={{ 'wordBreak': 'break-word' }}>
                        <span id='account-email'>CONTACTO@IMPORLAN.CL</span>
                        <button className='btn text-white' data-tip='Texto Copiado' data-event='click' onClick={ copyText('account-email') }>
                            <FontAwesomeIcon icon={ faCopy } />
                        </button>
                        <ReactTooltip />
                    </div>
                </div>
            </div>
            <div className='col-12 mt-5 text-center'>
                <div>
                    <img src={ PayPalLogo } className='img-fluid' />
                    <span className='d-block mt-2'>
                        CONTACTO@IMPORLAN.CL
                    </span>
                </div>
                <div className='col-md-10 mx-auto mt-4 text-center'>
                    SANTIAGO - CHILE
                    <div className='d-flex col-12 align-items-center justify-content-center mt-2'>
                        <div className='mr-3'>
                            <FontAwesomeIcon icon={ faPhone } />
                        </div>
                        <div>
                            <span className='d-block'>
                                F: +56 9 40211459
                            </span>
                            <span className='d-block'>
                                F: +56 2 24053026
                            </span>
                        </div>
                    </div>
                </div>
                <div className='col-md-10 mx-auto mt-4 text-center'>
                    <div className='col-12'>
                        <FontAwesomeIcon icon={ faEnvelope } />
                        <a href='mailto:contacto@imporlan.cl' className='ml-2'>CONTACTO@IMPORLAN.CL</a>
                    </div>
                    <div className='col-12 mt-3'>
                        <FontAwesomeIcon icon={ faExternalLinkAlt } />
                        <a href='https://imporlan.cl' target='_blank' rel='noreferrer' className='ml-2'>HTTPS://IMPORLAN.CL</a>
                    </div>
                </div>
            </div>
        </div>

    )

}