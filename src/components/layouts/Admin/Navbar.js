import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';

import NotificationBell from '../../../assets/img/black-bell.png';

export default function Navbar() {

    const [ user, setUser ] = useState('');
    const [ show, setShow ] = useState(false);

    const styles = {

        navbar: {

            display: typeof(user) === 'object' ? 'flex' : 'none',
            position: 'fixed',
            top: '0px',
            width: '100%',
            zIndex: '999999'

        }

    }

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')))

        }

    }, [ setUser ]);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const showNotifications = e => {

        $('#notifications').toggleClass('d-none')

    }

    $(document).click(e => {

        if(e.target.id !== 'notificationsContainer' && e.target.id !== 'bell' && e.target.id !== 'img-bell'){

            $('#notifications').addClass('d-none')

        }
    
    })

    const closeSession = () => {

        sessionStorage.clear();
        window.location.href = 'http://localhost:3000/imporlan'

    }

    return(

        <div style={ styles.navbar } className='navbar-expand border-bottom-dark bg-main-white align-items-center justify-content-end'>
            <div className='col-auto position-relative' id='notificationsContainer'>
                <button className='btn' id='bell' onClick={ showNotifications }>
                    <span className='text-white d-flex align-items-center justify-content-center bg-danger' style={{ 'borderRadius': '50px', 'height': '25px', 'position': 'absolute', 'fontSize': '10px', 'top': '0', 'right': '10px', 'width': '25px' }}>1</span>
                    <img src={ NotificationBell } id='img-bell' alt='Notifications' />
                </button>
                <div id='notifications' className='position-absolute d-none bg-main-white' style={{ 'minWidth': '150px', 'width': '200px' }}>
                    <ul>
                        <li>Hola</li>
                    </ul>
                </div>
            </div>
            <div className='col-auto'>
                <Dropdown show={ show } onMouseEnter={ showDropdown } onMouseLeave={ hideDropdown }>
                    <Dropdown.Toggle className='bg-transparent nav-link border-0' style={{ 'color': '#000000' }} id="dropdownUser">
                        <img src={ 'http://api-imporlan.test/img/users/' + user.photo } alt={ user.name } style={{ 'borderRadius': '50px', 'height': '30px', 'marginRight': '.5rem', 'width': '30px' }} />
                        <strong className='text-dark'>
                            { user.name }
                        </strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/imporlan/dashboard/update-profile">
                            Editar Perfil
                        </Dropdown.Item>
                        <Dropdown.Item onClick={ closeSession }>
                            Cerrar Sesión
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>

    )

}