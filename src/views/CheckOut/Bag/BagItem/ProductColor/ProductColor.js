import React from "react";
import "./ProductColor.scss";

const ProductColor = ({ value = "rgba(255, 195, 113, 0.5)" }) => {
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
