import React from "react";
import "./CheckOut.scss";

import { connect } from "react-redux";

import Total from "./Total/Total";
import Bag from "./Bag/Bag";

const mapStateToProps = ({shoppingCart}) => {
    const totalBill = shoppingCart.reduce(
        (accu, item) => (accu += item.price * item.quantity || 0),
        0
    );
    return {
        shoppingCart,
        totalBill,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToCart: (product) =>
            dispatch({ type: "ADD_TO_CART", payload: product }),
    };
};

const CheckOut = ({ shoppingCart, dispatchAddToCart, totalBill }) => {
    const handleQuantity = (id, value) => {
        const item = shoppingCart.find((el) => el.id === id);
        dispatchAddToCart({ ...item, quantity: item.quantity + value });
    };
    return (
        <div className="container-fluid check-out">
            <h1 className="check-out__title">My Bag</h1>
            <div className="row">
                <div className="col-9">
                    <Bag
                        shoppingCart={shoppingCart}
                        handleQuantity={handleQuantity}
                    />
                </div>
                <div className="col-3">
                    <Total totalBill={totalBill} />
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
