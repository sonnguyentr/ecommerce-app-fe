import { user as userConstant } from "../constant";

const userState = (state = null, action) => {
    switch (action.type) {
        case userConstant.UPDATE_USER:
            console.log(action.payload);
            const { user, token } = action.payload;
            return { ...user, token };
        default:
            return state;
    }
};

export default userState;
