import React from "react";
import { connect } from "react-redux";

import "./CartButton.scss";
import CartProduct from "./CartProduct/CartProduct";
import { Button } from "../../../components";

import { Link } from "react-router-dom";

const CartButton = ({ count, shoppingCart }) => {
    return (
        <div className="cart-button">
            <i className="fas fa-shopping-cart text--charcoal-grey"></i>
            <div className="cart-button__badge">
                <span>{count}</span>
            </div>
            <div className="cart-button__list-item">
                {shoppingCart.map((item) => (
                    <CartProduct key={item.id} {...item} />
                ))}
                {shoppingCart.map((item) => (
                    <CartProduct key={item.id} {...item} />
                ))}
                {shoppingCart.map((item) => (
                    <CartProduct key={item.id} {...item} />
                ))}
                <Button className="--block mt-0 cart-button__view-cart">
                    <Link to="/check-out">View cart</Link>
                </Button>
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
        count,
        shoppingCart: state.shoppingCart,
    };
};

export default connect(mapStateToProps)(CartButton);
