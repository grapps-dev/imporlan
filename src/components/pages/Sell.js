import React, { useEffect } from 'react';

import Plan from '../layouts/Plan';

export default function Sell() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const plans = [

        {
            id: 0,
            name: 'ImporLan',
            actualPrice: '',
            oldPrice: '¡Pagas si vendes!',
            content: [

                'Gestión ImporLan',
                'Comisión del 4%',
                'Se paga al vender',
                '20 imagénes de la embarcación',
                'Vídeo'

            ]
        },
        {
            id: 1,
            name: 'Base',
            actualPrice: '',
            oldPrice: '¡Publica Gratis!',
            content: [

                'Venta directa',
                '30 días',
                '5 imágenes',
                'Vídeo'

            ]
        },
        {
            id: 2,
            name: 'Premium',
            actualPrice: '',
            oldPrice: '8.890',
            content: [

                'Venta directa',
                '60 días',
                '10 imágenes',
                'Vídeo'

            ]
        },
        {
            id: 4,
            name: 'Destacado',
            actualPrice: '',
            oldPrice: '14.890',
            content: [

                'Venta directa',
                '90 días',
                '15 imágenes',
                'Vídeo'

            ]
        }
    ]

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Servicios de Venta y Planes de Publicación
                </h2>
            </div>
            <div className='col-12 mt-5'>
                <p>
                    En ImporLan, estamos impulsados ​​a brindarle el mejor servicio en la industria. ¿Por qué? Porque solo nos pagan una comisión cuando le traemos un comprador.<br /><br />

                    Has leído correctamente, Creemos que no merecemos un centavo a menos que nuestro arduo trabajo haga que tu bolsillo crezca primero. Confiamos plenamente en nuestro servicio de bróker náutico que ni siquiera cobramos un peso al momento de publicar.<br /><br />

                    Cuando elige vender su embarcación a través de ImporLan, no tiene nada que perder, pero sí mucho que ganar.<br /><br />

                    Lo que ofrecemos a los vendedores es muy sencillo. En pocas palabras: comercializamos su embarcación en todo el país. Debido a que nos pagan por el rendimiento, creemos que si le presentamos un comprador, merecemos que nos paguen. Si no lo hacemos, ¿por qué deberíamos ganar algo?<br />
                </p>
            </div>
            <div className='col-12 mt-5 bg-white py-5 px-4 border-radius shadow text-center'>
                <h4>
                    ¡Te invitamos a dejar tu embarcación en nuestras manos! Felices te ayudaremos a venderla
                </h4><br />
                <h4>
                    ¡TE ESPERAMOS!
                </h4>
            </div>
            <div className='row col-12 mt-3'>
                { plans.map(plan => <Plan col='3' plan={ plan } key={ plan.id } />) }
            </div>
        </div>

    )

}