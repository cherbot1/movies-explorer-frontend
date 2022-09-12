import React from 'react';
import './BlockTitle.css';

function BlockTitle ({title}) {
    return (
        <div className="block-title">
            <h2 className="block-title__title">{title}</h2>
        </div>
    )
}

export default BlockTitle;