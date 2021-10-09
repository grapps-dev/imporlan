import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { expand } from '../../functions';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Shipsfilter = () => {

    const moreType = (e) => {

        expand('typeContainer', 'Type')

    }

    const moreMark = (e) => {

        expand('markContainer', 'Mark')

    }

    const moreModel = (e) => {

        expand('modelContainer', 'Model')

    }
    
    const moreYear = (e) => {

        expand('yearContainer', 'Year')

    }
    
    const morePrice = (e) => {

        expand('priceContainer', 'Price')

    }

    const moreFuel = (e) => {

        expand('fuelContainer', 'Fuel')

    }

    const moreState = (e) => {

        expand('stateContainer', 'State')

    }

    const moreSize = (e) => {

        expand('sizeContainer', 'Size')

    }

    return (
        <div className='col-12 col-md-4 pl-0'>
            <div className='col-12 py-4 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        TIPO DE EMBARCACIÓN
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusType' onClick={ moreType }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreType' onClick={ moreType }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='typeContainer'>
                    <div className='select-container'>
                        <select id='typeSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        MARCA
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusMark' onClick={ moreMark }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreMark' onClick={ moreMark }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='markContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        MODELO
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusModel' onClick={ moreModel }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreModel' onClick={ moreModel }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='modelContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        AÑO
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusYear' onClick={ moreYear }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreYear' onClick={ moreYear }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='yearContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        PRECIO (CLP)
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusPrice' onClick={ morePrice }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='morePrice' onClick={ morePrice }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='priceContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        TIPO DE COMBUSTIBLE
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusFuel' onClick={ moreFuel }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreFuel' onClick={ moreFuel }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='fuelContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        ESTADO
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusState' onClick={ moreState }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreState' onClick={ moreState }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='stateContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className='col-12 py-4 mt-3 border-radius bg-img-blue-boat'>
                <span className='d-flex px-3 align-items-center justify-content-between'>
                    <div>
                        TAMAÑO
                    </div>
                    <div>
                        <button className='btn ml-2 d-none text-white' id='minusSize' onClick={ moreSize }>
                            <FontAwesomeIcon aria-hidden={ true } icon={ faMinus } />
                        </button>
                        <button className='btn ml-2 text-white' id='moreSize' onClick={ moreSize }>
                            <FontAwesomeIcon aria-hidden={ true }  icon={ faPlus } />
                        </button>
                    </div>
                </span>
                <div className='col-12 toggle-container' id='sizeContainer'>
                    <div className='select-container'>
                        <select id='markSelect' className='form-control py-1 text-white' style={{ 'background': 'rgb(52, 91, 220, .2)' }}>
                            <option className='bg-img-blue-boat' value='boat'>
                                Bote
                            </option>
                            <option className='bg-img-blue-boat' value='ship'>
                                Lancha
                            </option>
                        </select>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipsfilter;
