import React, { useState, useEffect } from "react";
import "./Categories.scss";

import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = ({
    categories = [],
    handleCategorySelect,
    chosenCategories = [],
}) => {
    const [show, setShow] = useState(false);
    const handleShowCategories = (value) => {
        if (chosenCategories.length !== categories.length) {
            setShow(value ? value : !show);
        } else {
            setShow(false);
        }
    };
    useEffect(() => {
        if (chosenCategories.length === categories.length) {
            setShow(false);
        }
    }, [chosenCategories, categories]);
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <label htmlFor="product-name" className="add-product__title">
                    CATEGORIES
                </label>
            </div>
            <div className="add-product__input-container add-product__categories">
                <div
                    onClick={handleShowCategories}
                    className="form__input add-product__input categories__container"
                >
                    <div>
                        {chosenCategories.map(({ value, name }) => (
                            <CategoryItem
                                handleCategorySelect={handleCategorySelect}
                                key={value}
                                value={value}
                                name={name}
                            />
                        ))}
                    </div>
                    <i
                        className={`fas ${
                            show ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                    ></i>
                </div>
                {show && (
                    <>
                        <div
                            onClick={() => handleShowCategories(false)}
                            className="categories__option-fake"
                        ></div>
                        <ul className="categories__option-container">
                            {categories.map(
                                ({ value, name }) =>
                                    !chosenCategories.find(
                                        (cat) => cat.value === value
                                    ) && (
                                        <li
                                            onClick={() =>
                                                handleCategorySelect({
                                                    value,
                                                    name,
                                                })
                                            }
                                            key={value}
                                            className="categories__option"
                                        >
                                            {name}
                                        </li>
                                    )
                            )}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Categories;
