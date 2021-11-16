import React from 'react';

export default function Testimony(props) {

    const { testimony } = props;

    return(

        <div className='col-12 col-md-6 bg-white border p-3'>
                <div style={{ 'minHeight': '100%' }} className='bg-white mx-auto'>
                    <div style={{ 'width': '100%' }} className='d-block d-md-flex align-items-center text-center'>
                        <div className=''>
                            <img src={ 'http://api-imporlan.test/img/users/' + testimony.user.photo } className='border-circle mr-3' style={{ 'width': '60px', 'height': '60px' }} />
                        </div>
                        <div>
                            <strong className='text-purple d-block'>{ testimony.user.name }</strong>
                            <strong className='text-gray' style={{ 'fontSize': '12px' }}>{ testimony.user.post + ' - ' + testimony.user.enterprise }</strong>
                        </div>
                    </div>
                    <hr />
                    <p className='mt-3 text-gray' style={{ 'whiteSpace': 'pre-wrap' }}>
                        <em>"{ testimony.content }"</em>
                    </p>
                </div>
        </div>

    )

}