import React, { useState, useEffect } from "react";
import "./Order.scss";

import OrderTable from "./OrderTable/OrderTable";

import API from "../../../api";
const Order = (props) => {
    const [page, setPage] = useState(1);
    const handlePageChange = (value) => {
        setPage(value);
    };
    const [totalPages, setTotalPages] = useState(1);
    const [listOrders, setListOrders] = useState([]);
    useEffect(() => {
        const getListOrder = async () => {
            try {
                const data = await API.getListOrder({ page, limit: 10 });
                const list = data.data.data.map((item) => {
                    item.quantity = item.products.reduce(
                        (accu, current) => (accu += current.quantity || 0),
                        0
                    );
                    return item;
                });
                setListOrders([...list]);
                setTotalPages(data.data.totalPages);
            } catch (err) {
                console.log(err);
            }
        };
        getListOrder();
    }, [page]);

    const updateOrderStatus = (order_id, payload) => {
        const newArr = [...listOrders];
        let foundOrder = newArr.find((order) => order.order_id === order_id);
        foundOrder.status = payload.status;
        foundOrder.statusText = payload.statusText;
        setListOrders([...newArr]);
    };

    const handleUpdateOrderStatus = async (order_id, status) => {
        // send request to serve
        try {
            const data = await API.updateOrder({ order_id, status });
            updateOrderStatus(order_id, data.data.order);
        } catch (err) {
            alert(
                (err.response && err.response.data.message) ||
                    "Something went wrong!"
            );
        }
    };
    return (
        <div>
            <h1 className="seller-dashboard__title">Orders</h1>
            <OrderTable
                listOrders={listOrders}
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                page={page}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Order;
