import { MODAL_CONSTANT } from "../constant";
const initialState = {
    login: false,
    register: false,
};
export const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_CONSTANT.LOGIN:
            return { ...initialState, login: true };
        case MODAL_CONSTANT.REGISTER:
            return { ...initialState, register: true };
        case MODAL_CONSTANT.CLOSE:
            return initialState;
        default:
            return state;
    }
};
