import React from "react";
import "./Color.scss";

import { Button } from "../../../components";

const Color = ({ color, handleColor }) => {
    const listColors = [
        {
            name:"red",
            color: "#ff5f6d" 
        },
        {
            name:"apricot",
            color: "rgba(255, 195, 113, 0.5)" 
        },
        {
            name:"cornflower",
            color: "rgba(95, 109, 255, 0.5)" 
        },
        {
            name:"skin",
            color: "rgba(255, 161, 95, 0.5)" 
        },
        {
            name:"charcoal-grey",
            color: "rgba(61, 61, 63, 0.5)" 
        },
        {
            name:"white-three",
            color: "rgba(237, 237, 237, 0.5)" 
        },
    ];
    return (
        <div className="product-color mb-4">
            <p className="product-color__label mb-2">Color: ({color})</p>
            {listColors.map((item) => (
                <Button
                    key={item.color}
                    onClick={() => handleColor(item.name)}
                    style={{
                        padding: 0,
                        backgroundColor: item.color,
                        width: "30px",
                        height: "30px",
                    }}
                    className="d-inline-block mx-1 rounded-circle"
                ></Button>
            ))}
        </div>
    );
};

export default Color;
