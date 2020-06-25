import React from "react";
import "./Color.scss";

import { Button } from "../../../components";

const Color = ({ color, handleColor }) => {
    const listColors = [
        {
            name: "red",
            value: "#ff5f6d",
        },
        {
            name: "apricot",
            value: "rgba(255, 195, 113, 0.5)",
        },
        {
            name: "cornflower",
            value: "rgba(95, 109, 255, 0.5)",
        },
        {
            name: "skin",
            value: "rgba(255, 161, 95, 0.5)",
        },
        {
            name: "charcoal-grey",
            value: "rgba(61, 61, 63, 0.5)",
        },
        {
            name: "white-three",
            value: "rgba(237, 237, 237, 0.5)",
        },
    ];
    return (
        <div className="product-color mb-4">
            <p className="product-color__label mb-2">Color: ({color.name})</p>
            {listColors.map((item) => (
                <Button
                    key={item.name}
                    onClick={() => handleColor(item)}
                    style={{
                        backgroundColor: item.value,
                        boxShadow: `${
                            color.value === item.value
                                ? "0 0 5px 2px " + item.value
                                : ""
                        }`,
                    }}
                    className="d-inline-block mx-1 product-color__button"
                ></Button>
            ))}
        </div>
    );
};

export default Color;
