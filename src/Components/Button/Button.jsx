import React from "react";
import "../Styles/sass/main.css";

const STYLES = [
    "btn--primary--nav",
    "btn--secondary--nav",
    "btn--search--nav",
    "btn--reviews--readMore",
    "btn--google--reviews",
    "btn--trustpilot--reviews",
    "btn--latestNews--readMore",

]

const SIZES = [
    'btn--nav',
    'btn--nav--small',
    "btn--medium",
    "btn--large",
    'btn--xlarge',
]

const Button = ({children, type, onClick, buttonStyle, buttonSize, bColor}) => {

    // Check if buttonStyle is in STYLES array, if not set to default
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // Check if buttonSize is in SIZES array, if not set to default
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize} ${bColor}`}>
            {children}
        </button>
    );
}

export default Button;