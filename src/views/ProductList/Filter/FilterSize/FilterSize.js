import React, { useState } from "react";
import "./FilterSize";

import { SizeButton } from "../../../../components";
const FilterSize = ({ size, handleSizeChange }) => {
    const properties = [{ size: "S" }, { size: "M" }, { size: "L" }];
    const [isChosenFilter, setChosenFilter] = useState(false);
    const handleFilterClick = () => {
        setChosenFilter(!isChosenFilter);
    };
    return (
        <div className="filter___item-container">
            <div
                onClick={handleFilterClick}
                className={`filter___item ${
                    isChosenFilter ? "filter___item--chosen" : ""
                }`}
            >
                Size
                <i
                    className={`fas fa-chevron-${
                        isChosenFilter ? "up" : "down"
                    }`}
                ></i>
            </div>

            {isChosenFilter && (
                <div className="fitler__item-detail">
                    {properties.map((property) => (
                        <span key={property.size} className="mr-3 mb-3">
                            <SizeButton
                                handleSizeClick={handleSizeChange}
                                isChosen={size === property.size}
                                size={property.size}
                            >
                                {property.size}
                            </SizeButton>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterSize;
