import React from "react";
import "./FooterPrimaryNav.scss";
import { Link } from "react-router-dom";

const FooterPrimaryNav = (props) => {
    const listNav = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Products",
            path: "/Products",
        },
        {
            name: "About Us",
            path: "/about",
        },
        {
            name: "Help",
            path: "/help",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];
    return (
        <nav className="footer-primary-nav">
            <ul className="footer-primary-nav__ul">
                {listNav.map((item, index) => (
                    <li className="footer-primary-nav__li" key={index}>
                        <Link to={item.path} className="link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterPrimaryNav;
