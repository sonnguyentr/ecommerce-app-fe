import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

import { Modal, InputWithLabel, Button } from "../../../components";

const LoginButton = ({dispatchUserUpdate, api}) => {
    const [show, showModal] = useState(false);
    const [isLoginSuccess, setIsLoginSuccess] = useState(true);

    const isEmpty = (value) => {
        if (typeof value === "undefined" || value === "") {
            return true;
        }
        return false;
    };
    // email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(e.target.value);

        if (isEmpty(value)) setEmailError("Field cannot be empty!");
        else {
            const regexEmail = /^[a-zA-Z0-9_.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
            if (!regexEmail.test(value)) {
                setEmailError("Please enter a valid e-mail!");
            } else setEmailError("");
        }
    };
    // Password
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (isEmpty(value)) setPasswordError("Field cannot be empty!");
        else if (value.length <= 6) {
            setPasswordError("Your passwords must be more than 6 characters!");
        } else setPasswordError("");
    };
    // form validation
    const [isValidForm, setIsValidForm] = useState(false);
    useEffect(() => {
        if (
            passwordError == null || //initial state
            emailError == null ||
            passwordError ||
            emailError
        )
            setIsValidForm(false);
        else setIsValidForm(true);
    }, [passwordError, emailError]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const data = await api.login({ email, password });
        if (data.status === 200) {
            setIsLoginSuccess(true);
            dispatchUserUpdate({ ...data.data })
            alert("Login successs!");
        } else {
            setIsLoginSuccess(false);
        }
    };
    return (
        <>
            <Button
                className="login login__button button--outline button--primary"
                onClick={() => {
                    showModal(!show);
                }}
            >
                Log In
            </Button>
            <Modal
                show={show}
                handleClose={() => {
                    showModal(false);
                }}
            >
                <h1>Log In</h1>
                <small className="text--strawberry">
                    {!isLoginSuccess
                        ? "Your e-mail/password is invalid!"
                        : null}
                </small>
                <form
                    name="login"
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                    }}
                    className="text--left form mb-5"
                >
                    <div className="form__container">
                        <InputWithLabel
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={
                                (!isLoginSuccess || emailError) &&
                                "form__input__error"
                            }
                            placeholder="Enter your email..."
                            errorMessage={emailError}
                            isFocused
                        >
                            E-mail
                        </InputWithLabel>
                        <InputWithLabel
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={
                                (!isLoginSuccess || passwordError) &&
                                "form__input__error"
                            }
                            placeholder="Enter your password..."
                            errorMessage={passwordError}
                        >
                            Password
                        </InputWithLabel>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row">
                                <div className="col-md-6 px-0">
                                    <input
                                        id="remember_password"
                                        type="checkbox"
                                    />{" "}
                                    <label htmlFor="remember_password">
                                        Remember password
                                    </label>
                                </div>
                                <div className="col-md-6 px-0 text-right">
                                    <small className="text--bold text--greyish-brown">
                                        Forgot your password?
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        disabled={!isValidForm}
                        className="button--primary button--block"
                    >
                        Log In
                    </Button>
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
        </>
    );
};

export default LoginButton;
