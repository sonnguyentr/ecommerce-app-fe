import React from "react";
import "./BagItem.scss";

import { QuantityButton } from "../../../../components";

const BagItem = (props) => {
    const handleQuantity = (value) => {
        props.handleQuantity(props.id, value);
    };
    return (
        <tr className="bag-item border-top">
            <td>
                <div className="container-fluid py-2">
                    <div className="row">
                        <div className="col-auto p-0">
                            <img
                                className="bag-item__img"
                                src={props.picture}
                                alt={props.title}
                            />
                        </div>
                        <div className="col pr-0 bag-item__title">
                            <span>
                                {props.title}
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <div
                    style={{
                        backgroundColor: props.color.value,
                    }}
                    className="d-inline-block mx-1 rounded-circle bag-item__color"
                ></div>
            </td>
            <td className="text-center bag-item__size">{props.size}</td>
            <td className="text-center">
                <QuantityButton
                    handleQuantity={handleQuantity}
                    quantity={props.quantity}
                />
            </td>
            <td className="text-center bag-item__amount">
                ${(props.price * props.quantity).toFixed(2)}
            </td>
        </tr>
    );
};

export default BagItem;
