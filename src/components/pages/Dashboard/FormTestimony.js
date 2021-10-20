import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const Formtestimony = () => {

    const [ counter, setCounter ] = useState(0);
    const [ data, setData ] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "1px solid rgb(0, 23, 74)"

        },
        textcounter: {

            position: 'absolute',
            bottom: "8px",
            right: '80px'

        }

    }

    const handleSubmit = e => {

        console.log(data);
        e.preventDefault();
        e.target.reset();

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.id ] : e.target.value

        });

        if(e.target.id === 'contentComment'){

            var stringLength = e.target.value.length;
            if(stringLength <= 500){

                setCounter(e.target.value.length);
                $('#counter-error').addClass('d-none');
                $('#text-counter').css('bottom', '8px');

            } else {

                $('#counter-error').removeClass('d-none');
                $('#text-counter').css('bottom', '32px');

            }

        }

    }

    return (
        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    Publica tu testimonio
                </h2>
            </div>
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='bg-img-blue-boat py-4 px-4 border-radius shadow' onSubmit={ handleSubmit }>
                    <div className='col-12 d-md-flex px-0 px-md-3 mt-3'>
                        <div className='col-12 form-group'>
                            <textarea type='content' className='form-control' id='contentComment' placeholder='Escriba su mensaje... *' rows='10' style={ styles.inputs } onChange={ handleChange }></textarea>
                            <span id='text-counter' style={ styles.textcounter }>500 / { counter }</span>
                            <em id='counter-error' className='d-none text-danger'>Por favor, ingrese un máximo de 500 caracteres</em>
                        </div>
                    </div>
                    <div className='col-12 px-0 px-md-3 mb-3s'>
                        <div className='col-12 d-flex justify-content-center justify-content-md-end'>
                            <button className='btn' type='submit' style={ styles.inputs }>
                                Publicar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formtestimony;
