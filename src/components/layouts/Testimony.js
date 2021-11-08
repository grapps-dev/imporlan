import React from 'react';

export default function Testimony(props) {

    const { testimony } = props;

    return(

        <div className='col-12 col-md-6 bg-white shadow p-3'>
                <div style={{ 'minHeight': '100%' }} className='bg-white mx-auto'>
                    <div style={{ 'width': '100%' }} className='d-block d-md-flex align-items-center text-center'>
                        <div className=''>
                            <img src={ 'http://api-imporlan.test/img/users/' + testimony.photo } className='border-circle mr-3' style={{ 'width': '60px', 'height': '60px' }} />
                        </div>
                        <div>
                            <strong className='text-purple d-block'>{ testimony.name }</strong>
                            <span className='text-gray' style={{ 'fontSize': '12px' }}>{ testimony.post + ' - ' + testimony.enterprise }</span>
                        </div>
                    </div>
                    <p className='mt-3 text-gray' style={{ 'whiteSpace': 'pre-wrap' }}>
                        <em>"{ testimony.testimonys[0].content }"</em>
                    </p>
                </div>
        </div>

    )

}