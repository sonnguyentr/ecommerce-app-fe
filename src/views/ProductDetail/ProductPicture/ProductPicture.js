import React, { useState, useEffect } from "react";
import "./ProductPicture.scss";

const ProductPicture = ({ photos = [] }) => {
    // const listPicsDummy = [
    //     {
    //         id: 1,
    //         src: "/img/product-pic-1.png",
    //         main: true,
    //     },
    //     {
    //         id: 2,
    //         src: "/img/product-pic-4.png",
    //     },
    //     {
    //         id: 3,
    //         src: "/img/product-pic-3.png",
    //     },
    //     {
    //         id: 4,
    //         src: "/img/product-pic-2.png",
    //     },
    // ];
    const [listPics, setListPics] = useState([]);
    const [mainPic, setMainPic] = useState({});
    useEffect(() => {
        const list = photos.map((item, index) => {
            return {
                id: index,
                main: index === 1,
                src: item || "/img/product-placeholder.png",
                disabled: !item,
            };
        });
        setListPics(list);
        setMainPic(list[0] || {});
        console.log(photos);
    }, [photos]);
    const handleClickPic = (pic) => {
        setMainPic({ ...pic, main: true });
        setListPics(
            listPics.map((item) => {
                return { ...item, main: item.id === pic.id };
            })
        );
    };
    return (
        <div className="container-fluid product-picture">
            <div className="row">
                <div className="col-2 pr-0">
                    {listPics.map((pic) => {
                        return (
                            <img
                                onClick={() =>
                                    !pic.disabled ? handleClickPic(pic) : null
                                }
                                key={pic.id}
                                src={pic.src}
                                className={`img-fluid product-picture--small ${
                                    pic.disabled ? "disabled" : ""
                                }`}
                                alt="tets"
                            ></img>
                        );
                    })}
                </div>
                <div className="col-auto">
                    <img
                        src={mainPic.src}
                        className="img-fluid product-picture--main"
                        alt="tets"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default ProductPicture;
