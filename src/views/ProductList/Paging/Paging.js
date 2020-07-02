import React from "react";
import "./Paging.scss";

import { Button } from "../../../components";

const Paging = ({ page, totalPages, handlePageChange }) => {
    const handleArrowClick = (value) => {
        const newPage = page + value;
        if (newPage >= 1 && newPage <= totalPages) {
            handlePageChange(newPage);
        }
    };
    return (
        <div className="text-right text--greyish-brown paging">
            <Button
                onClick={() => handleArrowClick(-1)}
                className="paging__button button--transparent"
            >
                <i className="fas fa-chevron-left"></i>
            </Button>
            <span className="text--dark-grey paging__text">
                {page} / {totalPages}
            </span>
            <Button
                onClick={() => handleArrowClick(1)}
                className="paging__button button--transparent"
            >
                <i className="fas fa-chevron-right"></i>
            </Button>
        </div>
    );
};

export default Paging;
