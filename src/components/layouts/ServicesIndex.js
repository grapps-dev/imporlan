import React from 'react';

import IconSearch from '../../assets/img/icon-search.png';
import IconSell from '../../assets/img/icon-sell.png';
import IconImport from '../../assets/img/icon-import.png';
import IconTransport from '../../assets/img/icon-transport.png';
import IconRegistration from '../../assets/img/icon-registration.png';
import IconSail from '../../assets/img/icon-sail.png';

import ServiceSquare from './ServiceSquare';

export default function ServicesIndex() {

    const services = [

        {
            id: 0,
            title: "Purchase (Search)",
            description: "Asesoría para una compra segura de embarcaciones, revisando todos los detalles.",
            img: IconSearch
        },
        {
            id: 1,
            title: "Sell",
            description: "Gestión de venta, nos encargamos de todo, para el mejor resultado.",
            img: IconSell
        },
        {
            id: 2,
            title: "Import",
            description: "Gestión de importación de embarcaciones de manera simple, cómoda y segura.",
            img: IconImport
        },
        {
            id: 3,
            title: "Transport/Shipping",
            description: "Servicio de traslado de embarcaciones de manera segura y eficiente.",
            img: IconTransport
        },
        {
            id: 4,
            title: "Registration",
            description: "Inscripción Realizamos la inscripción de su embarcación, en pocos días, liberándolo de burocracia.",
            img: IconRegistration
        },
        {
            id: 5,
            title: "Sail course",
            description: "Clases y cursos con los mejores, para navegar con licencia tu embarcación.",
            img: IconSail
        }

    ]

    return(

        <div className='col-12' style={{ 'marginTop': '5rem' }}>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Nuestros Servicios
                </h2>
                <h3 className='text-gradient-blue' style={{ 'fontWeight': '400' }}>
                    Simple, Fácil y Cómodo
                </h3>
            </div>
            <div className='row mt-5'>
                {
                    services.map(service => <ServiceSquare service={ service } key={ service.id } />)
                }
            </div>
        </div>

    )

}