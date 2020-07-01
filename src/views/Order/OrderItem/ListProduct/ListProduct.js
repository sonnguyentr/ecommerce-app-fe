import React from "react";
import "./ListProduct.scss";

import OrderProduct from "./OrderProduct/OrderProduct";
const ListProduct = ({ products }) => {
    return (
        <table className="list-product">
            <thead className="list-product__thead">
                <tr>
                    <th colSpan="2" className="text-left">
                        Product
                    </th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <OrderProduct key={product.product_id} {...product} />;
                })}
            </tbody>
        </table>
    );
};

export default ListProduct;
