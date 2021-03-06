import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ProductPicture from "./ProductPicture/ProductPicture";
import "./ProducDetail.scss";
import { shoppingCart } from "../../constant";

import Size from "./Size/Size";
import Quantity from "./Quantity/Quantity";
import Color from "./Color/Color";
import AddToCart from "./AddToCart/AddToCart";

import api from "../../api";
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToCart: (product) =>
            dispatch({ type: shoppingCart.ADD_TO_CART, payload: product }),
    };
};

const ProductDetail = ({ dispatchAddToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const data = await api.getProductDetail(productId);
                const product = {
                    ...data.data.data,
                };
                product.id = product._id;
                product.picture =
                    product.photos[0] || "/img/product-placeholder.png";
                setProduct(product);
                const availableProperty = product.properties.find(
                    (i) => i.quantity
                );
                setSize(availableProperty.size);
            } catch (err) {
                console.log(err);
            }
        };
        getProductDetail();
    }, [productId]);
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
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
        const property = product.properties.find((prop) => prop.size === size);
        setQuantity(Math.min(quantity + value, property.quantity));
    };

    const [color, setColor] = useState({
        name: "red",
        value: "#ff5f6d",
    });
    const handleColor = (value) => {
        setColor(value);
    };

    const handleAddToCart = () => {
        dispatchAddToCart({ ...product, size, quantity, color });
    };
    return (
        <div className="container-fluid product-detail">
            <div className="row">
                <div className="col-md-5">
                    <ProductPicture photos={product.photos} />
                </div>
                <div className="col-md-5 ml-3">
                    <h2 className="product-detail__title">{product.title}</h2>
                    <p className="product-detail__price">
                        ${product.price && product.price.toFixed(2)}
                    </p>
                    <small className="mb-3 d-block">
                        {starsArray} | {product.reviewCount} Review
                    </small>
                    <Size
                        properties={product.properties}
                        size={size}
                        handleSize={handleSize}
                    />
                    <Color color={color} handleColor={handleColor} />
                    <Quantity
                        handleQuantity={handleQuantity}
                        quantity={quantity}
                    />
                    <AddToCart handleAddToCart={handleAddToCart} />
                    <hr />
                    {product.description}
                    {/* <small className="text--bold d-block">
                        Model wearing size S
                    </small>
                    <small className="d-block">- Chest: 36”</small>
                    <small className="d-block">- Length: 25.75”</small> */}
                </div>
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(ProductDetail);
