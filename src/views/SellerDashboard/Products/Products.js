import React from "react";
import "./Products.scss";
import { useHistory } from "react-router-dom";
import { Button } from "../../../components";

import ProductList from "./ProductList/ProductList";
const Products = (props) => {
    const history = useHistory();

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="text-right col-12">
                        <Button
                            onClick={() => {
                                history.push(
                                    "/seller-dashboard/products/add-product"
                                );
                            }}
                            className="button--primary"
                        >
                            Add Product
                        </Button>
                    </div>
                </div>
            </div>
            <ProductList />
        </div>
    );
};

export default Products;
