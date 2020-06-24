import React from "react";
import "./Quantity.scss";

import { QuantityButton } from "../../../components";

const Quantity = ({ quantity, handleQuantity }) => {
    return (
        <div className="product-quantity mb-5">
            <span className="product-quantity__label mb-2">Quantity:</span>
            <QuantityButton
                quantity={quantity}
                handleQuantity={handleQuantity}
            />
        </div>
    );
};

export default Quantity;
