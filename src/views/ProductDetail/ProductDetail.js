import React, { useState } from "react";
import { connect } from "react-redux";
import ProductPicture from "./ProductPicture/ProductPicture";
import "./ProducDetail.scss";

import Size from "./Size/Size";
import Quantity from "./Quantity/Quantity";
import Color from "./Color/Color";
import AddToCart from "./AddToCart/AddToCart";

const ProductDetail = ({ dispatchAddToCart }) => {
    const product = {
        id: "X-1",
        stars: 5,
        title: "Collete Stretch Linen Minidress",
        price: 69,
        reviewCount: 0,
        picture: "/img/product-pic-1.png"
    };
    const starsArray = [];
    for (let i = 0; i < product.stars; i++) {
        starsArray.push(
            <i key={i} className="fas fa-star text--white-six"></i>
        );
    }

    const [size, setSize] = useState("S");
    const handleSize = (value) => {
        setSize(value);
    };

    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (value) => {
        if (quantity + value > 0) setQuantity(quantity + value);
    };

    const [color, setColor] = useState("red");
    const handleColor = (value) => {
        setColor(value);
    };

    const handleAddToCart = () => {
        dispatchAddToCart({ ...product, size, quantity, color });
    };
    return (
        <div
            style={{ maxWidth: "1220px" }}
            className="container-fluid product-detail"
        >
            <div className="row">
                <div className="col-md-5">
                    <ProductPicture />
                </div>
                <div className="col-md-5 ml-3">
                    <h2 className="product-detail__title">{product.title}</h2>
                    <p className="product-detail__price">
                        ${product.price.toFixed(2)}
                    </p>
                    <small className="mb-3 d-block">
                        {starsArray} | {product.reviewCount} Review
                    </small>
                    <Size size={size} handleSize={handleSize} />
                    <Color color={color} handleColor={handleColor} />
                    <Quantity
                        handleQuantity={handleQuantity}
                        quantity={quantity}
                    />
                    <AddToCart handleAddToCart={handleAddToCart} />
                    <hr />
                    <small className="text--bold d-block">
                        Model wearing size S
                    </small>
                    <small className="d-block">- Chest: 36”</small>
                    <small className="d-block">- Length: 25.75”</small>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToCart: (product) =>
            dispatch({ type: "ADD_TO_CART", payload: product }),
    };
};

export default connect(null, mapDispatchToProps)(ProductDetail);
