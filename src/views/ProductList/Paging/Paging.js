import React from "react";
const Paging = (props) => {
    return (
        <div
            className="text-right text--greyish-brown"
            style={{ fontSize: "13px" }}
        >
            <i className="fas fa-chevron-left"></i>
            <span className="text--dark-grey mx-2">1 / 100</span>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
};

export default Paging;
