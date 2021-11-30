import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import axios from 'axios';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Review from './Review';
import Load from './Load';

import ClientPhoto from '../../assets/img/client-photo.png';

import { URL_LOCAL_BACKEND as URL } from '../../const';

export default function Reviews() {

    const [ reviews, setReviews ] = useState({});
    const [ count, setCount ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    const re = [

        {
            user: {

                photo: "andy-marquez.jpg",
                name: "Andy Márquez",

            },
            content: "El servicio de Imporlan es sorprendente. Muy feliz con mi compra!"
        },
        {
            user: {

                photo: "alberto-lathrop.jpg",
                name: "Alberto Lathrop",

            },
            content: "Velero ya en Talcahuano y listo para navegar. Muy agredecido por la gestión de Imporlan, Gracias !"
        },
        {
            user: {

                photo: "eduardo-a.jpg",
                name: "Eduardo A.",

            },
            content: "Muy buena atención, todo resultó sin problemas. Plenamente satisfecho, Gracias IMPORLAN!"
        }

    ]

    const getReviews = async() => {

        await axios.get(URL + 'testimonys')
        .then(res => {

            setReviews(res.data);
            let testimonys_count = res.data.length;
            setLoading(false);

        })
        .catch(err => {

            console.log(err);

        })

    }

    useEffect(() => {

        let count = re.length;
        if(count <= 2){

            $('#slider').css('width', '100%');
            $('.review').css('width', '50%');
            setCount(1);

        } else if(count > 2 && count <= 4){

            $('#slider').css('width', '200%');
            $('.review').css('width', '50%');
            setCount(2);

        }
        setLoading(false);

    }, [  ])

    var margin = 0;
    var steps = 1;
    const moveLeft = () => {

        /*var sliderWidth = parseInt($('#slider').width())
        var reviewWidth = parseInt($('.review').width());
        
        if(margin < 0){

            margin += 100;
            $('#slider').css('marginLeft', margin + '%')

        }*/

        if(steps > 1){

            margin += 100;
            $('#slider').css('marginLeft', margin + '%')
            steps -= 1;

        }

    }
    const moveRight = () => {

        /*var sliderWidth = parseInt($('#slider').width())
        var reviewWidth
        
        if($(window).width() > 425){

            reviewWidth = 50;

        } else {

            reviewWidth = 20;

        }

        var itemWidth = (sliderWidth * reviewWidth) / 100;
        var v = -(sliderWidth / itemWidth) * 100;
        console.log(v + ' ' + margin);
        if(margin >= count){

            margin -= 100;
            $('#slider').css('marginLeft', margin + '%')

        }*/

        if(steps < count){

            margin -= 100;
            $('#slider').css('marginLeft', margin + '%')
            steps += 1;

        }

    }

    return(

        loading ? 

            <Load />

        :

            <div className='col-12 px-0' style={{ 'marginTop': '5rem' }}>
                <div className='col-12 px-0 text-center'>
                    <h2 className='text-gradient-blue'>
                        Drives Reviews
                    </h2>
                </div>
                <div className='w-100 mt-5 overflow-hidden' style={{ 'whiteSpace': 'nowrap' }}>
                    <div className='d-flex align-items-center' style={{ 'transitionDuration': '500ms', 'width': '200%' }} id='slider'>
                        {
                            re.map(review => <Review review={ review } key={ review.id } />)
                        }
                        <div className='review text-center'>
                            <Link to='/imporlan/testimonys' type='button' className='btn btn-gray'>
                                Ver más
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className='w-100 justify-content-center d-flex mt-3'>
                    <button className='btn bg-white mr-2 border-circle'>
                        <FontAwesomeIcon icon={ faArrowLeft } onClick={ moveLeft } />
                    </button>
                    <button className='btn bg-white ml-2 border-circle'>
                        <FontAwesomeIcon icon={ faArrowRight } onClick={ moveRight } />
                    </button>
                </div>
            </div>

    )

}