import React from "react";
import "./SearchBox.scss";
const SearchBox = (props) => {
    return (
        <div className="container-search-box">
            <input type="text" placeholder="Search" className="search"></input>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="search-icon"
            >
                <path
                    fill="#3D3D3F"
                    fillRule="evenodd"
                    d="M15.146 6.323a6.238 6.238 0 0 0-8.823 0 6.238 6.238 0 0 0 0 8.823 6.238 6.238 0 0 0 8.823 0 6.238 6.238 0 0 0 0-8.823m6.489 15.312a1.25 1.25 0 0 1-1.766 0l-3.929-3.93c-3.422 2.557-8.273 2.315-11.381-.794a8.733 8.733 0 0 1 0-12.352 8.733 8.733 0 0 1 12.352 0c3.11 3.108 3.351 7.96.793 11.381l3.931 3.93a1.249 1.249 0 0 1 0 1.765"
                />
            </svg>
        </div>
    );
};
export default SearchBox;
