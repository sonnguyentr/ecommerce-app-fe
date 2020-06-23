import React from "react";
import "./Size.scss";
import { Button } from "../../../components";

const Size = ({ size, handleSize }) => {
    const listButtons = [{ size: "S" }, { size: "M" }, { size: "L" }];
    return (
        <div className="product-size mb-4">
            <p className="product-size__label mb-2">Size</p>
            {listButtons.map((button) => (
                <Button
                    key={button.size}
                    onClick={() => handleSize(button.size)}
                    className={`${
                        size === button.size ? "--primary" : ""
                    } product-size__button mr-2`}
                >
                    {button.size}
                </Button>
            ))}
        </div>
    );
};

export default Size;
