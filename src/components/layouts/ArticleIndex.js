export default function ArticleIndex(props) {

    const { article } = props;

    return(

        <div className='d-inline-block article'>
            <div style={{ 'width': '90%', 'minHeight': '100%' }} className='bg-white p-3 mx-auto border-radius'>
                <div style={{ 'width': '100%' }} className='d-flex align-items-center'>
                    <div className='d-block'>
                        <img src={ article.img } className='img-fluid' />
                    </div>
                </div>
                <div className='col-12 mt-3' style={{ 'whiteSpace': 'pre-wrap' }}>
                    <strong className='text-purple'>Post { parseInt(article.id) + 1 }</strong><br />
                    <strong className='text-purple'>{ article.title }</strong>
                </div>
                <p className='mt-3 text-gray' style={{ 'whiteSpace': 'pre-wrap' }}>
                    { article.content }
                </p>
            </div>
        </div>

    )

}