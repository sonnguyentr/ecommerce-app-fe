import { combineReducers } from "redux";

import shoppingCart from "./shoppingCart";
import user from "./user";
import { modal } from "./modal";

const rootReducer = combineReducers({
    shoppingCart,
    user,
    modal,
});

export default rootReducer;
