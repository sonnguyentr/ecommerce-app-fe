import { shoppingCart as cartConstant } from "../constant";

const initialState = [
    //     {
    //         id: "X-1",
    //         stars: 5,
    //         title: "Collete Stretch Linen Minidress",
    //         price: 69,
    //         reviewCount: 0,
    //         picture: "/img/product-pic-1.png",
    //         size: "S",
    //         color: {
    //             name: "red",
    //             value: "#ff5f6d",
    //         },
    //         quantity: 2,
    //     },
];

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
            } else shoppingCart.push(action.payload);
            return [...shoppingCart];
        default:
            return state;
    }
};

export default cart;
