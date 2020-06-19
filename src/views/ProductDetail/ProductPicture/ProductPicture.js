import React, { useState } from "react";
import "./ProductPicture.scss";

const ProductPicture = (props) => {
    const listPicsDummy = [
        {
            id: 1,
            src: "/img/product-pic-1.png",
            main: true,
        },
        {
            id: 2,
            src: "/img/product-pic-4.png",
        },
        {
            id: 3,
            src: "/img/product-pic-3.png",
        },
        {
            id: 4,
            src: "/img/product-pic-2.png",
        },
    ];
    const [listPics, setListPics] = useState(listPicsDummy);
    const [mainPic, setMainPic] = useState(listPics[0]);
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
                                onClick={handleClickPic.bind(null, pic)}
                                key={pic.id}
                                src={pic.src}
                                className="img-fluid product-picture--small "
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
