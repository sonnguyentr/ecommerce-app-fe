import React from "react";

const Men = (props) => {
    return (
        <li>
            <span>
                <b>Men</b>
            </span>
            <svg
                className="vertical-algin-midle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    fill="#202124"
                    fillRule="evenodd"
                    d="M16.762 9.684l-.48-.458A.844.844 0 0 0 15.696 9a.807.807 0 0 0-.578.226L12 12.196l-3.12-2.97A.807.807 0 0 0 8.304 9a.844.844 0 0 0-.584.226l-.475.458A.74.74 0 0 0 7 10.24c0 .22.081.404.244.55l4.178 3.978A.782.782 0 0 0 12 15a.817.817 0 0 0 .584-.232l4.178-3.978a.73.73 0 0 0 .238-.55.763.763 0 0 0-.238-.556z"
                />
            </svg>
            <ul className="sub-menu">
                <li>
                    <span>Tops</span>
                </li>
                <li>
                    <span>Bottoms</span>
                </li>
                <li>
                    <span>Dresses</span>
                </li>
                <li>
                    <span>Jackets</span>
                </li>
                <li>
                    <span>Shoes</span>
                </li>
                <li>
                    <span>Accessories</span>
                </li>
                <li>
                    <span>Sale</span>
                </li>
            </ul>
        </li>
    );
};

export default Men;
