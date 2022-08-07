import React from 'react';
import {GRAY_COLOR} from "../../../utils/Constants";

const Button = ({children, color = GRAY_COLOR, stretch}) => {
    const button =
        <button
            style={{
                background: color
            }}
            className="btn text-white rounded-1"
        >
            {children}
        </button>;
    return (
        stretch
            ?
            <div className="d-flex flex-column">
                {button}
            </div>
            :
            {button}
    )
};

export default Button;