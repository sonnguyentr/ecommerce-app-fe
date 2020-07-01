import React from "react";
import "./OrderItem.scss";

import ListProduct from "./ListProduct/ListProduct";
import { Button } from "../../../components";

const OrderItem = (props) => {
    return (
        <>
            <tr className="order-item">
                <td className="order-item__title">{props.title}</td>
                <td>{props.quantity}</td>
                <td>${props.amount}</td>
                <td>{props.createdAt.substring(0, 10)}</td>
                <td>
                    <span
                        className={`order-item__status ${
                            props.status === 1
                                ? "completed"
                                : props.status === 0
                                ? "pending"
                                : "canceled"
                        }`}
                    >
                        {props.statusText}
                    </span>
                </td>
                <td>
                    <Button
                        className="order-item__show-detail"
                        onClick={() => props.handleShowDetail(props.order_id)}
                    >
                        <i
                            className={`fas ${
                                props.showDetail
                                    ? "fa-chevron-up"
                                    : "fa-chevron-down"
                            }`}
                        ></i>
                    </Button>
                    <Button
                        className="order-item__cancel"
                        onClick={() => props.handelCancelOrder(props.order_id)}
                        disabled={props.status !== 0}
                    >
                        <i className="fas fa-trash"></i>
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
