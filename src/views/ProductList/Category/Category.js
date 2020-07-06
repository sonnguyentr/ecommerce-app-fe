import React from "react";
import "./Category.scss";
const Category = ({ list, onClick }) => {
    return (
        <div className="product-list__category mb-5">
            <h5 className="category__title">Category</h5>
            {list.map((item, index) => {
                return (
                    <div key={index}>
                        <p
                            onClick={() => onClick(item)}
                            className={`category__item ${
                                item.isChosen ? "category__item--chosen" : ""
                            }`}
                        >
                            {item.name}
                        </p>
                        {item.main && <hr />}
                    </div>
                );
            })}
        </div>
    );
};

export default Category;
