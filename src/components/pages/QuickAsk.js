import React from 'react';

export default function QuickAsk(props) {

    const { ask } = props;

    return(

        <div className='col-12 mb-3'>
            <strong style={{ 'fontSize': '18px' }}>
                { ask.id } - { ask.question }
            </strong>
            <p>
                { ask.answer }
            </p>
        </div>

    )

}