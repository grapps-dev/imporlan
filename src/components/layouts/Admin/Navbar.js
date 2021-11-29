import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

import NotificationBell from '../../../assets/img/black-bell.png';

import { URL_LOCAL_BACKEND as URL } from '../../../const';

import Notification from './Notification';

export default function Navbar(props) {

    //const { user } = props;
    const [ user, setUser ] = useState({})
    const [ show, setShow ] = useState(false);
    const [ notifications, setNotifications ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const styles = {

        navbar: {

            display: typeof(user) === 'object' ? 'flex' : 'none',
            left: '0px',
            position: 'fixed',
            top: '0px',
            width: '100%',
            zIndex: '999999999'

        }

    }

    const noWatchNotifications = (notifications) => {

        notifications.forEach(notification => {

            if(!notification.view){

                setCounter(counter => counter + 1)

            }

        })

    }

    const getNotifications = () => {

        setUser(JSON.parse(sessionStorage.getItem('user')));
        if(user){

            //setUser(JSON.parse(sessionStorage.getItem('user')));
            axios.get(URL + 'notifications/' + user.id, {
                headers : {
                   "Authorization" : `Bearer ${ sessionStorage.getItem('token') } `
                }
              })
              .then(res => {
          
                setNotifications(res.data);
                noWatchNotifications(res.data);
          
              })
              .catch(err => {
          
                console.log(err.response);
          
            })
        }
    }

    useEffect(() => {

        setInterval(() => {

            getNotifications();

        }, 500)
        if(notifications.length > 0){

            noWatchNotifications(notifications);

        }

    }, [  ]);

    /*$(document).ready(() => {

        setInterval(() => {

            noWatchNotifications();

        }, 500)

    })*/

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
            id: user.id

        }
        axios.post(URL + 'notifications/saw', data)
        .then(res => {

            noWatchNotifications(notifications);
            $('li span').css('fontWeight', 'italic');
            setCounter(0)

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
                    <span className='text-white d-flex align-items-center justify-content-center bg-danger' style={{ 'borderRadius': '50px', 'height': '25px', 'position': 'absolute', 'fontSize': '10px', 'top': '0', 'right': '10px', 'width': '25px' }}>{ counter }</span>
                    <img src={ NotificationBell } id='img-bell' alt='Notifications' />
                </button>
                <div id='notifications' className='position-absolute py-2 d-none bg-main-white' style={{ 'fontSize': '12px', 'maxHeight': '250px', 'minWidth': '150px', 'overflowY': 'auto', 'width': '250px' }}>
                    <ul>
                        {
                            typeof(notifications) === 'object' ? notifications.map(notification => <Notification notification={ notification } key={ notification.id } />) : ''
                            
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