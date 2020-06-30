import React, { useState, useEffect } from "react";
import "./Order.scss";
import { connect } from "react-redux";

import OrderItem from "./OrderItem/OrderItem";
import api from "../../api";

const mapStateToProps = ({ user }) => {
    return { user };
};

const Order = ({ user }) => {
    // Get list Order
    const [listOrders, setListOrder] = useState([]);
    useEffect(() => {
        const getListOrder = async () => {
            try {
                const data = await api.getListOrder();
                setListOrder([...data.data.data]);
            } catch (err) {
                console.log(err);
            }
        };
        getListOrder();
    }, []);
    // Pass to component Order Item
    // Handle cancel order event

    return (
        <div className="container-fluid order">
            <h1 className="order__title">My Order</h1>
            <div className="row">
                <div className="col-12 order__container">
                    <table>
                        <thead>
                            <tr>
                                <th className="text-center">Product</th>
                                <th className="text-center">Color</th>
                                <th className="text-center">Size</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Amount</th>
                                <th className="text-center">Date Ordered</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrders.map((order) => {
                                return order.products.map((product) => {
                                    return (
                                        <OrderItem
                                            key={
                                                order.order_id +
                                                product.product_id
                                            }
                                            {...product}
                                        ></OrderItem>
                                    );
                                });
                            })}

                            {/* {shoppingCart.map((item) => (
                                <BagItem
                                    handleRemoveBagItem={handleRemoveBagItem}
                                    handleQuantity={handleQuantity}
                                    key={item.id}
                                    {...item}
                                />
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Order);
