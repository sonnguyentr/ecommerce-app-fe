import React from "react";
import "./FilterAvailability.scss";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
const FilterAvailability = ({
    availability,
    handleAvailabilityChange,
    handleFilterChange,
    isChosenFilter,
}) => {
    return (
        <div className="filter___item-container">
            <div
                onClick={() => handleFilterChange("availability")}
                className={`filter___item ${
                    isChosenFilter ? "filter___item--chosen" : ""
                }`}
            >
                Available
                <i
                    className={`align-self-center fas fa-chevron-${
                        isChosenFilter ? "up" : "down"
                    }`}
                ></i>
            </div>

            {isChosenFilter && (
                <div className="fitler__item-detail">
                    <FilterCheckBox
                        label="In-store"
                        checked={availability.inStore}
                        onClick={() => handleAvailabilityChange("inStore")}
                    />
                    <FilterCheckBox
                        label="Out-of-stock"
                        checked={availability.outOfStock}
                        onClick={() => handleAvailabilityChange("outOfStock")}
                    />
                </div>
            )}
        </div>
    );
};

export default FilterAvailability;
