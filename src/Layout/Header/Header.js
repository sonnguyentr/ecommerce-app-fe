import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import Logo from "./Logo/Logo";
import RegisterButton from "./Register/RegisterButton";
import LoginButton from './Login/LoginButton'
import CartButton from './CartButton/CartButton'

import "./Header.scss";

const Header = (props) => {
    return (
        <header className="container-fluid justify-content-around">
            <div className="row">
                <SearchBox />
                <Logo />
                <div className="container-header-buttons">
                    <RegisterButton />
                    <LoginButton />
                    <CartButton />
                </div>
            </div>
        </header>
    );
};

export default Header;
