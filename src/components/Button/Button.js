import React from "react";
import "./Button.scss";
const Button = ({
    id,
    className,
    children,
    type = "button",
    disabled,
    onClick,
    style,
}) => {
    return (
        <button
            id={id}
            onClick={onClick}
            type={type}
            disabled={disabled}
            style={style}
            className={`button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
