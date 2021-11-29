import $ from 'jquery';

export default function Load() {

    var header_height = $('#header').height();
    var navbar_height = $('.navbar').height();
    var footer_height = $('footer').height();
    var diff = navbar_height + header_height + footer_height;
    var window_height = $(window).height();
    var height = window_height - diff - 250;

    return(

        <div className='d-flex align-items-center justify-content-center' style={{ 'minHeight': height, 'minWidth': '100%' }}>
            <div className='spinner-border'>
                <span className='sr-only'>
                    Cargando...
                </span>
            </div>
        </div>

    )

}