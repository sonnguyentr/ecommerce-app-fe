import React from "react";

const Description = ({ description, handleDescriptionChange }) => {
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <label
                    htmlFor="product-description"
                    className="add-product__title"
                >
                    Description
                </label>
            </div>
            <div className="add-product__input-container">
                <textarea
                    onChange={handleDescriptionChange}
                    value={description}
                    name="product-description"
                    id="product-description"
                    className="form__input add-product__text-area"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
        </div>
    );
};

export default Description;
