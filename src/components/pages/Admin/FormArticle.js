import React, { useState, useEffect } from 'react';

import LoginFigureTop from '../../../assets/img/login-figure-top.png';
import LoginFigureBottom from '../../../assets/img/login-figure-bottom.png';

export default function FormArticle(props) {

    const [ counter, setCounter ] = useState(0);
    const [ data, setData ] = useState({});
    const [ error, setError ] = useState('');
    const [ btnText, setBtnText ] = useState('Enviar');
    const [ user, setUser ] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)

        if(sessionStorage.getItem('user')){

            var data = JSON.parse(sessionStorage.getItem('user'));
            var split = data.name.split(' ');
            setUser({
                name: split[0],
                secondName: split[1],
                email: data.email,
                phone: data.phone,
            });

        }

    }, [])

    const handleSubmit = e => {}

    const handleChange = e => {}

    return(

        <div className='row pb-5 animate__animated animate__backInRight'>
            <img src={ LoginFigureTop } className='figureTop' style={{ 'position': 'absolute', 'right': '0px', 'top': '0px', 'maxWidth': '300px' }} />
            <div className='col-12 col-md-10 mx-auto mt-5'>
                <form className='py-4 px-4' onSubmit={ handleSubmit }>
                    <div className='col-12 px-2 text-center my-3'>
                        <h2 className='text-gradient-blue'>
                            Nuevo Artículo
                        </h2>
                        <strong>
                            Déjanos un mensaje y aclararemos tus dudas
                        </strong>
                    </div>
                </form>
            </div>
        </div>

    )

}