import React from "react";
import "./Size.scss";
import { SizeButton } from "../../../components";

const Size = ({ size, handleSize, properties = [] }) => {
    return (
        <div className="product-size mb-4">
            <p className="product-size__label mb-2">Size</p>
            {properties.map((property) => (
                <span key={property.size} className="mr-2">
                    <SizeButton
                        handleSizeClick={handleSize}
                        isDisabled={!property.quantity}
                        isChosen={size === property.size}
                        size={property.size}
                    >
                        {property.size}
                    </SizeButton>
                </span>
            ))}
        </div>
    );
};

export default Size;
