import React from "react";
import "./FooterSecondaryNav.scss";

const FooterSecondaryNav = (props) => {
    const listNav1 = [
        "Home",
        "Products",
        "Services",
        "About Us",
        "Help",
        "Contact",
    ];
    const listNav2 = ["Privacy Policy", "Terms & Conditions"];
    return (
        <nav className="footer-secondary-nav">
            <div className="container justify-content-between">
                <ul className="footer-secondary-nav__ul">
                    {listNav1.map((item) => (
                        <li
                            className="footer-secondary-nav__li"
                            key={"nav_" + item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="footer-secondary-nav__ul">
                    {listNav2.map((item) => (
                        <li
                            style={{ paddingRight: 0, paddingLeft: 15 }}
                            className="footer-secondary-nav__li"
                            key={"nav_" + item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default FooterSecondaryNav;
