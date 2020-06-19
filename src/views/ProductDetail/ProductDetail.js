import React from "react";
import ProductPicture from "./ProductPicture/ProductPicture";
import "./ProducDetail.scss";

import Size from "./Size/Size";

import { Button } from "../../components";

const ProductDetail = (props) => {
    const stars = 5;
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
        starsArray.push(
            <i key={i} className="fas fa-star text--white-six"></i>
        );
    }

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
                    <h2 className="product-detail__title">
                        Collete Stretch Linen Minidress
                    </h2>
                    <p className="product-detail__price">$69.00</p>
                    <small className="mb-3 d-block">
                        {starsArray} | 0 Review
                    </small>
                    <Size />
                    <Button className="--block --blue --shadow mb-3">
                        Add to cart
                    </Button>
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

export default ProductDetail;
