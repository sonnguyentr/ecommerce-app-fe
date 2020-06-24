import React from "react";
import "./Quantity.scss";

import { Button } from "../../../components";

const Quantity = ({ quantity, handleQuantity }) => {
    return (
        <div className="product-quantity mb-5">
            <span className="product-quantity__label mb-2">Quantity:</span>
            <div className="product-quantity__button-container">
                <Button
                    onClick={() => handleQuantity(-1)}
                    className="product-quantity__button"
                >
                    <i className="fas fa-minus"></i>
                </Button>
                <span className="product-quantity__text">{quantity}</span>

                <Button
                    onClick={() => handleQuantity(1)}
                    className="product-quantity__button"
                >
                    <i className="fas fa-plus"></i>
                </Button>
            </div>
        </div>
    );
};

export default Quantity;
