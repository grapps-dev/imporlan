import React from 'react';

import CheckForm from '../layouts/CheckForm';
import Plans from '../layouts/Plans';
import ServicesIndex from '../layouts/ServicesIndex';
import Reviews from '../layouts/Reviews';

import Boat from '../../assets/img/boat.png';
import BoatSecondStep from '../../assets/img/boat-step-2.png';
import BoatThirdStep from '../../assets/img/boat-step-3.png';
import BoatFourthStep from '../../assets/img/boat-step-4.png';
import BoatFifthStep from '../../assets/img/boat-step-5.png';
import IphoneX from '../../assets/img/iphone-x-1.png';
import BoatTraderIcon from '../../assets/img/boat-trader-icon.png'
import BoatsComIcon from '../../assets/img/boats-com-icon.png';
import PopYachtsIcon from '../../assets/img/pop-yachts-icon.png';
import YachtworldlIcon from '../../assets/img/yachtworld-icon.png';
import BuyUSA from '../../assets/img/buy-usa.png';
import InfoChile from '../../assets/img/info-chile.png';

export default function Index() {

    const styles = {

        divBlue: {

            background: "rgba(166, 236, 253, .41)",
            backdropFilter: "blur(4.83931px)",
            borderRadius: "5px",
            boxShadow: "0px 27.4741px 37.3366px -16.2027px rgba(109, 229, 255, 0.73)",
            height: "58px",
            maxWidth: "397px"

        }

    }

    return(

        <div className='row'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Buy your next boat in simple steps and safery!
                </h2>
                <div className='d-block mx-auto mt-4' style={ styles.divBlue }>
                    { /* CUADRO DEGRADADO */ }
                </div>
            </div>
            <div className='col-12 mt-5 d-flex'>
                <div className='col-12 steps' style={{ 'width': "100%" }}>
                    <div className='step-div'>
                        <div className='bg-white py-2 px-4 border-radius shadow' style={{ 'height': '206px' }}>
                            <div style={{ 'height': '40%' }}>
                                <img src={ Boat } className='img-fluid' />
                            </div>
                            <div className='col-12 px-0 text-center mt-3'>
                                <strong className='d-block text-blue-steps'>
                                    Paso #1
                                </strong>
                                <hr />
                                <span className='d-block text-blue-steps-names'>
                                    Búsqueda
                                </span>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className='border circle mx-auto align-items-center d-flex justify-content-center text-white' style={{ "backgroundColor": '#6DA0FF', 'width': '50.56px', 'height': '50.56px', 'fontSize': '18px' }}>
                                1
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <img src={ IphoneX } className='img-fluid' />
                        </div>
                    </div>
                    <div className='step-div'>
                        <div className='bg-white py-2 px-4 border-radius shadow' style={{ 'height': '206px' }}>
                            <div style={{ 'height': '40%' }}>
                                <img src={ BoatSecondStep } className='img-fluid' />
                            </div>
                            <div className='col-12 px-0 text-center mt-3'>
                                <strong className='d-block text-blue-steps'>
                                    Paso #2
                                </strong>
                                <hr />
                                <span className='d-block text-blue-steps-names'>
                                    Inspección
                                </span>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className='border circle mx-auto align-items-center d-flex justify-content-center text-white' style={{ "backgroundColor": '#5363F3', 'width': '50.56px', 'height': '50.56px', 'fontSize': '18px' }}>
                                2
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <img src={ IphoneX } className='img-fluid' />
                        </div>
                    </div>
                    <div className='step-div'>
                        <div className='bg-white py-2 px-4 border-radius shadow' style={{ 'height': '206px' }}>
                            <div style={{ 'height': '40%' }}>
                                <img src={ BoatThirdStep } className='img-fluid' />
                            </div>
                            <div className='col-12 px-0 text-center mt-3'>
                                <strong className='d-block text-blue-steps'>
                                    Paso #3
                                </strong>
                                <hr />
                                <span className='d-block text-blue-steps-names'>
                                    Compra
                                </span>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className='border circle mx-auto align-items-center d-flex justify-content-center text-white' style={{ "backgroundColor": '#6DB9FF', 'width': '50.56px', 'height': '50.56px', 'fontSize': '18px' }}>
                                3
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <img src={ IphoneX } className='img-fluid' />
                        </div>
                    </div>
                    <div className='step-div'>
                        <div className='bg-white py-2 px-4 border-radius shadow' style={{ 'height': '206px' }}>
                            <div style={{ 'height': '40%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '1rem' }}>
                                <img src={ BoatFourthStep } className='img-fluid' />
                            </div>
                            <div className='col-12 px-0 text-center mt-3'>
                                <strong className='d-block text-blue-steps'>
                                    Paso #4
                                </strong>
                                <hr />
                                <span className='d-block text-blue-steps-names'>
                                    ¡En Camino!
                                </span>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className='border circle mx-auto align-items-center d-flex justify-content-center text-white' style={{ "backgroundColor": '#6DE5FF', 'width': '50.56px', 'height': '50.56px', 'fontSize': '18px' }}>
                                4
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <img src={ IphoneX } className='img-fluid' />
                        </div>
                    </div>
                    <div className='step-div'>
                        <div className='bg-white py-2 px-4 border-radius shadow' style={{ 'height': '206px' }}>
                            <div style={{ 'height': '40%' }}>
                                <img src={ BoatFifthStep } className='img-fluid' />
                            </div>
                            <div className='col-12 px-0 text-center mt-3'>
                                <strong className='d-block text-blue-steps'>
                                    Paso #5
                                </strong>
                                <hr />
                                <span className='d-block text-blue-steps-names'>
                                    ¡Envío!
                                </span>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className='border circle mx-auto align-items-center d-flex justify-content-center text-white' style={{ "backgroundColor": '#6DA0FF', 'width': '50.56px', 'height': '50.56px', 'fontSize': '18px' }}>
                                5
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <img src={ IphoneX } className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 text-center my-3'>
                <h4 className='text-gradient-blue'>
                    Para empezar, es importante considerar y saber lo siguiente: Paso #1    
                </h4>
            </div>
            <div className='col-12 bg-img-blue-boat border-radius py-3 shadow'>
                <div className='col-10 mx-auto text-center'>
                    <h2>
                        Do you want to buy used or new boats but want someone to check them for you?
                    </h2>
                    <div className='d-block'>
                        <a className='btn bg-white border-radius py-2'>
                            Check out our inspection and test-drive plans
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-12 border-radius text-center mt-5 shadow py-3' style={{ 'background': 'rgb(255, 255, 255, .11)' }}>
                <h2 className='text-gradient-blue'>
                    Check boats in the following portals
                </h2>
                <div className='row mt-3 px-4 justify-content-around'>
                    <div className='col-md-3 p-3 justify-content-center border-radius align-items-center d-flex bg-white' style={{ 'height': '85px' }}>
                        <img src={ BoatTraderIcon } className='img-fluid' />
                    </div>
                    <div className='col-md-3 mt-3 mt-md-0 p-3 justify-content-center border-radius align-items-center d-flex bg-white' style={{ 'height': '85px' }}>
                        <img src={ YachtworldlIcon } className='img-fluid' />
                    </div>
                    <div className='col-md-3 mt-3 mt-md-0 p-3 justify-content-center border-radius align-items-center d-flex bg-white' style={{ 'height': '85px' }}>
                        <img src={ PopYachtsIcon } className='img-fluid' />
                    </div>
                    <div className='col-md-3 mt-3 mt-md-0 p-3 justify-content-center border-radius align-items-center d-flex bg-white' style={{ 'height': '85px' }}>
                        <img src={ BoatsComIcon } className='img-fluid' />
                    </div>
                </div>
            </div>
            <CheckForm />
            <div className='col-12 d-none d-md-block mt-5 bg-img-blue-boat border-radius pt-3' style={{ 'paddingBottom': '20rem' }}>
                <h1 className='text-center'>
                    En ImporLan
                </h1>
                <p className='text-center col-10 mx-auto'>
                    Te asesoramos con los consejos y ayuda que necesitas, para escoger la lancha o embarcación que más se acomode a tus necesidades y presupuesto.
                    <br />En Imporlan te ayudamos a tomar la mejor decisión a la hora de comprar lanchas usadas en USA!
                </p>
                <div className='col-12 text-center'>
                    <h2 clasName=''>
                        ¿Cómo funciona?
                    </h2>
                    <div className='row justify-content-around mt-5 w-100' style={{ 'position': 'absolute', 'height': '384px' }}>
                        <div className=' col-12 col-md-5 col-lg-4 bg-white border-radius shadow d-flex align-items-center'>
                            <div className='col-12' style={{ 'height': '100%' }}>
                                <div className='d-flex align-items-center' style={{ 'height': '70%' }}>
                                    <img src={ BuyUSA } className='img-fluid' />
                                </div>
                                <div style={{ 'height': '10%' }}>
                                    <h2 className='text-dark d-block mt-auto'>
                                        Compra USA
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-md-5 col-lg-4 bg-white border-radius shadow d-flex align-items-center'>
                            <div className='col-12' style={{ 'height': '100%' }}>
                                <div className='d-flex align-items-center' style={{ 'height': '70%' }}>
                                    <img src={ InfoChile } className='img-fluid' />
                                </div>
                                <div style={{ 'height': '20%' }}>
                                    <h2 className='text-dark d-block mt-auto'>
                                        Info ImporLan
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 d-block d-md-none mt-5 bg-img-blue-boat border-radius py-3' style={{ 'marginBottom': '-7rem' }}>
                <h1 className='text-center'>
                    En ImporLan
                </h1>
                <p className='text-center col-10 px-0 mx-auto'>
                    Te asesoramos con los consejos y ayuda que necesitas, para escoger la lancha o embarcación que más se acomode a tus necesidades y presupuesto.
                    <br />En Imporlan te ayudamos a tomar la mejor decisión a la hora de comprar lanchas usadas en USA!
                </p>
                <div className='col-12 text-center'>
                    <h2 clasName=''>
                        ¿Cómo funciona?
                    </h2>
                    <div className='row justify-content-around mt-5'>
                        <div className='col-12 col-md-5 col-lg-4 bg-white border-radius shadow d-flex px-0 align-items-center'>
                            <div className='col-12' style={{ 'height': '100%' }}>
                                <div className='d-block align-items-center' style={{ 'height': '70%' }}>
                                    <img src={ BuyUSA } className='img-fluid' />
                                </div>
                                <div style={{ 'height': '10%' }}>
                                    <h2 className='text-dark d-block mt-auto'>
                                        Compra USA
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-md-5 col-lg-4 bg-white border-radius shadow mt-3 d-flex align-items-center'>
                            <div className='col-12' style={{ 'height': '300px', 'marginTop': '.8rem' }}>
                                <div className='d-block align-items-center' style={{ 'height': '70%' }}>
                                    <img src={ InfoChile } className='img-fluid' />
                                </div>
                                <div className='d-block' style={{ 'height': '30%' }}>
                                    <h2 className='text-dark d-block mt-auto'>
                                        Info ImporLan
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Plans />
            <ServicesIndex />
            <Reviews />
        </div>

    )

}