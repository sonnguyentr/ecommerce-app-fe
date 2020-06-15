import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import Logo from "./Logo/Logo";
import RegisterButton from "./Register/RegisterButton";
import LoginButton from './Login/LoginButton'
import CartButton from './CartButton/CartButton'

import "./Header.scss";

const Header = (props) => {
    return (
        <div className="header container justify-content-around">
            <SearchBox />
            <Logo />
            <div className="container-header-buttons">
                <RegisterButton />
                <LoginButton />
                <CartButton />
            </div>
        </div>
    );
};

export default Header;
