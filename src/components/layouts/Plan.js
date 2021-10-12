import ListCheck from '../../assets/img/list-check.png';

export default function Plan(props) {

    const { plan, col } = props;
    var classname='col-lg-'+ col +' mb-5 mb-lg-0';
    var buttonTop = '-3.5rem';
    if(col === '3'){

        classname = 'col-md-6 col-xl-'+ col +' mb-5 mb-3 mt-3'
        buttonTop = '-4.5rem'

    }

    return(

        <div className={ classname }>
            <div className='col-12 text-white border-radius bg-img-blue-boat pt-3 pb-4'>
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
                        <button className='btn btn-aqua border-radius px-5'>
                            ¡Contratar ahora!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}