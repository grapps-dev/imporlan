import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';

import NotificationBell from '../../../assets/img/bell.png';

export default function Navbar() {

    const [ user, setUser ] = useState('');
    const [ show, setShow ] = useState(true);

    const styles = {

        navbar: {

            display: typeof(user) === 'object' ? 'flex' : 'none',
            position: 'sticky',
            width: '100vw',
            zIndex: '999999'

        }

    }

    console.log(typeof(user))

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')))

        }

    }, [ setUser ])

    return(

        <div style={ styles.navbar } className='navbar-expand border-bottom-dark bg-blue-primary align-items-center justify-content-end'>
            <div className='col-auto position-relative'>
                <button className='btn'>
                    <span className='text-white d-flex align-items-center justify-content-center bg-danger' style={{ 'borderRadius': '50px', 'height': '25px', 'position': 'absolute', 'fontSize': '10px', 'top': '0', 'right': '10px', 'width': '25px' }}>1</span>
                    <img src={ NotificationBell } alt='Notifications' />
                </button>
            </div>
            <div className='col-auto'>
                <Dropdown show={ show }>
                    <Dropdown.Toggle className='bg-transparent nav-link border-0 text-white' style={{ 'color': 'white' }} id="dropdownUser">
                        <img src={ 'http://api-imporlan.test/img/users/' + user.photo } alt={ user.name } style={{ 'borderRadius': '50px', 'height': '30px', 'marginRight': '.5rem', 'width': '30px' }} />
                        <span className='text-white'>
                            { user.name }
                        </span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
        </div>

    )

}