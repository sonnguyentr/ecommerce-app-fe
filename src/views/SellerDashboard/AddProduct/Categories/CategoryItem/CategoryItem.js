import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ name, value, handleCategorySelect }) => {
    const handleOnClick = (e) => {
        e.stopPropagation();
        handleCategorySelect({ name, value });
    };
    return (
        <span onClick={(e) => handleOnClick(e)} className="category-item">
            {name}
            <i className="fas fa-times-circle"></i>
        </span>
    );
};

export default CategoryItem;
