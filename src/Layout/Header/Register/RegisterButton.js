import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterButton.scss";

import { Modal, InputWithLabel, Button } from "../../../components";
import API from "../../../api";

const RegisterButton = ({ dispatchUserUpdate }) => {
    const [show, showModal] = useState(false);

    const isEmpty = (value) => {
        if (typeof value === "undefined" || value === "") {
            return true;
        }
        return false;
    };

    // name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(e.target.value);

        if (isEmpty(value)) setNameError("Field cannot be empty!");
        else setNameError("");
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
            nameError == null || //initial state
            passwordError == null ||
            emailError == null ||
            nameError ||
            passwordError ||
            emailError
        )
            setIsValidForm(false);
        else setIsValidForm(true);
    }, [nameError, passwordError, emailError]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await API.register({ name, email, password });
            dispatchUserUpdate({ ...data.data });
            alert("Register success!");
        } catch (error) {
            console.log(error.response.data);
            alert(
                (error.response.data && error.response.data.message) || "Error!"
            );
        }
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
                        <InputWithLabel
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className={nameError && "form__input__error"}
                            placeholder="Enter your name..."
                            errorMessage={nameError}
                            isFocused
                        >
                            Name
                        </InputWithLabel>
                        <InputWithLabel
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={emailError && "form__input__error"}
                            placeholder="Enter your email..."
                            errorMessage={emailError}
                        >
                            E-mail
                        </InputWithLabel>
                        <InputWithLabel
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={passwordError && "form__input__error"}
                            placeholder="Enter your password..."
                            errorMessage={passwordError}
                        >
                            Password
                        </InputWithLabel>
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
                    <Button
                        type="submit"
                        disabled={!isValidForm}
                        className="button--primary button--block"
                    >
                        Register
                    </Button>
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
