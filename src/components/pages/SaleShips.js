import React, { useEffect } from 'react';

import ShipsFilter from '../layouts/ShipsFilter';

const Saleships = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <div className='d-block'>
                    <h2 className='text-gradient-blue'>
                        EMBARCACIONES USADAS
                    </h2>
                </div>
                <div className='d-block'>
                    <h2 className='text-gradient-blue'>
                        Veleros | Lanchas
                    </h2>
                </div>
            </div>
            <div className='col-12 py-2 mt-5 d-flex align-items-center' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                <div className='col-md-7 col-lg-6 text-purple' style={{ 'opacity': 1 }}>
                    <strong>
                        678 EMBARCACIONES ENCONTRADAS
                    </strong>
                </div>
                <div className='col-lg-6 d-flex justify-content-end'>
                    <div className='col-6'>
                        <div className='select-container'>
                            <select id='filter' className='form-control py-1' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                                <option value='dateNew'>Recientes</option>
                            </select>
                            <i className='border-black'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 px-0 mt-3'>
                <ShipsFilter />
            </div>
        </div>
    );
}

export default Saleships;
