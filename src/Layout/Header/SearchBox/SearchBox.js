import React from "react";
import "./SearchBox.scss";
const SearchBox = (props) => {
    return (
        <div className="search-box__container">
            <input type="text" placeholder="Search" className="search-box__input"></input>
            <i className="fas fa-search search-box__icon"></i>
        </div>
    );
};
export default SearchBox;
