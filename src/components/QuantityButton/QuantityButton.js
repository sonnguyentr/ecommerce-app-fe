import React from "react";
import "./QuantityButton.scss";

import { Button } from "../index";

const QuantityButton = ({ quantity, handleQuantity }) => {
    const handleQuantityMidleware = (value) => {
        if (quantity + value > 0) handleQuantity(value);
    };
    return (
        <div className="quantity-button__container">
            <Button
                onClick={() => handleQuantityMidleware(-1)}
                className="quantity-button__button"
            >
                <i className="fas fa-minus"></i>
            </Button>
            <span className="quantity-button__text">{quantity}</span>

            <Button
                onClick={() => handleQuantityMidleware(1)}
                className="quantity-button__button"
            >
                <i className="fas fa-plus"></i>
            </Button>
        </div>
    );
};

export default QuantityButton;
