import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { URL_LOCAL_BACKEND as URL } from '../../const';

export default function DeleteFakeUser(props) {

    const { email } = useParams();

    const styles = {

        inputs: {

            background: "rgb(255, 255, 255, .6)",
            border: "2px solid #A9BECE",
            borderRadius: "50px"

        }

    }

    const handleDeleteUser = async() => {

        var formData = {

            email: email

        }
        await axios.post(URL + 'delete-fake-user', formData)
        .then(res => {

            props.res(res.data, 'green');

        })

    }

    const handleCancel = () => {

        window.location.href = 'http://localhost:3000/imporlan/sign-in';

    }

    return(

        <div className='row pb-5'>
            <div className='col-12 text-center'>
                <h2 className='text-gradient-blue'>
                    ¿Seguro deseas borrar esta cuenta?
                </h2>
                <strong>
                    <span className='text-danger'>IMPORTANTE:</span> Esta acción es irrevocable
                </strong>
            </div>
            <div className='col-12 justify-content-center d-flex mt-5'>
                <button onClick={ handleCancel } className='btn mr-3' style={ styles.inputs }>
                    Cancelar
                </button>
                <button onClick={ handleDeleteUser } className='btn ml-3 bg-danger text-white' style={ styles.inputs }>
                    Aceptar
                </button>
            </div>
        </div>

    )

}