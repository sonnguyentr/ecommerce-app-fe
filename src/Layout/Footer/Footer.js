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
                    <div className="col-auto">
                        <FooterLogo />
                    </div>
                    <div className="col-auto">
                        <PrimaryNav />
                    </div>
                    <div className="col-auto text-right">
                        <i className="fab fa-twitter text--greyish-two"></i>
                        <i className="fab fa-instagram text--greyish-two"></i>
                        <i className="fab fa-facebook-f text--greyish-two"></i>
                    </div>
                </div>
            </div>
            <hr />
            <SecondaryNav />
        </footer>
    );
};

export default Footer;
