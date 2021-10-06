export default function Review(props) {

    const { client } = props;

    return(

        <div className='d-inline-block review'>
            <div style={{ 'width': '90%', 'minHeight': '100%' }} className='bg-white p-3 mx-auto'>
                <div style={{ 'width': '100%' }} className='d-block d-md-flex align-items-center text-center'>
                    <div className=''>
                        <img src={ client.img } className='img-fluid mr-3' />
                    </div>
                    <div>
                        <strong className='text-purple d-block'>{ client.name }</strong>
                        <span className='text-gray' style={{ 'fontSize': '12px' }}>{ client.ocupation + ' - ' + client.enterprise }</span>
                    </div>
                </div>
                <p className='mt-3 text-gray' style={{ 'whiteSpace': 'pre-wrap' }}>
                    "{ client.content }"
                </p>
            </div>
        </div>

    )

}