import React, { useReducer } from "react";
import "./ProductList.scss";
import Item from "./Item/Item";
import Paging from "./Paging/Paging";
import Categories from "./Category/Category";
import { useParams } from "react-router-dom";

const ProductList = () => {
    /*
        Breadcrumb
        Sidebar: Categories, filters
        ProductListContainer
        Sort - paging
        items
    */
    const { routeName } = useParams();
    const ListItem = [
        {
            title: "Amber Button-Down Linen Midi Dress",
            price: "$69.00",
            available: true,
            img: "/img/product-pic-1.png",
        },
        {
            title: "Hattie High-Neck Linen Jumpsuit",
            price: "$69.00",
            available: false,
            img: "/img/product-pic-2.png",
        },
        {
            title: "Moonstruck Surplice Romper",
            price: "$69.00",
            available: true,
            img: "/img/product-pic-3.png",
        },
        {
            title: "Collete Stretch Linen Minidress",
            price: "$69.00",
            available: false,
            img: "/img/product-pic-4.png",
        },
        {
            title: "Collete Stretch Linen Minidress",
            price: "$69.00",
            available: true,
            img: "/img/product-pic-5.png",
        },
        {
            title: "Collete Stretch Linen Minidress",
            price: "$69.00",
            available: false,
            img: "/img/product-pic-6.png",
        },
    ];

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
                    <div className="container-fluid product-list__list-item">
                        <div className="row">
                            <div className="col-6 offset-md-6">
                                <Paging />
                            </div>
                        </div>
                        <div className="row">
                            {ListItem.map((item, index) => {
                                return <Item key={index} {...item} />;
                            })}
                            {ListItem.map((item, index) => {
                                return <Item key={index} {...item} />;
                            })}
                        </div>
                        <div className="row">
                            <div className="col-6 offset-md-6">
                                <Paging />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
