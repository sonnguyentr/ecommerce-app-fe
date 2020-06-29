import React from "react";
import "./Size.scss";
import { Button } from "../../../components";

const Size = ({ size, handleSize, properties = [] }) => {
    return (
        <div className="product-size mb-4">
            <p className="product-size__label mb-2">Size</p>
            {properties.map((property) => (
                <Button
                    key={property.size}
                    onClick={() => handleSize(property.size)}
                    disabled={!property.quantity}
                    className={`${
                        size === property.size ? "button--primary" : ""
                    } product-size__button mr-2`}
                >
                    {property.size}
                </Button>
            ))}
        </div>
    );
};

export default Size;
