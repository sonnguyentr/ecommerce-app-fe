import React from "react";
import "./ProductList.scss";
import Item from "./Item/Item";
import Paging from "./Paging/Paging";

const ProductList = () => {
    /*
        Breadcrumb
        Sidebar: Categories, filters
        ProductListContainer
        Sort - paging
        items
    */
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
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-md-2">//Sidebar</div>
                <div className="col-xs-12 col-md-auto">
                    <div
                        className="container-fluid"
                        style={{ width: "1000px" }}
                    >
                        <div className="row">
                            <div className="col-6 text-left">Sort</div>
                            <div className="col-6 text-left">
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
