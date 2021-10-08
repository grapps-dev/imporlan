import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import CompareIcon from '../../assets/img/compare-icon.svg';
import HeartIcon from '../../assets/img/heart-icon.png';
import BagIcon from '../../assets/img/bag-icon.png';
import Logotipo from '../../assets/img/logotipo.png';

export default function Navbar() {

    const showMenu = () => {

        $('#mobileMenu').addClass('show-menu')

    }

    const hiddeMenu = () => {

        $('#mobileMenu').removeClass('show-menu')

    }

    return(

        <>
            <nav className='navbar navbar-expand bg-light border-radius-top'>
                <ul className='navbar-nav mr-auto d-none d-md-flex'>
                    <li className='nav-item'>
                        <Link to='/imporlan/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            Top Buy
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            To Sell
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            Plans
                        </a>
                    </li>
                    <li className='nav-item'>
                        <Link to='/imporlan/information' className='nav-link'>
                            Information
                        </Link>
                    </li>
                </ul>
                <ul className='navbar-nav mr-auto d-flex d-md-none'>
                    <button type="button" className='btn' onClick={ showMenu }>
                        <FontAwesomeIcon icon={ faBars } />
                    </button>
                </ul>
                <div className='col-auto ml-auto'>
                    <div className='d-inline-flex'>
                        <a>
                            <span className='d-none d-lg-inline-flex'>
                                COMPARAR
                            </span>
                            <img src={ CompareIcon } className='ml-2' width='32px' height='32px' />
                        </a>
                    </div>
                    <div className='d-inline-flex'>
                        <a className='px-3'>
                            <img src={ HeartIcon } />
                            <span style={{ 'position': 'absolute', 'top': '-8px', 'right': '68px' }} id='count-heart' className='bg-blue-secondary circle text-center text-white'>
                                2
                            </span>
                        </a>
                    </div>
                    <div className='d-inline-flex'>
                        <a className='px-3'>
                            <img src={ BagIcon } />
                            <span style={{ "position": 'absolute', 'top': '-8px', 'right': '18px' }} id='count-bag' className='bg-blue-aqua circle text-center'>
                                3
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            <div className='col-12 px-0 d-md-none' id='mobileMenu'>
                <div className='col-7 px-0 bg-white'>
                    <div className='w-100 d-flex justify-content-end align-items-center'>
                        <button className='btn' onClick={ hiddeMenu } style={{ 'fontSize': '1.5rem' }}>
                            <FontAwesomeIcon icon={ faTimes } />
                        </button>
                    </div>
                    <div className='w-100 text-center'>
                        <img src={ Logotipo } style={{ 'width': '180px', 'heigth': '120px' }} />
                    </div>
                    <ul className='navbar-nav d-flex px-4 mt-3' style={{ 'justifyContent': 'space-evenly', 'height': '40%' }}>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                Start
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                Top Buy
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                To Sell
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                Plans
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                Information
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )

}