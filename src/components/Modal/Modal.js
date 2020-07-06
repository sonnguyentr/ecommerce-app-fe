import React from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import { MODAL_CONSTANT } from "../../constant";

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchModalClose: () => dispatch({ type: MODAL_CONSTANT.CLOSE }),
    };
};

const Modal = ({ show, children, dispatchModalClose }) => {
    return show ? (
        <div onClick={dispatchModalClose} className="modal__container">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modal__content"
            >
                <button
                    className="modal__close-button"
                    type="button"
                    onClick={dispatchModalClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    ) : null;
};
export default connect(null, mapDispatchToProps)(Modal);
