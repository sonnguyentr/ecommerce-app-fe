import React from "react";
import "./NavBar.scss";

const categories = [
    {
        name: "Men",
        subCat: [
            "Tops",
            "Bottoms",
            "Dresses",
            "Jackets",
            "Shoes",
            "Accessories",
            "Sale",
        ],
    },
    {
        name: "Ladies",
        subCat: [
            "Tops",
            "Bottoms",
            "Dresses",
            "Jackets",
            "Shoes",
            "Accessories",
            "Sale",
        ],
    },
    {
        name: "Girls",
        subCat: [
            "Tops",
            "Bottoms",
            "Dresses",
            "Jackets",
            "Shoes",
            "Accessories",
            "Sale",
        ],
    },
    {
        name: "Boys",
        subCat: [
            "Tops",
            "Bottoms",
            "Dresses",
            "Jackets",
            "Shoes",
            "Accessories",
            "Sale",
        ],
    },
];

const NavBar = (props) => {
    return (
        <nav className="text--center nav-bar">
            <ul>
                {categories.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                            <i style={{marginLeft: 5, fontSize: 13}} className="fas fa-chevron-down"></i>
                            <ul className="sub-menu">
                                {item.subCat.map((subcat, i) => {
                                    return <li key={i}>{subcat}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
