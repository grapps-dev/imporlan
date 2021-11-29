import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function DemoCarousel() {

    const [ video, setVideo ] = useState('https://www.youtube.com/embed/fXf57Echfpk');

    const url = [

        
            'https://www.youtube.com/embed/fXf57Echfpk'
        ,
        
            'https://www.youtube.com/embed/gW2D0rsSWbU'
        ,
        
            'https://www.youtube.com/embed/z6d2_yUs5bE'

    ]

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const thumbs = () => {
        let counter = 1;
        var img = '';
        url.forEach((i) => {
            const videoId = getVideoId(i);
            img += `
                        <li class='thumb' onclick="return url()" aria-label='slide item ${ counter }' role='button' tabindex='0' style='width: 100px' id='${ i }'>
                            <img src=${ getVideoThumb(videoId) } />
                        </li>
                    `
            counter += 1;
        })
        return $('.thumbs').html(img);

    }

    $(document).on('click', '.thumb', (e) => {

        setVideo(e.target.id)
        
    })

    useEffect(() => {

        thumbs($('.carousel-root iframe'))

    })

    return (
            <div className='col-12 px-0' style={{ 'marginTop': '10rem' }}>
               <Carousel showStatus={ false } showThumbs={ true } >
                    <div>
                        <iframe id='playVideo' className='border-radius shadow' width="560" height="315" src={ video } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Carousel>
                <div className='col-12'>

                </div>
                <div className='col-12 text-center'>
                    <a className='bg-white py-2 px-4 text-dark' href='https://www.youtube.com/channel/UCQtEc2D7dxCKF9X8LeCYsPg' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={ faYoutube } className='mr-2' style={{ 'color': '#c4302b' }} />
                        Ver vídeos de nuestros clientes
                    </a>
                </div>
            </div>
        );
}