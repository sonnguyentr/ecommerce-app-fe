import React, { useReducer } from "react";
import "./ProductList.scss";
import Item from "./Item/Item";
import Paging from "./Paging/Paging";
import Categories from "./Category/Category";
import { useParams } from "react-router-dom";

import api from "../../api";
import { useEffect } from "react";
import { useState } from "react";
const ProductList = () => {
    /*
        Breadcrumb
        Sidebar: Categories, filters
        ProductListContainer
        Sort - paging
        items
    */
    const { routeName } = useParams();
    const [listItem, setListItem] = useState([]);
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
                    item.available = !!quantity;
                    return item;
                });
                setListItem(list);
            }
        };
        getListItem();
    }, []);
    const categoriesDummy = [
        {
            name: "All dresses",
            main: true,
            isChosen: true,
        },
        {
            name: "Rompers / Jumpsuits",
        },
        {
            name: "Casual dresses",
        },
        {
            name: "Going out dresses",
        },
        {
            name: "Party / Ocassion dresses",
        },
        {
            name: "Mini dresses",
        },
        {
            name: "Maxi / Midi dresses",
        },
        {
            name: "Sets",
        },
    ];
    const categoriesReducer = (state, action) => {
        if (action.type === "CHOSE_CAT") {
            return state.map((item) => {
                item.isChosen = action.payload.name === item.name;
                return item;
            });
        } else {
            throw new Error();
        }
    };
    const [categories, dispatchCategories] = useReducer(
        categoriesReducer,
        categoriesDummy
    );
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h6 className="text-center">
                        {routeName +
                            " / " +
                            categories.filter((cat) => cat.isChosen)[0].name}
                    </h6>
                </div>
                <div className="col-xs-12 col-md-2">
                    <Categories
                        list={categories}
                        onClick={(item) => {
                            dispatchCategories({
                                type: "CHOSE_CAT",
                                payload: item,
                            });
                        }}
                    />
                </div>
                <div className="col-xs-12 col-md-auto">
                    <div className="container-fluid">
                        <div className="product-list__container">
                            {listItem && listItem.length ? (
                                <>
                                    <div className="text-right">
                                        <Paging />
                                    </div>
                                    <div className="row">
                                        {listItem.map((item, index) => {
                                            return (
                                                <Item key={index} {...item} />
                                            );
                                        })}
                                    </div>
                                    <div className="text-right">
                                        <Paging />
                                    </div>
                                </>
                            ) : (
                                <div className="text--greyish-two">
                                    No result found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
