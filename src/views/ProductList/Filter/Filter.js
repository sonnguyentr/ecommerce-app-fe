import React, { useState } from "react";
import "./Filter.scss";

import FilterSize from "./FilterSize/FilterSize";
import FilterAvailability from "./FilterAvailability/FilterAvailability";

const Filter = ({
    size,
    availability,
    handleSizeChange,
    handleAvailabilityChange,
}) => {
    const [chosenFilters, setChosenFilters] = useState([]);
    const handleFilterChange = (value) => {
        const index = chosenFilters.indexOf(value);
        if (index === -1) {
            setChosenFilters([...chosenFilters, value]);
        } else {
            const newArr = [...chosenFilters];
            newArr.splice(index, 1);
            setChosenFilters(newArr);
        }
    };
    return (
        <div className="product-list__filter">
            <h5 className="filter___title">Filter</h5>
            <FilterSize
                isChosenFilter={chosenFilters.includes("size")}
                size={size}
                handleSizeChange={handleSizeChange}
                handleFilterChange={handleFilterChange}
            />
            <FilterAvailability
                isChosenFilter={chosenFilters.includes("availability")}
                availability={availability}
                handleAvailabilityChange={handleAvailabilityChange}
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
};

export default Filter;
