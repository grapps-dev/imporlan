import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Review from './Review';

import ClientPhoto from '../../assets/img/client-photo.png';

export default function Reviews() {

    const clients = [
        
        {
            id: 0,
            name: "Brayan Rodríguez",
            img: ClientPhoto,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ocupation: 'Developer',
            enterprise: 'Graphic Apps'
        },
        {
            id: 1,
            name: "Marcos Guánchez",
            img: ClientPhoto,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ocupation: 'Designer',
            enterprise: 'Graphic Apps'
        },
        {
            id: 2,
            name: "Juan Pablo",
            img: ClientPhoto,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ocupation: 'CEO',
            enterprise: 'ImporLan'
        }

    ]

    return(

        <div className='col-12' style={{ 'marginTop': '5rem' }}>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Drives Reviews
                </h2>
            </div>
            <div className='w-100 mt-5 overflow-hidden' style={{ 'whiteSpace': 'nowrap' }}>
                {
                    clients.map(client => <Review client={ client } key={ client.id } />)
                }
            </div>
            <div className='w-100 justify-content-center d-flex mt-3'>
                <button className='btn bg-white mr-2 border-circle'>
                    <FontAwesomeIcon icon={ faArrowLeft } />
                </button>
                <button className='btn bg-white ml-2 border-circle'>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </button>
            </div>
        </div>

    )

}