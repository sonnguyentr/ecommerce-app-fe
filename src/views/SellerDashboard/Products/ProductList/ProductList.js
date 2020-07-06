import React, { useState, useEffect } from "react";
import "./ProductList.scss";

import ProductItem from "./ProductItem/ProductItem";
import { Paging } from "../../../../components";

import api from "../../../../api";
const ProductList = (props) => {
    const [page, setPage] = useState(1);
    const handlePageChange = (value) => {
        setPage(value);
    };
    const [totalPages, setTotalPages] = useState(1);

    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        const getListItem = async () => {
            try {
                const data = await api.getListProduct({ page, limit: 10  });
                const list = data.data.data.map((item) => {
                    item.price = `$${item.price.toFixed(2)}`;
                    item.img = item.photos[0];
                    let quantity = item.properties.reduce(
                        (accu, current) => (accu += current.quantity || 0),
                        0
                    );
                    item.quantity = quantity;
                    item.available = !!quantity;
                    return item;
                });
                setListProducts(list);
                setTotalPages(data.data.totalPages);
            } catch (err) {
                console.log(err);
            }
        };
        getListItem();
    }, [page]);

    const handleRemoveProduct = async (product) => {
        const result = window.confirm(
            "Are you sure you want to remove item: " + product.title
        );
        if (!result) return;
        try {
            const data = await api.removeProduct(product._id);
            console.log(data.data);
            alert((data.data && data.data.message) || "Delete success!");
            const list = [...listProducts];
            const foundIndex = list.findIndex(
                (item) => item._id === product._id
            );
            list.splice(foundIndex, 1);
            setListProducts(list);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="sell-product-list__container">
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTS</th>
                        <th>SOLD</th>
                        <th>DATE ADDED</th>
                        <th>PROFIT ($)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts.map((item) => (
                        <ProductItem
                            handleRemoveProduct={handleRemoveProduct}
                            key={item._id}
                            {...item}
                        />
                    ))}
                </tbody>
            </table>
            <div className="text-right mt-3">
                <Paging
                    page={page}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;
