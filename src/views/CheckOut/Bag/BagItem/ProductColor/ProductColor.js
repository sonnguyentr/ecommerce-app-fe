import React from "react";
import "./ProductColor.scss";

const ProductColor = ({ value = "#ff5f6d" }) => {
    return (
        <div
            style={{
                backgroundColor: value,
            }}
            className="d-inline-block mx-1 rounded-circle product-color"
        ></div>
    );
};

export default ProductColor;
