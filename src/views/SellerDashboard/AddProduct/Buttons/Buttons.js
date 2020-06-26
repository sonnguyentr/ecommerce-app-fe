import React from "react";
import "./Buttons.scss";
import { Button } from "../../../../components";
const Buttons = (props) => {
    return (
        <div className="add-product__row add-product__button">
            <div className="add-product__input-container text-right ml-auto">
                <Button className="add-product__cancel-buton button--outline">Cancel</Button>
                <Button
                    className="add-product__submit-buton button--primary"
                    type="submit"
                >
                    Complete
                </Button>
            </div>
        </div>
    );
};

export default Buttons;
