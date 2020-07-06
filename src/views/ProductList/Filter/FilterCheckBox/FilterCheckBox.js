import React from "react";
import "./FilterCheckBox.scss";

const FilterCheckBox = ({ label, checked, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`filter-check-box ${
                checked ? "filter-check-box--checked" : ""
            }`}
        >
            <span>{label}</span>
            {checked ? (
                <i className="fas fa-check-square"></i>
            ) : (
                <i className="far fa-square filter-check-box__square"></i>
            )}
        </div>
    );
};

export default FilterCheckBox;
