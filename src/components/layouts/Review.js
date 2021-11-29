export default function Review(props) {

    const { review } = props;

    return(

        <div className='d-inline-block review'>
            <div style={{ 'width': '90%', 'minHeight': '100%' }} className='bg-white p-3 mx-auto'>
                <div style={{ 'width': '100%' }} className='d-block d-md-flex align-items-center text-center'>
                    <div className=''>
                        <img src={ 'http://api-imporlan.test/img/users/' + review.user.photo } className='img-fluid border-circle mr-3' style={{ 'width': '60px', 'height': '60px' }} />
                    </div>
                    <div>
                        <strong className='text-purple d-block'>{ review.user.name }</strong>
                        <span className='text-gray' style={{ 'fontSize': '12px' }}>{ review.user.post + ' - ' + review.user.enterprise }</span>
                    </div>
                </div>
                <p className='mt-3 text-gray' style={{ 'whiteSpace': 'pre-wrap' }}>
                    "{ review.content }"
                </p>
            </div>
        </div>

    )

}