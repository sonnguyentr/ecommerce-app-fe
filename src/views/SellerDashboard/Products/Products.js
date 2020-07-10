import React from "react";
import "./Products.scss";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components";

import ProductList from "./ProductList/ProductList";
const Products = (props) => {
    const history = useHistory();

    return (
        <div>
            <h1 className="seller-dashboard__title">Products</h1>
            <div className="text-right">
                <Button
                    onClick={() => {
                        history.push("/seller-dashboard/products/add-product");
                    }}
                    className="button--primary mr-0"
                >
                    Add Product
                </Button>
            </div>
            <ProductList />
        </div>
    );
};

export default Products;
