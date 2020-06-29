import React from "react";
import "./Bag.scss";

import BagItem from "./BagItem/BagItem";
const Bag = ({ shoppingCart, handleQuantity, handleRemoveBagItem }) => {
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
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((item) => (
                        <BagItem handleRemoveBagItem={handleRemoveBagItem} handleQuantity={handleQuantity} key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bag;
