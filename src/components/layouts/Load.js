import $ from 'jquery';

export default function Load() {

    $('body').css('overflowY', 'hidden');

    return(

        <div className='vh-100 bg-white d-flex align-items-center justify-content-center'>
            <div className='spinner-border'>
                <span className='sr-only'>
                    Cargando...
                </span>
            </div>
        </div>

    )

}