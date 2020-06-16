import React from "react";
import "./FooterPrimaryNav.scss";

const FooterPrimaryNav = (props) => {
    const listNav = [
        "Home",
        "Products",
        "Services",
        "About Us",
        "Help",
        "Contact",
    ];
    return (
        <nav className="footer-primary-nav">
            <ul className="footer-primary-nav__ul">
                {listNav.map((item) => (
                    <li className="footer-primary-nav__li" key={"nav_" + item}>{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterPrimaryNav;
