import React from "react";
import "./ProductInfo.scss";

const ProductInfo = ({ title, picture }) => {
    return (
        <div className="container-fluid py-2 product-info">
            <div className="row">
                <div className="col-auto p-0">
                    <img
                        className="product-info__img"
                        src={picture}
                        alt={title}
                    />
                </div>
                <div className="col pr-0 product-info__title">
                    <span>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
