import React, { useState } from "react";
import "./AddProduct.scss";

import Photos from "./Photos/Photos";

const AddProduct = (props) => {
    const initPhotoArray = [{ src: "" }, { src: "" }, { src: "" }, { src: "" }];

    const [photoArray, setPhotoArray] = useState(initPhotoArray);
    const photoUpload = (e, index) => {
        const files = Array.from(e.target.files);
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                handleSetPhotoArray(index, e.target.result, files[0]);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    const handleSetPhotoArray = (index, src, file) => {
        const newArr = [...photoArray];
        newArr[index] = { ...newArr[index], src, file };
        setPhotoArray([...newArr]);
        console.log(newArr);
    };
    return (
        <div className="add-product">
            <h1>Add Product</h1>
            <div className="container-fluid">
                <Photos photoUpload={photoUpload} photoArray={photoArray} />
            </div>
        </div>
    );
};

export default AddProduct;
