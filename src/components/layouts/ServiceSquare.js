export default function ServiceSquare(props) {

    const { service } = props;

    return(

        <div className='col-md-4 mb-2'>
            <div className='col-12 bg-white text-center p-3 d-flex' style={{ 'minHeight': "100%", 'flexWrap': 'wrap', 'alignItems': 'center', 'justifyContent': 'center' }}>
                <div className='col-12 mb-3'>
                    <img src={ service.img } className='img-fluid' />
                </div>
                <strong>{ service.title }</strong>
                <p className='text-blue-steps-names mt-3'>
                    { service.description }
                </p>
            </div>
        </div>

    )

}