import React, { useState, useEffect } from "react";
import "./ProductList.scss";

import ProductItem from "./ProductItem/ProductItem";

import api from "../../../../api";
const ProductList = (props) => {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        const getListItem = async () => {
            const data = await api.getListProduct();
            if (data.status === 200) {
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
            }
        };
        getListItem();
    }, []);

    const handleRemoveProduct = async (product) => {
        const result = window.confirm(
            "Are you sure you want to remove item: " + product.title
        );
        if (!result) return;
        try {
            const data = await api.removeProduct(product._id);
            if (data.status === 200) {
                console.log(data.data);
                alert((data.data && data.data.message) || "Delete success!");
                const list = [...listProducts];
                const foundIndex = list.findIndex(
                    (item) => item._id === product._id
                );
                list.splice(foundIndex, 1);
                setListProducts(list);
            }
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
        </div>
    );
};

export default ProductList;
