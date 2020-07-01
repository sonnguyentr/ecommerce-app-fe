import React, { useState } from "react";
import "./OrderItem.scss";

import ProductAmount from "../../CheckOut/Bag/BagItem/ProductAmount/ProductAmount";
import ListProduct from "./ListProduct/ListProduct";
import { Button } from "../../../components";

const OrderItem = (props) => {
    return (
        <>
            <tr className="order-item">
                <td className="order-item__title">{props.title}</td>
                <td>{props.quantity}</td>
                <td>
                    <ProductAmount value={props.amount} />
                </td>
                <td>{props.createdAt.substring(0, 10)}</td>
                <td>{props.statusText}</td>
                <td>
                    <Button
                        className="order-item__show-detail"
                        onClick={() => props.handleShowDetail(props.order_id)}
                    >
                        <i className={`fas ${props.showDetail ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                    </Button>
                    <Button
                        className="order-item__cancel"
                        onClick={() => props.handelCancelOrder(props.order_id)}
                        disabled={props.status !== 0}
                    >
                        <i className="fas fa-trash" ></i>
                    </Button>
                </td>
            </tr>
            {props.showDetail && (
                <tr>
                    <td colSpan="100">
                        <ListProduct products={props.products} />
                    </td>
                </tr>
            )}
        </>
    );
};

export default OrderItem;
