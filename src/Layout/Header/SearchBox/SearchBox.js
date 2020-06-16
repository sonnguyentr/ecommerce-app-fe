import React from "react";
import "./SearchBox.scss";
const SearchBox = (props) => {
    return (
        <div className="container-search-box">
            <input type="text" placeholder="Search" className="search"></input>
            <i style={{ fontSize: "24"}} className="fas fa-search search-icon"></i>
        </div>
    );
};
export default SearchBox;
