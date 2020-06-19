import React from "react";
import "./Size.scss";
import { Button } from "../../../components";
const Size = (props) => {
    
    return (
        <div className="product-size mb-3">
            <p className="product-size__label mb-2">Size</p>
            <Button className="product-size__button --primary mr-2">S</Button>
            <Button className="product-size__button mr-2">M</Button>
            <Button className="product-size__button mr-2">L</Button>
        </div>
    );
};

export default Size;
