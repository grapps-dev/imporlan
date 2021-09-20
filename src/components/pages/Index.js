import React from 'react';

import Boat from '../../assets/img/boat.png';
import BoatSecondStep from '../../assets/img/boat-step-2.png';
import BoatThirdStep from '../../assets/img/boat-step-3.png';
import BoatFourthStep from '../../assets/img/boat-step-4.png';
import BoatFifthStep from '../../assets/img/boat-step-5.png';

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
                    Buy your next boat  in simple steps and safery!
                </h2>
                <div className='d-block mx-auto mt-4' style={ styles.divBlue }>
                    { /* CUADRO DEGRADADO */ }
                </div>
            </div>
            <div className='col-12 mt-5 d-flex'>
                <div className='col-12 steps' style={{ 'width': "100%" }}>
                    <div className='bg-white py-2 px-4 border-radius shadow step-div'>
                        <div style={{ 'height': '30%' }}>
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
                    <div className='bg-white py-2 px-4 border-radius shadow step-div'>
                        <div style={{ 'height': '30%' }}>
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
                    <div className='bg-white py-2 px-4 border-radius shadow step-div'>
                        <div style={{ 'height': '30%' }}>
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
                    <div className='bg-white py-2 px-4 border-radius shadow step-div'>
                        <div style={{ 'height': '30%' }}>
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
                    <div className='bg-white py-2 px-4 border-radius shadow step-div'>
                        <div style={{ 'height': '30%' }}>
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
                </div>
            </div>
        </div>

    )

}