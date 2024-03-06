import React from 'react';


const BUTTON_CHANGE_CLASSES = {
    inverted: 'inverted',
    social: 'social'
}

const Button = ({ children, buttonChange, ...moreProps }) => {
    return (
        <button className={`button-container ${BUTTON_CHANGE_CLASSES[buttonChange]}`} {...moreProps}>{children}</button>
    );
};

export default Button;
