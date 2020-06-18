import React from "react";

const InputWithLabel = ({
    id,
    type = "text",
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    errorMessage,
    children,
}) => {
    return (
        <>
            <label htmlFor={id} className="form__label">
                {children}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`form__input ${className}`}
                placeholder={placeholder}
            />
            <small className="form__input__error_message">{errorMessage}</small>
        </>
    );
};

export default InputWithLabel;
