import React from "react";
import "./Total.scss";

import { Button } from "../../../components";

const Total = ({ totalBill, handleCheckOut }) => {
    return (
        <div className="check-out__total">
            <p className="total__title mb-2">Total</p>
            <div className="total__box mb-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <p>Shipping & Handling:</p>
                        <p>Free</p>
                    </div>
                    <div className="row justify-content-between border-bottom pb-3 mb-3">
                        <p>Total product:</p>
                        <p>${totalBill.toFixed(2)}</p>
                    </div>
                    <div className="row justify-content-between total__subtotal">
                        <p>Subtotal</p>
                        <p>${totalBill.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <Button
                onClick={handleCheckOut}
                className="button--block total__button"
            >
                Check Out
            </Button>
        </div>
    );
};

export default Total;
