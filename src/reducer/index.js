import { combineReducers } from 'redux';

import shoppingCart from './shoppingCart';
import user from './user';

const rootReducer = combineReducers({
    shoppingCart, user
});

export default rootReducer;