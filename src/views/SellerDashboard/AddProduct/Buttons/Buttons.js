import React from "react";
import "./Buttons.scss";
import { Button } from "../../../../components";

import { useHistory } from "react-router-dom";

const Buttons = (props) => {
    const history = useHistory();
    return (
        <div className="add-product__row add-product__button">
            <div className="add-product__input-container text-right ml-auto">
                <Button
                    onClick={() => history.goBack()}
                    className="add-product__cancel-buton button--outline"
                >
                    Back
                </Button>
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
