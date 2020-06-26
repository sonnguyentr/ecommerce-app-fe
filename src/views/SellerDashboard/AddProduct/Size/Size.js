import React from "react";

const Size = ({ size, quantity, handleSizeChange }) => {
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <label
                    htmlFor={`product-quantity-${size}`}
                    className="add-product__title"
                >
                    Quantity ({size})
                </label>
            </div>
            <div className="add-product__input-container">
                <input
                    onChange={(e) => handleSizeChange(size, e.target.value)}
                    className="form__input add-product__input"
                    type="number"
                    name={`product-quantity-${size}`}
                    id={`product-quantity-${size}`}
                    placeholder={`Input quantity for size ${size}`}
                    min="1"
                    value={quantity || ""}
                />
            </div>
        </div>
    );
};

export default Size;
