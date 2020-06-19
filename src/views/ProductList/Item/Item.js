import React from "react";
import "./Item.scss";

import { Button } from "../../../components";

const Item = ({ title, price, available, img }) => {
    return (
        <div className="item">
            <img src={img} className="img-fluid" alt={title}></img>

            {available ? (
                <div className="quick-shop">
                    <Button className="--primary --block">+ Quick shop</Button>
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
