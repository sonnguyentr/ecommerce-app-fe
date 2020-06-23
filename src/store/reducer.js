const initialState = {
    username: null,
    userId: null,
    shoppingCart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const id = action.payload.id;
            const shoppingCart = [...state.shoppingCart];
            let productIndex = shoppingCart.findIndex((item) => item.id === id);
            if (productIndex !== -1) {
                shoppingCart[productIndex] = {
                    ...shoppingCart[productIndex],
                    ...action.payload,
                };
            } else shoppingCart.push(action.payload);
            return {
                ...state,
                shoppingCart,
            };
        default:
            return state;
    }
};

export default reducer;
