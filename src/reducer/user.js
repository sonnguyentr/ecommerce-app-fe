import { user as userConstant } from "../constant";

const initUser = JSON.parse(localStorage.getItem("user")) || null;

const userState = (state = initUser, action) => {
    switch (action.type) {
        case userConstant.UPDATE_USER:
            const { user, token } = action.payload;
            localStorage.setItem("user", JSON.stringify({ ...user, token }));
            return { ...user, token };
        case userConstant.LOGOUT_USER:
            localStorage.setItem("user", null);
            return null;
        default:
            return state;
    }
};

export default userState;
