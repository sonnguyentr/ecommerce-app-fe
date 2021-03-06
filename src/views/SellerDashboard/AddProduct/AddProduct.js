import React, { useState, useEffect, useCallback } from "react";
import "./AddProduct.scss";
import { useParams, useHistory } from "react-router-dom";

import { CATEGORIES_CONSTANT } from "../../../constant";

import Photos from "./Photos/Photos";
import Name from "./Name/Name";
import Price from "./Price/Price";
import Size from "./Size/Size";
import Description from "./Description/Description";
import Buttons from "./Buttons/Buttons";
import Categories from "./Categories/Categories";
import toastr from "toastr";

import api from "../../../api";
const AddProduct = (props) => {
    const { _id } = useParams();
    const history = useHistory();
    const updateProductData = useCallback((product) => {
        let photos = [{}, {}, {}, {}];
        photos = photos.map((photo, i) => {
            return {
                src: product.photos[i],
            };
        });
        const categoriesArr = [];
        product.categories.forEach((catValue) => {
            const foundCat = CATEGORIES_CONSTANT.find(
                (c) => c.value === catValue
            );
            if (foundCat) categoriesArr.push(foundCat);
        });
        setPhotoArray([...photos]);
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setSizeArray(product.properties);
        setChosenCategories(categoriesArr);
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
    // Categories
    const [chosenCategories, setChosenCategories] = useState([]);
    const handleCategorySelect = (selectedCat) => {
        const newCats = [...chosenCategories];
        const index = chosenCategories.findIndex(
            (cat) => cat.value === selectedCat.value
        );
        if (index === -1) {
            newCats.push(selectedCat);
        } else {
            newCats.splice(index, 1);
        }
        setChosenCategories(newCats);
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
            categories: chosenCategories,
        };
        try {
            await api.addProduct(postData);
            toastr.success("Product created!");
            history.push("/seller-dashboard/products");
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
            categories: chosenCategories,
        };
        try {
            const data = await api.editProduct(_id, postData);

            toastr.success("Product updated!");
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
            <h1 className="seller-dashboard__title">
                {!_id ? "Add product" : "Edit product"}
            </h1>
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
                    <Categories
                        categories={CATEGORIES_CONSTANT}
                        chosenCategories={chosenCategories}
                        handleCategorySelect={handleCategorySelect}
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
