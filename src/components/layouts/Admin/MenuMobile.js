import React from 'react';

import Logotipo from '../../../assets/img/logotipo.png';
import WhiteBoat from '../../../assets/img/boat.png';
import WhiteShopingBag from '../../../assets/img/shopping-bag.png';
import WhiteTrade from '../../../assets/img/trade.png';
import WhiteSelection from '../../../assets/img/selection.png';
import WhiteSupport from '../../../assets/img/white-support.png';

export default function MenuMobile() {

    const styles = {

        container: {

            bottom: '0px',
            borderTop: '2px solid black',
            display: 'none',
            gridTemplateColumns: 'repeat(5, 1fr)',
            height: '60px',
            left: '0px',
            position: 'fixed',
            width: '100%',
            zIndex: '99999999'

        }

    }

    return(

        <div className='bg-blue-primary text-blue-primary' id='containerMenuMobile' style={ styles.container }>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ WhiteBoat } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ WhiteShopingBag } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ WhiteTrade } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ WhiteSelection } className='menu-icon' />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={ WhiteSupport } className='menu-icon' />
            </div>
        </div>

    )

}