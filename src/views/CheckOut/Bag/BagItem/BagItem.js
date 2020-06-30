import React from "react";
import "./BagItem.scss";

import { QuantityButton, Button } from "../../../../components";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductAmount from "./ProductAmount/ProductAmount";
import ProductColor from "./ProductColor/ProductColor";

const BagItem = (props) => {
    return (
        <tr className="bag-item border-top">
            <td>
                <ProductInfo title={props.title} picture={props.picture} />
            </td>
            <td className="text-center">
                <ProductColor value={props.color.value} />
            </td>
            <td className="text-center bag-item__size">{props.size}</td>
            <td className="text-center">
                <QuantityButton
                    handleQuantity={(value) => {
                        props.handleQuantity(props.id, value);
                    }}
                    quantity={props.quantity}
                />
            </td>
            <td className="text-center">
                <ProductAmount value={props.price * props.quantity} />
            </td>
            <td className="text-center bag-item__remove">
                <Button
                    onClick={() => {
                        props.handleRemoveBagItem(props.id);
                    }}
                    className="button--outline"
                >
                    <i className="fas fa-trash"></i>
                </Button>
            </td>
        </tr>
    );
};

export default BagItem;
