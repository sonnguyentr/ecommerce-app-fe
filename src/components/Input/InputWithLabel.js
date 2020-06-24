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
    isFocused,
    children,
}) => {
    return (
        <div className="input-group">
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
                autoFocus={isFocused}
            />
            <small className="form__input__error_message">{errorMessage}</small>
        </div>
    );
};

export default InputWithLabel;
