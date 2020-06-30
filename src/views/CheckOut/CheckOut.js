import React from "react";
import "./CheckOut.scss";
import { shoppingCart } from "../../constant";
import { connect } from "react-redux";

import Total from "./Total/Total";
import Bag from "./Bag/Bag";
import api from "../../api";

const mapStateToProps = ({ shoppingCart, user }) => {
    const totalBill = shoppingCart.reduce(
        (accu, item) => (accu += item.price * item.quantity || 0),
        0
    );
    return {
        shoppingCart,
        totalBill,
        user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToCart: (product) =>
            dispatch({ type: shoppingCart.ADD_TO_CART, payload: product }),
        dispatchRemoveFromCart: (productId) => {
            dispatch({
                type: shoppingCart.REMOVE_FROM_CART,
                payload: productId,
            });
        },
        dispatchClearCart: () => {
            dispatch({ type: shoppingCart.CLEAR_CART });
        },
    };
};

const CheckOut = ({
    shoppingCart,
    totalBill,
    dispatchAddToCart,
    dispatchRemoveFromCart,
    dispatchClearCart,
    user,
}) => {
    const handleQuantity = (id, value) => {
        const item = shoppingCart.find((el) => el.id === id);
        dispatchAddToCart({ ...item, quantity: item.quantity + value });
    };
    const createOrder = () => {
        return shoppingCart.map((product) => {
            const { _id, size, quantity } = product;
            return {
                _id,
                size,
                quantity,
            };
        });
    };
    const handleCheckOut = async () => {
        if (!user) return alert("Please login before checking out.");
        if (!shoppingCart || !shoppingCart.length)
            return alert("Cart is empty.");
        console.log(shoppingCart);
        const products = createOrder();
        try {
            const data = await api.createOrder({
                customerId: user._id,
                products,
            });
            console.log(data);
            if (data.status == 200) {
                alert("Order created!");
                dispatchClearCart();
            }
        } catch (error) {
            console.log(error.response.data);
            alert(
                (error.response.data && error.response.data.message) || "Error!"
            );
        }
    };
    return (
        <div className="container-fluid check-out">
            <h1 className="check-out__title">My Bag</h1>
            <div className="row">
                <div className="col-9">
                    <Bag
                        shoppingCart={shoppingCart}
                        handleQuantity={handleQuantity}
                        handleRemoveBagItem={(productId) => {
                            dispatchRemoveFromCart(productId);
                        }}
                    />
                </div>
                <div className="col-3">
                    <Total
                        totalBill={totalBill}
                        handleCheckOut={handleCheckOut}
                    />
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
