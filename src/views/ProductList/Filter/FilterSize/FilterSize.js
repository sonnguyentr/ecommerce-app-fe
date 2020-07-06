import React from "react";
import "./FilterSize";

import { SizeButton } from "../../../../components";
const FilterSize = ({
    size,
    handleSizeChange,
    handleFilterChange,
    isChosenFilter,
}) => {
    const properties = [{ size: "S" }, { size: "M" }, { size: "L" }];
    return (
        <div className="filter___item-container">
            <div
                onClick={() => handleFilterChange("size")}
                className={`filter___item ${
                    isChosenFilter ? "filter___item--chosen" : ""
                }`}
            >
                Size
                <i
                    className={`align-self-center fas fa-chevron-${
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
