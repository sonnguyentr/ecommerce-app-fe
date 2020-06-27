import React from "react";
import { connect } from "react-redux";

import LoginButton from "../Login/LoginButton";
import RegisterButton from "../Register/RegisterButton";
import UserAvatar from "../UserAvatar/UserAvatar";

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
            alert("Logged out!");
        },
    };
};
const UserContainer = ({ dispatchUserUpdate, user, dispatchUserLogOut }) => {
    return !user ? (
        <>
            <RegisterButton dispatchUserUpdate={dispatchUserUpdate} />
            <LoginButton dispatchUserUpdate={dispatchUserUpdate} />
        </>
    ) : (
        <UserAvatar dispatchUserLogOut={dispatchUserLogOut} user={user} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
