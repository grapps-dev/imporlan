import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faYoutube, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Logotipo from '../../assets/img/logotipo.png';
import SignUpIcon from '../../assets/img/sign-up-icon.png';
import SignInIcon from '../../assets/img/sign-in-icon.png';

export default function Navbar() {

    const [ user, setUser ] = useState('');

    const styles = {

        header: {

            display: typeof(user) === 'object' ? 'none' : 'block',
            padding: "1rem 0px"

        }

    }

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')))

        }

    }, [ setUser ])

    return(

        <div style={ styles.header } id='header'>
                <div className='col-12 d-block d-lg-flex align-items-center pr-0'>
                    <div className='col-lg-3'>
                        <a className='navbar-brand'>
                            <img src={ Logotipo } className='img-fluid' />
                        </a>
                    </div>
                    <div className='col-12 col-lg-9 ml-auto d-flex justify-content-end px-0 pl-md-4 pr-md-0 mt-3 mt-xl-0 align-self-right'>
                        <div className='col-3 d-none d-md-flex justify-content-around px-0'>
                            <div className='border-circle text-white' style={{ 'background': '#546CE9 25%'}}>
                                <a href='https://www.facebook.com/Imporlan/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={ faFacebookF } /></a>
                            </div>
                            <div className='border-circle text-white' style={{ 'background': '#31A8FF 25%'}}>
                                <a href='https://www.instagram.com/p/BsyWlNKnVA0/?hl=es' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={ faTwitter } /></a>
                            </div>
                            <div className='border-circle text-white' style={{ 'background': '#C4302B 25%'}}>
                                <a href='https://www.youtube.com/channel/UCQtEc2D7dxCKF9X8LeCYsPg' rel='noreferrer' target='_blank'>
                                    <FontAwesomeIcon icon={ faYoutube } />
                                </a>
                            </div>
                        </div>
                        <div className='col-4 col-md-3'>
                            <button className='btn bg-blue-primary w-100 p-2' style={{ 'color': '#5BEBFF', 'height': '44px' }}>
                                Vender
                            </button>
                        </div>
                        <div className='col-4 col-md-3'>
                            <Link className='btn bg-blue-light text-white w-100 p-2 text-center' to='/imporlan/sign-up'>
                                <img src={ SignUpIcon } className='img-fluid mr-lg-2' />
                                <span className='d-none d-xl-inline-flex'>
                                    Registro
                                </span>
                            </Link>
                        </div>
                        <div className='col-4 col-md-3'>
                            <Link className='btn bg-blue-aqua w-100 p-2 text-center' to='/imporlan/sign-in' style={{ 'color': '#39426C' }}>
                                <img src={ SignInIcon } className='img-fluid mr-lg-2' />
                                <span className='d-none d-xl-inline-flex'>
                                    Ingresar                                   
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>

    )

}