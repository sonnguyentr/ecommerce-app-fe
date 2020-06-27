import React from "react";
import { connect } from "react-redux";

import "./CartButton.scss";
import CartProduct from "./CartProduct/CartProduct";
import { Button } from "../../../components";

import { useHistory } from "react-router-dom";

const mapStateToProps = ({ shoppingCart }) => {
    const count = shoppingCart
        ? shoppingCart.reduce((accu, item) => (accu += item.quantity || 0), 0)
        : 0;
    return {
        count,
        shoppingCart,
    };
};

const CartButton = ({ count, shoppingCart }) => {
    const history = useHistory();
    return (
        <div className="cart-button">
            <i className="fas fa-shopping-cart text--charcoal-grey"></i>
            <div className="cart-button__badge">
                <span>{count}</span>
            </div>
            {!!count && (
                <div
                    onClick={() => {
                        history.push("/check-out");
                    }}
                    className="cart-button__list-item"
                >
                    {shoppingCart.map((item) => (
                        <CartProduct key={item.id} {...item} />
                    ))}
                    <Button className="button--block mt-0 cart-button__view-cart">
                        View cart
                    </Button>
                </div>
            )}
        </div>
    );
};

export default connect(mapStateToProps)(CartButton);
