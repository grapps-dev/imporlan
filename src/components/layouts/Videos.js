import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function DemoCarousel() {
        return (
            <div className='col-12 px-0' style={{ 'marginTop': '10rem' }}>
                <Carousel showStatus={ false } showThumbs={ false }>
                    <div>
                        <iframe className='border-radius shadow' width="560" height="315" src="https://www.youtube.com/embed/fXf57Echfpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className='border-radius shadow' width="560" height="315" src="https://www.youtube.com/embed/gW2D0rsSWbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className='border-radius shadow' width="560" height="315" src="https://www.youtube.com/embed/z6d2_yUs5bE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Carousel>
                <div className='col-12 text-center'>
                    <a className='bg-white py-2 px-4 text-dark' href='https://www.youtube.com/channel/UCQtEc2D7dxCKF9X8LeCYsPg' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={ faYoutube } className='mr-2' style={{ 'color': '#c4302b' }} />
                        Ver vídeos de nuestros clientes
                    </a>
                </div>
            </div>
        );
}