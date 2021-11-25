import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

import NotificationBell from '../../../assets/img/black-bell.png';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

import Notification from './Notification';

export default function Navbar(props) {

    const [ user, setUser ] = useState('');
    const [ show, setShow ] = useState(false);
    const [ notifications, setNotifications ] = useState({});

    const styles = {

        navbar: {

            display: typeof(user) === 'object' ? 'flex' : 'none',
            position: 'fixed',
            top: '0px',
            width: '100%',
            zIndex: '999999999999'

        }

    }

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')));

            let data = {

                token: sessionStorage.getItem('token'),
                id: props.user.id

            }
            setTimeout(() => {

                axios.get(URL + 'notifications/' + data.id, {
                    headers : {
                       "Authorization" : `Bearer ${ data.token } `
                    }
                })
                .then(res => {
    
                    setNotifications(res.data);
    
                })
                .catch(err => {
    
                    console.log(err.response);
    
                })

            }, 1000)

        }

    }, [ ]);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const showNotifications = e => {

        $('#notifications').toggleClass('d-none')

        let data = {

            token: sessionStorage.getItem('token'),
            id: props.user.id

        }
        axios.post(URL + 'notifications/saw', data)
        .then(res => {

            $('li a').css('fontWeight', 'italic');

        })
        .catch(err => {

            console.log(err.response.data);

        })

    }

    $(document).click(e => {

        if(e.target.id !== 'notificationsContainer' && e.target.id !== 'bell' && e.target.id !== 'img-bell'){

            $('#notifications').addClass('d-none')

        }
    
    })

    const closeSession = () => {

        sessionStorage.clear();
        let loc = window.location.origin + '/imporlan';
        window.location.href =  loc;

    }

    return(

        <div style={ styles.navbar } className='navbar-expand border-bottom-dark bg-main-white align-items-center justify-content-end'>
            <div className='col-auto position-relative' id='notificationsContainer'>
                <button className='btn' id='bell' onClick={ showNotifications }>
                    <span className='text-white d-flex align-items-center justify-content-center bg-danger' style={{ 'borderRadius': '50px', 'height': '25px', 'position': 'absolute', 'fontSize': '10px', 'top': '0', 'right': '10px', 'width': '25px' }}>1</span>
                    <img src={ NotificationBell } id='img-bell' alt='Notifications' />
                </button>
                <div id='notifications' className='position-absolute p-2 d-none bg-main-white' style={{ 'fontSize': '12px', 'minWidth': '150px', 'width': '200px' }}>
                    <ul>
                        {
                            notifications.forEach(notification => <Notification notification={ notification } key={ notification.id } />)
                            
                        }
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