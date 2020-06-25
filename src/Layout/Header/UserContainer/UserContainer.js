import React from "react";
import { connect } from "react-redux";

import LoginButton from "../Login/LoginButton";
import RegisterButton from "../Register/RegisterButton";
import UserAvatar from "../UserAvatar/UserAvatar";

import api from "../../../api";
import { user as userConstant } from "../../../constant";

const mapStateToProps = ({ user }) => {
    return {user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUserUpdate: (payload) =>
            dispatch({ type: userConstant.UPDATE_USER, payload }),
        dispatchUserLogOut: () =>{
            alert("Logout")
            dispatch({ type: userConstant.LOGOUT_USER })
        },
    };
};
const UserContainer = ({dispatchUserUpdate, user, dispatchUserLogOut}) => {
    return !user ? (
        <>
            <RegisterButton dispatchUserUpdate={dispatchUserUpdate} api={api} />
            <LoginButton dispatchUserUpdate={dispatchUserUpdate} api={api} />
        </>
    ) : (
        <UserAvatar dispatchUserLogOut={dispatchUserLogOut} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
