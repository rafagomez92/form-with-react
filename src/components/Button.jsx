import React from 'react';

const Button = props => {
    return(
        <button 
            className="btn btn-primary mr-4"
            onClick={props.action}
        >            
            {props.title}
        </button>
    )
}

export default Button;