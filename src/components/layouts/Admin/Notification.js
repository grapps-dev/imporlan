import React, { useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Notification(props){

    const { notification } = props;

    return(

        <li>
            <FontAwesomeIcon icon={ faCheck } /> <span style={{ 'fontWeight': 'bolder' }}>{ notification.notification }. { notification.content }</span>
        </li>

    )

}