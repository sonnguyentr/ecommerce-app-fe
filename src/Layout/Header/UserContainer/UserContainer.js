import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginButton from "../Login/LoginButton";
import RegisterButton from "../Register/RegisterButton";
import UserAvatar from "../UserAvatar/UserAvatar";
import toastr from "toastr";

import {
    user as userConstant,
    shoppingCart as cartConstant,
} from "../../../constant";

const mapStateToProps = ({ user }) => {
    return { user };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUserUpdate: (payload) =>
            dispatch({ type: userConstant.UPDATE_USER, payload }),
        dispatchUserLogOut: () => {
            dispatch({ type: userConstant.LOGOUT_USER });
            dispatch({ type: cartConstant.CLEAR_CART });
            toastr.info("Logged out!")
        },
    };
};
const UserContainer = ({ dispatchUserUpdate, user, dispatchUserLogOut }) => {
    const history = useHistory();
    const handleLogout = () => {
        history.push("/");
        dispatchUserLogOut();
    };
    return !user ? (
        <>
            <RegisterButton dispatchUserUpdate={dispatchUserUpdate} />
            <LoginButton dispatchUserUpdate={dispatchUserUpdate} />
        </>
    ) : (
        <UserAvatar dispatchUserLogOut={handleLogout} user={user} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
