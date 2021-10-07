import ListCheck from '../../assets/img/list-check.png';

export default function Plan(props) {

    const { plan } = props;

    return(

        <div className='col-lg-4 mb-5 mb-lg-0'>
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
                    <div className='w-100 ml-0 mx-auto position-absolute-md text-center' style={{ 'left': 0, 'bottom': '-3.5rem' }}>
                        <button className='btn btn-aqua border-radius px-5'>
                            ¡Contratar ahora!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}