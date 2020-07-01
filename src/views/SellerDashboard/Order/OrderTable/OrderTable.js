import React from "react";
import "./OrderTable.scss";

import OrderTableItem from "./OrderTableItem/OrderTableItem";
const OrderTable = ({ listOrders, handleUpdateOrderStatus }) => {
    return (
        <div className="order-table order-table__container">
            <table>
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>ORDERED DATE</th>
                        <th>DETAIL</th>
                        <th>TOTAL ($)</th>
                        <th className="text-center">STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listOrders.map((order) => {
                        return (
                            <OrderTableItem
                                key={order.order_id}
                                handleUpdateOrderStatus={
                                    handleUpdateOrderStatus
                                }
                                {...order}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
