import React from 'react';

import Logotipo from '../../../assets/img/logotipo.png';
import BlackBoat from '../../../assets/img/black-boat.png';
import BlackShopingBag from '../../../assets/img/black-shopping-bag.png';
import BlackTrade from '../../../assets/img/black-trade.png';
import BlackSelection from '../../../assets/img/black-selection.png';
import BlackSupport from '../../../assets/img/black-support.png';

export default function MenuMobile() {

    const styles = {

        container: {

            bottom: '0px',
            borderTop: '2px solid black',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            height: '60px',
            left: '0px',
            position: 'fixed',
            width: '100%',
            zIndex: '99999999'

        }

    }

    return(

        <div className='bg-main-white d-none text-blue-primary' id='containerMenuMobile' style={ styles.container }>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ BlackBoat } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ BlackShopingBag } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ BlackTrade } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ BlackSelection } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ BlackSupport } className='menu-icon' />
            </div>
        </div>

    )

}