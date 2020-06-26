import React from "react";
import "./PhotoUpload.scss";

const PhotoUpload = ({ index, photoUpload, src }) => {
    return (
        <div className="photo-upload">
            <label
                className="photo-upload__img-container"
                htmlFor={"photoUpload-" + index}
            >
                <img
                    className="photo-upload__img"
                    src={src || "/img/photo-upload-placeholder.png"}
                    alt="upload-placeholder"
                />
            </label>
            <input
                onChange={(e) => photoUpload(e, index)}
                className="photo-upload__input"
                type="file"
                accept="image/*"
                id={"photoUpload-" + index}
            />
        </div>
    );
};

export default PhotoUpload;
