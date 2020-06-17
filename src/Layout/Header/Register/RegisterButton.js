import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterButton.scss";

import Modal from "../../../components/Modal/Modal";

const RegisterButton = (props) => {
    const [show, showModal] = useState(false);
    const [fields, setFields] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

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
    };

    return (
        <div className="register-button">
            <span
                onClick={() => {
                    showModal(!show);
                }}
                className="text--greyish-brown"
            >
                Register
            </span>
            <Modal
                show={show}
                handleClose={() => {
                    showModal(false);
                }}
            >
                <h1>Register</h1>
                <form
                    name="register"
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                    }}
                    className="text--left form mb-5"
                >
                    <div className="form__container">
                        <label className="form__label">Name</label>
                        <input
                            value={fields.name}
                            onChange={(e) => {
                                handleChange(e.target.value, "name");
                            }}
                            onBlur={(e) => {
                                validateInput(e.target.value, "name");
                            }}
                            className={`form__input ${
                                errors.name ? "form__input__error" : null
                            }`}
                            type="text"
                            placeholder="Enter your name..."
                        />
                        <small className="form__input__error_message">
                            {errors.name}
                        </small>

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
                                errors.email ? "form__input__error" : null
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
                                errors.password ? "form__input__error" : null
                            }`}
                            type="password"
                            placeholder="Enter your password…"
                        />
                        <small className="form__input__error_message">
                            {errors.password}
                        </small>
                    </div>
                    <div className="text--center text--dark-grey mt-5 mb-5">
                        By creating an account you agree to the{" "}
                        <Link
                            className="link text--bold text--underline text--pumpkin-orange"
                            to="/terms"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            className="text--bold text--underline text--pumpkin-orange"
                            to="/privacy"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <button type="submit" className="button --primary --block">
                        Register
                    </button>
                </form>
                <hr />
                <div className="mt-3 mb-2">
                    Do you have an account?{" "}
                    <Link
                        className="text--bold text--underline text--pumpkin-orange"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default RegisterButton;
