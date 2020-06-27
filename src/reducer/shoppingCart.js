import { shoppingCart as cartConstant } from "../constant";
const initialState = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case cartConstant.ADD_TO_CART:
            const id = action.payload.id;
            const shoppingCart = [...state];
            let productIndex = shoppingCart.findIndex((item) => item.id === id);
            if (productIndex !== -1) {
                shoppingCart[productIndex] = {
                    ...shoppingCart[productIndex],
                    ...action.payload,
                };
            } else shoppingCart.unshift(action.payload);
            localStorage.setItem(
                "shoppingCart",
                JSON.stringify([...shoppingCart])
            );
            return [...shoppingCart];
        case cartConstant.CLEAR_CART:
            localStorage.setItem("shoppingCart", "[]");
            return [];
        default:
            return state;
    }
};

export default cart;
