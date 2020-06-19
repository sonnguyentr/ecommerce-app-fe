import React from "react";
import "./Item.scss";
import { useHistory } from "react-router-dom";

import { Button } from "../../../components";

const Item = ({ title, price, available, img }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/product-detail");
    }
    return (
        <div className="item">
            <img src={img} className="img-fluid" alt={title}></img>

            {available ? (
                <div className="quick-shop">
                    <Button onClick={handleClick} className="--primary --block">+ Quick shop</Button>
                </div>
            ) : (
                <div className="sold-out">Sold out</div>
            )}
            <p className="title text--dark-grey mb-1">{title}</p>
            <small className="text--greyish-brown">{price}</small>
        </div>
    );
};

export default Item;
