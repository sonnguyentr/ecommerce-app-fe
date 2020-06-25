import React from "react";
import "./UserAvatar.scss";
import { Link } from "react-router-dom";
const UserAvatar = ({ dispatchUserLogOut }) => {
    const menuItems = [
        {
            text: "Account Setting",
            to: "/account-setting",
        },
    ];
    return (
        <div className="avatar">
            <img
                className="avatar__img"
                src="/img/user-placeholder.png"
                width="32"
                alt="user-placeholder"
            />
            <div className="avatar__menu">
                {menuItems.map((item) => {
                    return (
                        <div
                            key={item.text}
                            className="avatar__menu-item border-bottom"
                        >
                            <Link to={item.to}>{item.text}</Link>
                        </div>
                    );
                })}
                <div onClick={dispatchUserLogOut} className="avatar__menu-item">Logout</div>
            </div>
        </div>
    );
};

export default UserAvatar;
