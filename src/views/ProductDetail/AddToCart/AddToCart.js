import React from "react";
import { Button } from "../../../components";
const AddToCart = ({handleAddToCart}) => {
    return (
        <Button onClick={handleAddToCart} className="button--block button--blue button--shadow mb-3">Add to cart</Button>
    );
};

export default AddToCart;
