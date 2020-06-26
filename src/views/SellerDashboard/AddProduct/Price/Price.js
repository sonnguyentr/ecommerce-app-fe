import React from "react";

const Price = ({ price, handlePriceChange }) => {
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <label htmlFor="product-price" className="add-product__title">
                    Price($)
                </label>
            </div>
            <div className="add-product__input-container">
                <input
                    onChange={handlePriceChange}
                    value={price || ""}
                    className="form__input add-product__input"
                    type="number"
                    placeholder="Input price"
                    name="product-price"
                    id="product-price"
                    required
                />
            </div>
        </div>
    );
};

export default Price;
