import React from "react";
import "./FooterSecondaryNav.scss";

import { Link } from "react-router-dom";

const FooterSecondaryNav = (props) => {
    const listNav1 = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Products",
            path: "/products",
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
    const listNav2 = [
        {
            name: "Privacy Policy",
            path: "/privacy",
        },
        {
            name: "Terms & Conditions",
            path: "/terms",
        },
    ];
    return (
        <nav className="footer-secondary-nav container-fluid">
            <div className="row justify-content-between">
                <ul className="footer-secondary-nav__ul">
                    {listNav1.map((item, index) => (
                        <li className="footer-secondary-nav__li" key={index}>
                            <Link to={item.path} className="link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="footer-secondary-nav__ul">
                    {listNav2.map((item, index) => (
                        <li
                            className="footer-secondary-nav__li"
                            key={index}
                        >
                            <Link to={item.path} className="link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default FooterSecondaryNav;
