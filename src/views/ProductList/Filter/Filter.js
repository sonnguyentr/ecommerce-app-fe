import React from "react";
import "./Filter.scss";

import FilterSize from "./FilterSize/FilterSize";

const Filter = ({ size, handleSizeChange }) => {
    return (
        <div className="product-list__filter">
            <h5 className="filter___title">Filter</h5>
            <FilterSize
                size={size}
                handleSizeChange={handleSizeChange}
            />
        </div>
    );
};

export default Filter;
