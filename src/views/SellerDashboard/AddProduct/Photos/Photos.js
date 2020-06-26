import React from "react";
import "./Photos.scss";

import PhotoUpload from "./PhotoUpload/PhotoUpload";
const Photos = ({ photoUpload, photoArray }) => {
    return (
        <div className="add-product__row photos">
            <div className="add-product__label">
                <span className="add-product__title">PHOTOS</span>
            </div>
            <div className="add-product__input-container">
                <div className="row mx-0">
                    {photoArray.map(({ src }, i) => (
                        <PhotoUpload
                            key={i}
                            index={i}
                            photoUpload={photoUpload}
                            src={src}
                        />
                    ))}
                </div>
                <span className="photos__note">
                    You can add up to 8 photos. The 1st photo will be set as
                    cover (main photo).
                </span>
            </div>
        </div>
    );
};

export default Photos;
