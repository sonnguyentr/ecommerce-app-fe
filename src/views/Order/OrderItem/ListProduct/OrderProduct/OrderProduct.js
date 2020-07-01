import React from "react";
import "./OrderProduct.scss";

const OrderProduct = (props) => {
    return (
        <tr className="order-product">
            <td className="order-product__img-container">
                <img
                    className="order-product__img"
                    src={props.photo}
                    alt={props.title}
                />
            </td>
            <td className="order-product__title">{props.title}</td>
            <td>color</td>
            <td>{props.size}</td>
            <td>{props.quantity}</td>
            <td>${props.price}</td>
            <td>${props.price * props.quantity}</td>
        </tr>
    );
};

export default OrderProduct;
