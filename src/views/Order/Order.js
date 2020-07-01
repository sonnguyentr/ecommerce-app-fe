import React, { useState, useEffect } from "react";
import "./Order.scss";
import { connect } from "react-redux";

import OrderItem from "./OrderItem/OrderItem";
import API from "../../api";

const mapStateToProps = ({ user }) => {
    return { user };
};

const Order = ({ user }) => {
    // Get list Order
    const [reload, setReload] = useState(1);
    const [listOrders, setListOrder] = useState([]);
    useEffect(() => {
        const getListOrder = async () => {
            try {
                const data = await API.getListOrder();
                const list = data.data.data.map((item) => {
                    item.title = item.products.reduce(
                        (accu, current) => (accu += current.title + ", "),
                        ""
                    );
                    item.title =
                        item.title.length > 40
                            ? item.title.substring(0, 40) + "..."
                            : item.title.slice(0, -2);
                    item.quantity = item.products.reduce(
                        (accu, current) => (accu += current.quantity || 0),
                        0
                    );
                    return item;
                });
                setListOrder([...list]);
            } catch (err) {
                console.log(err);
            }
        };
        getListOrder();
    }, [reload]);

    const handleShowDetail = (order_id) => {
        const newArr = listOrders.map((order) => {
            order.showDetail =
                order.order_id === order_id ? !order.showDetail : false;
            return order;
        });
        setListOrder([...newArr]);
    };

    const handelCancelOrder = async (order_id) => {
        const confirm = window.confirm(
            "Are you sure you want to cancel order_id: " + order_id
        );
        if (!confirm) return;
        try {
            const data = await API.cancelOrder({ order_id });
            if (data.status === 200) {
                alert((data.data && data.data.message) || "Cancel success!");
                setReload(reload + 1);
            }
        } catch (error) {
            console.log(error.response);
            alert(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    "Something went wrong!"
            );
        }
    };
    // Pass to component Order Item
    // Handle cancel order event

    return (
        <div className="container-fluid order">
            <h1 className="order__title">My Order</h1>
            <div className="row">
                <div className="col-12 ">
                    <table className="order__table">
                        <thead className="order__thead">
                            <tr>
                                <th className="text-left">Items</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Amount</th>
                                <th className="text-center">Date Ordered</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrders.map((order) => {
                                return (
                                    <OrderItem
                                        key={order.order_id}
                                        handleShowDetail={handleShowDetail}
                                        handelCancelOrder={handelCancelOrder}
                                        {...order}
                                    ></OrderItem>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Order);
