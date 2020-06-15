import React from "react";
import Men from "./Men";
import Ladies from "./Ladies";
import Girls from "./Girls";
import Boys from "./Boys";

import "./NavBar.scss";
const NavBar = (props) => {
    return (
        <nav className="text-center nav-bar">
            <div>
                <ul>
                    <Men />
                    <Ladies />
                    <Girls />
                    <Boys />
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
