import React from "react";
import HomePage from "../views/Homepage/Homepage";
import ProductList from "../views/ProductList/ProductList";
import ProductDetail from "../views/ProductDetail/ProductDetail";

export default [
    {
        path: "/product-detail",
        component: () => <ProductDetail />,
    },
    {
        path: "/:routeName",
        component: () => <ProductList />,
    },
    {
        path: "/",
        component: () => <HomePage />,
    },
];
