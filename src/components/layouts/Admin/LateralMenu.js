import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logotipo from '../../../assets/img/logotipo.png';
import WhiteBoat from '../../../assets/img/white-boat.png';
import WhiteShopingBag from '../../../assets/img/white-shoping-bag.png';
import WhiteTrade from '../../../assets/img/white-trade.png';
import WhiteSelection from '../../../assets/img/white-selection.png';
import WhiteSupport from '../../../assets/img/white-support.png';

export default function LateralMenu() {

    const [ user, setUser ] = useState('');
    const [ show, setShow ] = useState(true);

    const styles = {

        menu: {

            display: typeof(user) === 'object' ? 'flex' : 'none',
            height: '100vh',
            padding: '2rem 1rem',
            position: 'fixed',
            top: '0',
            width: '10vw',
            zIndex: '9999999999999'

        }

    }

    useEffect(() => {

        if(sessionStorage.getItem('user')){

            setUser(JSON.parse(sessionStorage.getItem('user')))

        }

    }, [ setUser ])

    return(

        <div style={ styles.menu } className='bg-blue-primary' id='lateralMenu'>
            <div className='col-12 px-0'>
                <div className='col-12 px-0 justify-content-center'>
                    <img src={ Logotipo } className='img-fluid' alt='ImporLan' />
                </div>
                <div className='col-12 px-0 text-center' style={{ 'marginTop': '5rem' }}>
                    <Link className='d-block px-1 py-3' to='/imporlan/dashboard'>
                        <img src={ WhiteBoat } className='menu-icon' />
                        <strong className='d-block text-white'>
                            Inicio
                        </strong>
                    </Link>
                    <Link className='d-block p-1 py-3'>
                        <img src={ WhiteShopingBag } className='menu-icon' />
                        <strong className='d-block text-white'>
                            Comprar
                        </strong>
                    </Link>
                    <Link className='d-block p-1 py-3'>
                        <img src={ WhiteTrade } className='menu-icon' />
                        <strong className='d-block text-white'>
                            Pagos
                        </strong>
                    </Link>
                    <Link className='d-block p-1 py-3' to='/imporlan/dashboard/plans'>
                        <img src={ WhiteSelection } className='menu-icon' />
                        <strong className='d-block text-white'>
                            Planes
                        </strong>
                    </Link>
                    <Link className='d-block p-1 py-3' to='/imporlan/dashboard/support'>
                        <img src={ WhiteSupport } className='menu-icon' />
                        <strong className='d-block text-white'>
                            Soporte
                        </strong>
                    </Link>
                </div>
            </div>
        </div>

    )

}