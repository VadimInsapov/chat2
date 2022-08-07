import React from 'react';
import {LIGHT_COLOR, MIDDLE_BLOCK, RECTANGLE_BLOCK, THICK_BLOCK, THIN_BLOCK} from "../../../utils/Constants";

const Block = (
    {
        children,
        color = LIGHT_COLOR,
        form = "",
        isCentered = false,
        className
    }) => {
    switch (form) {
        case RECTANGLE_BLOCK: {
            className += " ps-5 pt-4 pe-5 pb-4";
            break;
        }
        case THICK_BLOCK: {
            className += " p-5";
            break;
        }
        case THIN_BLOCK: {
            className += " p-1";
            break;
        }
        case MIDDLE_BLOCK: {
            className += " p-3";
            break;
        }
    }
    return (
        isCentered
            ?
            <div className={"d-flex justify-content-center align-items-center " + className}>
                {children}
            </div>
            :
            <div className={"rounded-1 " + className}
                 style={{
                     background: color
                 }}
            >
                {children}
            </div>

    );
};

export default Block;