import React from "react";
import "./Category.scss";
const Category = ({ list, onClick }) => {
    return (
        <div className="category">
            <h5 className="text--bold mb-4">Category</h5>
            {list.map((item, index) => {
                return (
                    <div key={index}>
                        <p
                            onClick={onClick.bind(null, item)}
                            className={`category__item ${
                                item.isChosen ? "chosen" : ""
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
