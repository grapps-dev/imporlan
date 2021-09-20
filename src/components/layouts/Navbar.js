import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import CompareIcon from '../../assets/img/compare-icon.svg';
import HeartIcon from '../../assets/img/heart-icon.png';
import BagIcon from '../../assets/img/bag-icon.png';

export default function Navbar() {

    return(

        <nav className='navbar navbar-expand bg-light border-radius-top'>
            <ul className='navbar-nav mr-auto d-none d-md-flex'>
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
            <ul className='navbar-nav mr-auto d-flex d-md-none'>
                <button type="button" className='btn'>
                    <FontAwesomeIcon icon={ faBars } />
                </button>
            </ul>
            <div className='col-auto ml-auto'>
                <div className='d-inline-flex'>
                    <a className='px-3'>
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

    )

}