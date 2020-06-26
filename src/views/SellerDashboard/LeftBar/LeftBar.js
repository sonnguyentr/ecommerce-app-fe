import React from "react";
import "./LeftBar.scss";

import { Link, useRouteMatch, useLocation } from "react-router-dom";

import { lefBarMenu } from "../../../constant";

const LeftBar = (props) => {
    const { path } = useRouteMatch();
    const { pathname } = useLocation();
    return (
        <div className="left-bar">
            {lefBarMenu.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={`left-bar__item ${
                            path + item.to === pathname
                                ? "left-bar__chosen"
                                : ""
                        }`}
                    >
                        <i className={`${item.icon} icon`}></i>
                        <Link to={`${path}${item.to}`} className="link">
                            {item.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default LeftBar;
