import React from "react";

const Name = ({ title, handleTitleChange }) => {
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <label htmlFor="product-name" className="add-product__title">
                    NAME
                </label>
            </div>
            <div className="add-product__input-container">
                <input
                    className="form__input add-product__input"
                    onChange={handleTitleChange}
                    value={title}
                    type="text"
                    name="product-name"
                    id="product-name"
                    placeholder="Input product name"
                    required
                />
            </div>
        </div>
    );
};

export default Name;
