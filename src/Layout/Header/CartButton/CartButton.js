import React from "react";
import { connect } from "react-redux";

import "./CartButton.scss";

const CartButton = ({ count }) => {
    return (
        <div className="cart-button">
            <i
                style={{ fontSize: "20px" }}
                className="fas fa-shopping-cart text--charcoal-grey"
            ></i>
            <div className="cart-button__badge">
                <span>{count}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const count = state.shoppingCart.reduce(
        (accu, item) => (accu += item.quantity || 0),
        0
    );
    console.log(state.shoppingCart);
    return {
        count: count,
    };
};

export default connect(mapStateToProps)(CartButton);
