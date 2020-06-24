import React from "react";
import "./CartProduct.scss";

const CartProduct = (props) => {
    return (
        <div className="cart-product px-2 pt-2">
            <div className="row">
                <div className="col-auto text-center">
                    <img
                        src={props.picture}
                        className=""
                        width="60px"
                        height="60px"
                        alt={props.name}
                    ></img>
                </div>
                <div className="col pl-0 text-left">
                    <p className="cart-product__title mb-1">{props.title}</p>
                    <div className="row">
                        <div className="col-4">
                            <span className="cart-product__price">
                                ${props.price.toFixed(2)}
                            </span>
                        </div>
                        <div className="col-8 text-right">
                            <span className="cart-product__description">
                                {`${props.size} • ${props.color.name} • ${props.quantity} pcs`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-1"/>
        </div>
    );
};

export default CartProduct;
