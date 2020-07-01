import React from "react";
import "./ProductAmount.scss";

const ProductAmount = ({ value = 0 }) => {
    return <span className="product-amount">${value.toFixed(2)}</span>;
};

export default ProductAmount;
