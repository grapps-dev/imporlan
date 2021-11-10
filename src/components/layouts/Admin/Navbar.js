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
            width: '100vw'

        }

    }

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')))

        }

    }, [ setUser ])

    return(

        <div style={ styles.navbar } className='d-flex navbar-expand border-bottom-white bg-transparent align-items-center justify-content-end text-white'>
            <div className='col-auto'>
                <img src={ NotificationBell } alt='Notifications' />
            </div>
            <div className='col-auto'>
                <Dropdown show={ show }>
                    <Dropdown.Toggle className='bg-transparent nav-link border-0' style={{ 'color': 'white' }} id="dropdownUser">
                        <img src={ 'http://api-imporlan.test/img/users/' + user.photo } alt={ user.name } style={{ 'borderRadius': '50px', 'height': '30px', 'marginRight': '.5rem', 'width': '30px' }} />
                        <span style={{ 'color': 'white' }}>
                            { user.name }
                        </span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
        </div>

    )

}