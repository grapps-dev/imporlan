import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function ServiceSquare(props) {

    const { service } = props;
    const [ link, setLink ] = useState('');

    $(document).ready(() => {

        switch(service.title){

            case 'Vender':

                setLink('sell-plans');
                break;

            case 'Compra (Búsqueda)':

                setLink('plans-chile');
                break;

            case 'Importar':

                setLink('import-plans');
                break;

            case 'Transporte/Envío':

                setLink('import-plans');
                break;
                
            case 'Registro':

                setLink('contact/register-ships');
                break;

            case 'Curso de Vela':

                setLink('contact/course');
                break;
    
            default:

                console.log('Nothing');

        }

    })

    return(

        <div className='col-md-4 mb-4'>
            <div className='col-12 bg-white text-center p-3 d-flex' style={{ 'minHeight': "100%", 'flexWrap': 'wrap', 'alignItems': 'center', 'justifyContent': 'center' }}>
                <div className='col-12 mb-3'>
                    <img src={ service.img } className='img-fluid' />
                </div>
                <strong>
                    <Link className='text-blue-primary' to={ '/imporlan/' + link }>
                        { service.title }
                    </Link>
                </strong>
                <p className='text-blue-steps-names mt-3'>
                    { service.description }
                </p>
            </div>
        </div>

    )

}