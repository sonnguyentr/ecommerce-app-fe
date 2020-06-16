import React from "react";

import "./CartButton.scss";

const CartButton = (props) => {
    return (
        <div className="cart-button">
            <i style={{fontSize: "24px"}} class="fas fa-shopping-cart text--charcoal-grey"></i>
            <div className="cart-button__badge">
                <span>7</span>
            </div>
        </div>
    );
};

export default CartButton;
