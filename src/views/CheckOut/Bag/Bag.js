import React from "react";
import "./Bag.scss";

import BagItem from "./BagItem/BagItem";
const Bag = ({ shoppingCart, handleQuantity }) => {
    return (
        <div className="bag__container">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="text-center">Color</th>
                        <th className="text-center">Size</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((item) => (
                        <BagItem handleQuantity={handleQuantity} key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bag;
