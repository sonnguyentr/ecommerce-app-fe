import React from "react";
import './Modal.scss'

const Modal = ({ handleClose, show, children }) => {
    return show ? (
        <div onClick={handleClose} className="modal__container">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modal__content"
            >
                <button
                    className="modal__close-button"
                    type="button"
                    onClick={handleClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    ) : null;
};
export default Modal;
