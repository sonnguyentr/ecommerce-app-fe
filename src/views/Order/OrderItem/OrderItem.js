import React from "react";
import "./OrderItem.scss";

import ProductInfo from "../../CheckOut/Bag/BagItem/ProductInfo/ProductInfo";
import ProductColor from "../../CheckOut/Bag/BagItem/ProductColor/ProductColor";
import ProductAmount from "../../CheckOut/Bag/BagItem/ProductAmount/ProductAmount";

const OrderItem = (props) => {
    return (
        <tr className="order-item">
            <td>
                <ProductInfo title={props.title} picture={props.photo} />
            </td>
            <td>
                <ProductColor />
            </td>
            <td>{props.size}</td>
            <td>{props.quantity}</td>
            <td>
                <ProductAmount value={props.quantity * props.price} />
            </td>
            <td>{props.createdAt.substring(0, 10)}</td>
            <td>{props.statusText}</td>
            <td>Action</td>
        </tr>
    );
};

export default OrderItem;
