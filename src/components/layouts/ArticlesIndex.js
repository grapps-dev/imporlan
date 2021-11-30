import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import SampleImg from '../../assets/img/sample.jpg';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ArticleIndex from "./ArticleIndex";

export default function ArticlesIndex(props) {

    const { articles } = props;

    const news = [

        {
            id: 0,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        },
        {
            id: 1,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        },
        {
            id: 2,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        },
        {
            id: 3,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        },
        {
            id: 4,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        },
        {
            id: 5,
            title: "Importar embarcaciones desde USA ¿Cómo funciona?",
            date: "09.07.2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: SampleImg
        }

    ]


    var margin = 0;
    const moveLeft = () => {

        var marginLeft = parseInt($('#sliderArticles').css('marginLeft'));
        var sliderWidth = parseInt($('#sliderArticles').width())
        var itemWidth = (sliderWidth * 50) / 100;
        
        if(margin < 0){

            margin += 100;
            console.log(margin)
            $('#sliderArticles').css('marginLeft', margin + '%')

        }

    }
    const moveRight = () => {

        var marginLeft = parseInt($('#sliderArticles').css('marginLeft'));
        var sliderWidth = parseInt($('#sliderArticles').width());

        if($(window).width() > 425){

            var reviewWidth = 50;

        } else {

            var reviewWidth = 20;

        }

        var itemWidth = (sliderWidth * reviewWidth) / 100;
        var v = -(sliderWidth / itemWidth) * 100;
        if(margin > v){

            margin -= 100;
            $('#sliderArticles').css('marginLeft', margin + '%')

        }

    }

    return(

        <div className='col-12 px-0' style={{ 'marginTop': '5rem' }}>
            <div className='col-12 px-0 text-center'>
                <h2 className='text-gradient-blue'>
                    Lastest News
                </h2>
                <div className='w-100 mt-5 overflow-hidden' style={{ 'whiteSpace': 'nowrap' }}>
                <div className='d-flex justify-content-between' style={{ 'width': '100%', 'transitionDuration': '500ms' }} id='sliderArticles'>
                    {
                        articles.map(article => <ArticleIndex article={ article } key={ article.id } />)
                    }
                </div>
            </div>
            {/*<div className='w-100 justify-content-center d-flex mt-3'>
                <button className='btn bg-white mr-2 border-circle'>
                    <FontAwesomeIcon icon={ faArrowLeft } onClick={ moveLeft } />
                </button>
                <button className='btn bg-white ml-2 border-circle'>
                    <FontAwesomeIcon icon={ faArrowRight } onClick={ moveRight } />
                </button>
                </div>*/}
            </div>
        </div>

    )
    
}