import React from 'react';
import {NavLink} from "react-bootstrap";
import {GRAY_COLOR} from "../../../utils/Constants";

const Link = ({children, stretch = false, color = GRAY_COLOR, ...params}) => {
    let {className} = params;
    if (stretch) {
        className += " text-center";
    }
    return (
        <NavLink
            {...params}
            className={className}
            style={{
                color: color
            }}
        >
            {children}
        </NavLink>
    );
};

export default Link;