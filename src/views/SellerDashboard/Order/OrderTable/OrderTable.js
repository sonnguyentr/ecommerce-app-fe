import React from "react";
import "./OrderTable.scss";

import OrderTableItem from "./OrderTableItem/OrderTableItem";
import { Paging } from "../../../../components";

const OrderTable = ({
    listOrders,
    handleUpdateOrderStatus,
    page,
    handlePageChange,
    totalPages,
}) => {
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

            <div className="text-right mt-3">
                <Paging
                    page={page}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default OrderTable;
