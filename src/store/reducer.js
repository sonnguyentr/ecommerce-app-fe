const initialState = {
    username: null,
    userId: null,
    shoppingCart: [
        {
            id: "X-1",
            stars: 5,
            title: "Collete Stretch Linen Minidress",
            price: 69,
            reviewCount: 0,
            picture: "/img/product-pic-1.png",
            size: "S",
            color: {
                name: "red",
                value: "#ff5f6d",
            },
            quantity: 2,
        },
    ],
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
