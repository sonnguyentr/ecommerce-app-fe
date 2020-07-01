import React, { useState, useEffect, useCallback } from "react";
import "./AddProduct.scss";
import { useParams } from "react-router-dom";

import Photos from "./Photos/Photos";
import Name from "./Name/Name";
import Price from "./Price/Price";
import Size from "./Size/Size";
import Description from "./Description/Description";
import Buttons from "./Buttons/Buttons";

import api from "../../../api";
const AddProduct = (props) => {
    const { _id } = useParams();
    const updateProductData = useCallback((product) => {
        let photos = [{}, {}, {}, {}];
        photos = photos.map((photo, i) => {
            return {
                src: product.photos[i],
            };
        });
        setPhotoArray([...photos]);
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setSizeArray(product.properties);
    }, []);
    useEffect(() => {
        if (!_id) return;

        const getProductDetail = async () => {
            try {
                const data = await api.getProductDetail(_id);
                updateProductData(data.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProductDetail();
    }, [_id, updateProductData]);
    // Photo
    const initPhotoArray = [{}, {}, {}, {}];
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
    };
    // Name
    const [title, setTitle] = useState("");
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    // Price
    const [price, setPrice] = useState("");
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    // Size
    const initSizeArray = [
        { size: "S", quantity: 0 },
        { size: "M", quantity: 0 },
        { size: "L", quantity: 0 },
    ];
    const [sizeArray, setSizeArray] = useState(initSizeArray);
    const handleSizeChange = (size, quantity) => {
        const newSizeArr = [...sizeArray];
        const foundSize = newSizeArr.find((item) => item.size === size);
        foundSize.quantity = Number(quantity);
        setSizeArray([...newSizeArr]);
    };
    // Description
    const [description, setDescription] = useState("");
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const submitAddProduct = async () => {
        const postData = {
            title,
            price,
            description,
            photos: photoArray,
            properties: sizeArray,
        };
        try {
            await api.addProduct(postData);
            alert("Product created!");
        } catch (err) {
            alert(
                (err.response && err.response.data.message) ||
                    "Something went wrong!"
            );
        }
    };

    const submitEditProduct = async () => {
        const postData = {
            title,
            price,
            description,
            photos: photoArray,
            properties: sizeArray,
        };
        try {
            const data = await api.editProduct(_id, postData);

            alert("Product updated!");
            updateProductData(data.data.product);
        } catch (err) {
            alert(
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                    "Something went wrong!"
            );
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (_id) {
            submitEditProduct();
        } else {
            submitAddProduct();
        }
    };

    return (
        <div className="add-product">
            <form
                name="add-product"
                onSubmit={(e) => {
                    handleFormSubmit(e);
                }}
            >
                <div className="container-fluid form">
                    <Photos photoUpload={photoUpload} photoArray={photoArray} />
                    <Name title={title} handleTitleChange={handleTitleChange} />
                    <Price
                        price={price}
                        handlePriceChange={handlePriceChange}
                    />
                    {sizeArray.map((item) => (
                        <Size
                            key={item.size}
                            {...item}
                            handleSizeChange={handleSizeChange}
                        />
                    ))}
                    <Description
                        description={description}
                        handleDescriptionChange={handleDescriptionChange}
                    />
                    <Buttons />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
