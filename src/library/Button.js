import React from 'react';
import './lib.css'
const Button = (props) => {
    return (
        <span className="primary-button">{props.title}</span>
    );
}

export default Button;