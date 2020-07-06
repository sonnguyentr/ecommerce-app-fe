import React from "react";
import "./SizeButton.scss";

import { Button } from "../index";
const SizeButton = ({
    size,
    handleSizeClick,
    isChosen,
    isDisabled,
    children,
}) => {
    return (
        <Button
            onClick={() => handleSizeClick(size)}
            disabled={isDisabled}
            className={`${isChosen ? "size-button--chosen" : ""} size-button`}
        >
            {children}
        </Button>
    );
};

export default SizeButton;
