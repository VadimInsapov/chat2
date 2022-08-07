import React, {useEffect, useRef, useState} from 'react';

const Input = ({...params}) => {
    const {className = ""} = params;
    const [focus, setFocus] = useState(false);
    let style = {
        border: "2px solid #2E3235",
    };
    if (focus) {
        style = {
            ...style,
            "box-shadow": "0px 5px 10px 2px rgba(0, 0, 0, 0.2)"
        }
    }
    return (
        <input
            type="text"
            style={style}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...params}
            className={`form-control rounded-1  ${className}`}

        />
    );
};

export default Input;