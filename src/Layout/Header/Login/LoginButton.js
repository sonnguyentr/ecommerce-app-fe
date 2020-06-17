import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

import Modal from "../../../components/Modal/Modal";

const LoginButton = (props) => {
    const [show, showModal] = useState(false);
    const [fields, setFields] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState(false);
    const [isLoginFailed, setIsLoginFailed] = useState(false);

    const handleChange = (value, field) => {
        setFields({ ...fields, [field]: value });
    };
    const validateInput = (value, field) => {
        setErrors({ ...errors, [field]: "" });

        if (typeof fields[field] == "undefined" || fields[field] === "") {
            setErrors({ ...errors, [field]: "Field cannot be empty!" });
            return false;
        }
        switch (field) {
            case "email":
                const regexEmail = /^[a-zA-Z0-9_.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
                if (!regexEmail.test(value)) {
                    setErrors({
                        ...errors,
                        [field]: "Please enter a valid e-mail!",
                    });
                    return false;
                }
                break;
            case "password":
                if (value.length <= 6) {
                    setErrors({
                        ...errors,
                        [field]:
                            "Your passwords must be more than 6 characters!",
                    });
                    return false;
                }
                break;
            default:
                break;
        }
        return true;
    };

    const validateForm = () => {
        for (const key in fields) {
            if (
                fields.hasOwnProperty(key) &&
                !validateInput(fields[key], key)
            ) {
                return false;
            }
        }
        return true;
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return false;
        alert("submited");
        setIsLoginFailed(true)
    };
    return (
        <div style={{ display: "inline" }}>
            <button
                className="login-button text--bold"
                type="button"
                onClick={() => {
                    showModal(!show);
                }}
            >
                Log in
            </button>
            <Modal
                show={show}
                handleClose={() => {
                    showModal(false);
                }}
            >
                <h1>Log In</h1>
                <small className="text--strawberry">{isLoginFailed ? "Your e-mail/password is invalid!" : null}</small>
                <form
                    name="login"
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                    }}
                    className="text--left form mb-5"
                >
                    <div className="form__container">
                        <label className="form__label">E-mail</label>
                        <input
                            value={fields.email}
                            onChange={(e) => {
                                handleChange(e.target.value, "email");
                            }}
                            onBlur={(e) => {
                                validateInput(e.target.value, "email");
                            }}
                            className={`form__input ${
                                isLoginFailed || errors.email
                                    ? "form__input__error"
                                    : null
                            }`}
                            type="text"
                            placeholder="Enter your email..."
                        />
                        <small className="form__input__error_message">
                            {errors.email}
                        </small>

                        <label className="form__label">Password</label>
                        <input
                            value={fields.password}
                            onChange={(e) => {
                                handleChange(e.target.value, "password");
                            }}
                            onBlur={(e) => {
                                validateInput(e.target.value, "password");
                            }}
                            className={`form__input ${
                                isLoginFailed || errors.password
                                    ? "form__input__error"
                                    : null
                            }`}
                            type="password"
                            placeholder="Enter your password…"
                        />
                        <small className="form__input__error_message">
                            {errors.password}
                        </small>

                        <div className="container justify-content-between mt-3 mb-3">
                            <div>
                                <input type="checkbox" />
                                <label>Remember password</label>
                            </div>
                            <small className="text--bold text--greyish-brown">
                                Forgot your password?
                            </small>
                        </div>
                    </div>
                    <button type="submit" className="button --primary --block">
                        Log In
                    </button>
                </form>
                <hr />
                <div className="mt-3 mb-2">
                    Don’t have an account?{" "}
                    <Link
                        className="text--bold text--underline text--pumpkin-orange"
                        to="/register"
                    >
                        Register
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default LoginButton;
