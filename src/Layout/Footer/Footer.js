import React from "react";
import "./Footer.scss";

import FooterLogo from './FooterLogo'
import PrimaryNav from './FooterPrimaryNav/FooterPrimaryNav'
import SecondaryNav from './FooterSecondaryNav/FooterSecondaryNav'
const Footer = (props) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <FooterLogo />
                    <PrimaryNav />
                    <div>
                        <i className="fab fa-twitter text--greyish-two"></i>
                        <i style={{ fontSize: 18, margin: "0px 20px"}} className="fab fa-instagram text--greyish-two"></i>
                        <i className="fab fa-facebook-f text--greyish-two"></i>
                    </div>
                </div>
            </div>
            <hr style={{border: "1px solid #eaeaea"}}/>
            <SecondaryNav />
        </footer>
    );
};

export default Footer;
