import React from "react";
import "./Photos.scss";

import PhotoUpload from "./PhotoUpload/PhotoUpload";
const Photos = ({ photoUpload, photoArray }) => {
    return (
        <div className="add-product__row">
            <div className="add-product__label">
                <span className="add-product__title">PHOTOS</span>
            </div>
            <div className="add-product__input-container">
                <div className="row">
                    {photoArray.map(({ src }, i) => (
                        <PhotoUpload
                            key={i}
                            index={i}
                            photoUpload={photoUpload}
                            src={src}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photos;
