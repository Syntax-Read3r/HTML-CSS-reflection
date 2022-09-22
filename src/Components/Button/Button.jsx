import React from "react";
import "../Styles/sass/main.css";

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--warning--solid",
    "btn--warning--outline",
    "btn--danger--solid",
    "btn--danger--outline",
    "btn--success--solid",
    "btn--success--outline",

]

const SIZES = [
    "btn--medium",
    "btn--wide",
]

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    // Check if buttonStyle is in STYLES array, if not set to default
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // Check if buttonSize is in SIZES array, if not set to default
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </button>
    );
}

export default Button;