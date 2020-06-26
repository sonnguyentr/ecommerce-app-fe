import React from "react";
import "./NavBar.scss";
import { Link } from 'react-router-dom'

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
                        <li key={index} className="text--dark-grey">
                            <Link className="link" to={item.name}>{item.name}</Link>
                            <i className="fas fa-chevron-down ml-2"></i>
                            <ul className="sub-menu">
                                {item.subCat.map((subcat, i) => {
                                    return <li key={i}>
                                        <Link className="link" to={"/"+subcat}>{subcat}</Link>
                                    </li>;
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
