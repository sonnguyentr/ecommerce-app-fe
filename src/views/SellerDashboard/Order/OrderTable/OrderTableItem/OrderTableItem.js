import React from "react";
import "./OrderTableItem.scss";

const OrderTableItem = ({
    order_id,
    products,
    createdAt,
    amount,
    statusText,
    status,
    handleUpdateOrderStatus
}) => {
    return (
        <tr className="order-table__item">
            <td>{order_id}</td>
            <td>{createdAt.substring(0, 10)}</td>
            <td>
                {products.map((product) => {
                    return (
                        <p
                            className="order-item__product-detail"
                            key={product.product_id}
                        >
                            {product.title} ({product.size}) x{" "}
                            {product.quantity}
                        </p>
                    );
                })}
            </td>
            <td>${(amount && amount.toFixed(2)) || 0}</td>
            <td className="text-center">
                <span
                    className={`order-item__status ${
                        status === 1
                            ? "completed"
                            : status === 0
                            ? "pending"
                            : "canceled"
                    }`}
                >
                    {statusText}
                </span>
            </td>
            <td className="order-item__action">
                <span>
                    Action <i className="fas fa-chevron-down"></i>
                </span>
                <ul className="list-actions">
                    <li onClick={() => handleUpdateOrderStatus(order_id, 1)}>
                        <i className="fas fa-circle completed mr-3"></i>
                        Mark as Completed
                    </li>
                    <li onClick={() => handleUpdateOrderStatus(order_id, -1)}>
                        <i className="fas fa-circle canceled mr-3"></i>
                        Mark as Canceled
                    </li>
                    <li onClick={() => handleUpdateOrderStatus(order_id, 0)}>
                        <i className="fas fa-circle pending mr-3"></i>
                        Mark as Pending
                    </li>
                </ul>
            </td>
        </tr>
    );
};

export default OrderTableItem;
