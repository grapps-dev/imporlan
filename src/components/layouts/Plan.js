import axios from 'axios';

import ListCheck from '../../assets/img/list-check.png';

import { URL_LOCAL_BACKEND as URL } from '../../const';

export default function Plan(props) {

    const { plan, col, user } = props;

    var classname='col-lg-'+ col +' mb-5 mb-lg-0';
    var buttonTop = '-4.5rem';
    if(col === '3'){

        classname = 'col-md-6 col-xl-'+ col +' mb-5 mb-3 mt-3'
        buttonTop = '-4.5rem'

    }
    if(col === '6'){

        classname = 'col-lg-6 col-xl-'+ col +' mb-5 mb-4'
        buttonTop = '-4.5rem'

    }

    const handleAddPlan = async(e) => {

        if(user){

            let plan = e.target.id;
            let data = {

                plan,
                user

            }
            await axios.post(URL + 'active-plan', data, {headers:{"Content-Type" : "application/json"}})
            .then(res => {

                console.log(res.data)

            })
            .catch(err => {

                console.log(err.response);

            })

        } else {

            window.location.href = 'http://localhost:3000/imporlan/sign-in/redirect';

        }

    }

    return(

        <div className={ classname }>
            <div className='col-12 text-white border-radius bg-img-blue-boat pt-3 pb-4' style={{ 'wordBreak': 'break-word' }}>
                <h5 className='text-center mb-3'>{ plan.name }</h5>
                <div className='col-12'>
                    <h3 className='text-center mb-0'>
                        { plan.actualPrice }
                    </h3>
                    <span className='d-block text-center mt-0 text-aqua'>
                        Antes { plan.oldPrice }
                    </span>
                    <div className='col-12 px-0 mt-3'>
                        <ul className='text-center' style={{ 'fontSize': '.8rem' }}>
                            { plan.content.map((content, i) => <li key={ i }><img src={ ListCheck } /> { content }</li>) }
                        </ul>
                    </div>
                    <div className='w-100 ml-0 mx-auto position-absolute-md text-center' style={{ 'left': 0, 'bottom': buttonTop }}>
                        <button className='btn btn-aqua border-radius px-5' id={ plan.id } onClick={ handleAddPlan }>
                            ¡Contratar ahora!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}