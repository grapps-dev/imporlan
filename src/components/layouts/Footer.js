import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import IGImg1 from '../../assets/img/img-ig-1.png';
import IGImg2 from '../../assets/img/img-ig-2.png';
import IGImg3 from '../../assets/img/img-ig-3.png';
import WebPay from '../../assets/img/webpay.png';

export default function Footer() {

    return(

        <footer className='row mt-5 text-white' style={{ 'fontSize': '.8rem', 'minHeight': '196px' }}>
            <div className='col-md-6 col-lg-3'>
                <div className='col-12' style={{ 'height': '100%' }}>
                    <div style={{ 'height': '20%' }}>
                        <span>
                            GALERÍA DE FOTOS DE INSTAGRAM
                        </span>
                    </div>
                    <div className='row d-none d-lg-flex mt-3 w-100 mx-auto p-2' style={{ 'height': '80%' }}>
                        <div className='col-lg-4 pl-0 pr-1'>
                            <img src={ IGImg1 } className='img-fluid border-radius' />
                        </div>
                        <div className='col-lg-4 px-1'>
                            <img src={ IGImg2 } className='img-fluid border-radius' />
                        </div>
                        <div className='col-lg-4 pr-0 pl-1'>
                            <img src={ IGImg3 } className='img-fluid border-radius' />
                        </div>
                        <div className='col-12 px-0 mt-3'>
                            <a className='btn btn-blue-ig w-100 '>
                                <FontAwesomeIcon icon={ faInstagram } /> Síguenos en Instagram
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-12 px-0 mt-3 d-block d-lg-none'>
                        <a className='btn btn-blue-ig w-100 '>
                            <FontAwesomeIcon icon={ faInstagram } /> Síguenos en Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-3 mt-3 mt-md-0'>
                <div className='col-12' style={{ 'height': '100%' }}>
                    <div style={{ 'height': '20%' }}>
                        <span>
                            MEDIOS DE PAGO ELECTRÓNICO
                        </span>
                    </div>
                    <div className='col-12 d-flex align-items-center bg-white border-radius p-3 text-center mt-3' style={{ 'height': '70%' }}>
                        <img src={ WebPay } className='img-fluid' />
                    </div>
                </div>  
            </div>
            <div className='col-md-6 col-lg-3 mt-3 mt-lg-0'>
                <div className='col-12' style={{ 'height': '100%' }}>
                    <div style={{ 'height': '20%' }}>
                        <span>
                            ENLACES DIRECTOS
                        </span>
                    </div>
                    <div className='col-12 d-flex align-items-center p-0' style={{ 'height': '80%' }}>
                        <ul>
                            <li className='my-3'>
                                <Link to='/imporlan/buy'>
                                    LANCHAS USADAS
                                </Link>
                            </li>
                            <li className='my-3'>
                                <Link to='/imporlan/buy'>
                                    VELEROS USADOS
                                </Link>
                            </li>
                            <li className='my-3'>
                                <Link to='/imporlan/buy'>
                                    LANCHAS DE PESCA USADAS
                                </Link>
                            </li>
                            <li className='my-3'>
                                COMPARTE TU TESTIMONIO
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
            <div className='col-md-6 col-lg-3 mt-3 mt-lg-0'>
                <div className='col-12' style={{ 'height': '100%' }}>
                    <div style={{ 'height': '20%' }}>
                        <span>
                            ENLACES DE INTERÉS
                        </span>
                    </div>
                    <div className='col-12 d-flex align-items-center p-0' style={{ 'height': '80%' }}>
                        <ul>
                            <li className='my-3'>
                                <Link to='/imporlan/terms-and-conditions'>
                                    AVISO LEGAL
                                </Link>
                            </li>
                            <li className='my-3'>
                                CONTÁCTANOS
                            </li>
                            <li className='my-3'>
                                PREGUNTAS FRECUENTES
                            </li>
                            <li className='my-3'>
                                <Link to='/imporlan/bank-transfer'>
                                    TRANSFERENCIA BANCARIA
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
        </footer>

    )

}