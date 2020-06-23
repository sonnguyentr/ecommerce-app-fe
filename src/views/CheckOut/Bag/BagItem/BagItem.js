import React from "react";
import "./BagItem.scss";

import { QuantityButton } from "../../../../components";

const BagItem = (props) => {
    const handleQuantity = (value) => {
        props.handleQuantity(props.id, value);
    };
    return (
        <tr className="border-top">
            <td>
                <div className="bag-item container-fluid py-2">
                    <div className="row">
                        <div className="col-auto p-0">
                            <img
                                className="bag-item__img"
                                src={props.picture}
                                alt={props.title}
                            />
                        </div>
                        <div className="col pr-0" style={{ maxWidth: "120px" }}>
                            <span className="bad-item__title">
                                {props.title}
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <div
                    style={{
                        padding: 0,
                        backgroundColor: props.color.value,
                        width: "30px",
                        height: "30px",
                    }}
                    className="d-inline-block mx-1 rounded-circle"
                ></div>
            </td>
            <td className="text-center">{props.size}</td>
            <td className="text-center">
                <QuantityButton
                    handleQuantity={handleQuantity}
                    quantity={props.quantity}
                />
            </td>
            <td style={{width: "140px"}} className="text-center">
                ${(props.price * props.quantity).toFixed(2)}
            </td>
        </tr>
    );
};

export default BagItem;
