export default function ArticleIndex(props) {

    const { article } = props;

    return(

        <div className='d-flex article'>
            <div style={{ 'width': '100%', 'minHeight': '100%' }} className='d-flex justify-content-between flex-wrap bg-white p-3 mx-auto border-radius'>
                <div style={{ 'height': '30%', 'width': '100%' }} className='d-flex align-items-center'>
                        <img src={ 'http://api-imporlan.test/img/articles/' + article.img } className='img-fluid' style={{ 'height': '100%' }} />
                </div>
                <div className='col-12 mt-3' style={{ 'height': '10%', 'whiteSpace': 'pre-wrap' }}>
                    <strong className='text-purple'>{ article.title }</strong>
                </div>
                <p className='mt-3 text-gray' style={{ 'height': '60%', 'whiteSpace': 'pre-wrap' }}>
                    { article.content }
                </p>
            </div>
        </div>

    )

}