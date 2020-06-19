import React from "react";
import HomePage from "../views/Homepage/Homepage";
import ProductList from "../views/ProductList/ProductList";

export default [
    {
        path: "/:param",
        component: () => <ProductList />,
    },
    {
        path: "/",
        component: () => <HomePage />,
    },
];
