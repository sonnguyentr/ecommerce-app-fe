import React from "react";
import "./CartProduct.scss";
import { useHistory } from "react-router-dom";

const CartProduct = ({
    picture,
    name,
    title,
    price,
    size,
    color,
    quantity,
    _id,
}) => {
    const history = useHistory();
    return (
        <div
            onClick={() => {
                history.push("/product-detail/" + _id);
            }}
            className="cart-product px-2 pt-2"
        >
            <div className="row">
                <div className="col-auto text-center">
                    <img
                        src={picture}
                        className=""
                        width="60px"
                        height="60px"
                        alt={name}
                    ></img>
                </div>
                <div className="col pl-0 text-left">
                    <p className="cart-product__title mb-1">{title}</p>
                    <div className="row">
                        <div className="col-4">
                            <span className="cart-product__price">
                                ${price.toFixed(2)}
                            </span>
                        </div>
                        <div className="col-8 text-right">
                            <span className="cart-product__description">
                                {`${size} • ${color.name} • ${quantity} pcs`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-1 mb-0" />
        </div>
    );
};

export default CartProduct;
