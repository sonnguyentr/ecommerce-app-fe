import React, { useState } from "react";
import "./Item.scss";
import { useHistory } from "react-router-dom";

import { Button } from "../../../components";

const Item = ({ title, price, available, img, _id }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/product-detail/${_id}`);
    };
    const [isLoaded, setIsLoaded] = useState(false);
    const onImgLoaded = () => {
        console.log("object");
        setIsLoaded(true);
    };
    return (
        <div
            className={`product-list__item ${!available ? "disabled" : ""}`}
            onClick={handleClick}
        >
            <img
                onLoad={onImgLoaded}
                src={img}
                className={`img-fluid ${!isLoaded ? "item__img--loading" : ""}`}
                alt={title}
            ></img>
            <img
                src="/img/product-placeholder.png"
                className={`img-fluid ${isLoaded ? "item__img--loading" : ""}`}
                alt={title}
            ></img>
            {available ? (
                <div className="product-list__quick-shop">
                    <Button className="list__quick-shop__button button--primary button--block">
                        + Quick shop
                    </Button>
                </div>
            ) : (
                <div className="product-list__sold-out">Sold out</div>
            )}
            <p className="product-list__title text--dark-grey mb-1">{title}</p>
            <small className="text--greyish-brown">{price}</small>
        </div>
    );
};

export default Item;
