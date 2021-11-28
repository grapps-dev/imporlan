import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Notification(props){

    const { notification } = props;
    
    const styles = {

        span: {

            color: 'black',
            fontWeight: notification.view ? 'italic' : 'bolder'

        },
        icon: {

            color: 'black',
            marginRight: '.5rem'

        }

    }

    useEffect(() => {

        

    }, [])

    return(

        <li className='d-flex align-items-center border-bottom-dark px-3 py-2 m-0'>
            <FontAwesomeIcon style={ styles.icon } icon={ faCheck } /> <span style={ styles.span }>{ notification.notification }. { notification.content }</span>
        </li>

    )

}