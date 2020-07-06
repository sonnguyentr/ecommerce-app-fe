import React, { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductList.scss";
import Item from "./Item/Item";
import { Paging } from "../../components";
import Categories from "./Category/Category";
import Filter from "./Filter/Filter";

import { CATEGORIES_CONSTANT } from "../../constant";

import api from "../../api";
const ProductList = () => {
    /*
        Breadcrumb
        Sidebar: Categories, filters
        ProductListContainer
        Sort - paging
        items
    */
    const { routeName } = useParams();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const handlePageChange = (value) => {
        setPage(value);
    };

    const [size, setSize] = useState(null);
    const handleSizeChange = (value) => {
        if (size === value) {
            setSize(null);
        } else {
            setSize(value);
        }
    };
    const initAvailability = {
        inStore: true,
        outOfStock: false,
    };
    const [availability, setAvailability] = useState(initAvailability);

    const handleAvailabilityChange = (value) => {
        const newObj = { ...availability };
        newObj[value] = !newObj[value];
        setAvailability(newObj);
    };

    const [listItem, setListItem] = useState([]);
    useEffect(() => {
        const getListItem = async () => {
            try {
                const data = await api.getListProduct({
                    page,
                    size,
                    ...availability,
                });
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
                setTotalPages(data.data.totalPages);
            } catch (err) {
                console.error(err);
            }
        };
        getListItem();
    }, [page, size, availability]);

    const initCategories = [...CATEGORIES_CONSTANT];
    initCategories.unshift({
        name: "All dresses",
        value: "",
        isChosen: true,
    });
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
        initCategories
    );
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h6 className="text-center">
                        {routeName +
                            (categories.filter((cat) => cat.isChosen)[0]
                                ? " / " +
                                  categories.filter((cat) => cat.isChosen)[0]
                                      .name
                                : "")}
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
                    <Filter
                        handleAvailabilityChange={handleAvailabilityChange}
                        handleSizeChange={handleSizeChange}
                        size={size}
                        availability={availability}
                    />
                </div>
                <div className="col-xs-12 col-md-auto">
                    <div className="container-fluid">
                        <div className="product-list__container">
                            {listItem && listItem.length ? (
                                <>
                                    <div className="text-right">
                                        <Paging
                                            page={page}
                                            handlePageChange={handlePageChange}
                                            totalPages={totalPages}
                                        />
                                    </div>
                                    <div className="row">
                                        {listItem.map((item, index) => {
                                            return (
                                                <Item key={index} {...item} />
                                            );
                                        })}
                                    </div>
                                    <div className="text-right">
                                        <Paging
                                            page={page}
                                            handlePageChange={handlePageChange}
                                            totalPages={totalPages}
                                        />
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
