import React from 'react';
import './styles.css';

export default function WorkArea(props) {
    return (
        <div className='work-area-container'>
            <div className='work-area-border'>
                {props.children}
            </div>
        </div>
    );
};
