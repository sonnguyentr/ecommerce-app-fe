import React from "react";
import "./ProductItem.scss";
import { useHistory} from "react-router-dom"

const ProductItem = (props) => {
    const history = useHistory();
    return (
        <tr className="product-item">
            <td>
                <div className="product-item__title-container">
                    <img
                        className="product-item__img"
                        src={props.img}
                        alt={props.title}
                    />
                    <div>
                        <div className="product-item__title">{props.title}</div>
                        <div className="product-item__category">{props.categories.toString()}</div>
                    </div>
                </div>
            </td>
            <td>{`0 / ${props.quantity}`}</td>
            <td>{props.createdAt && props.createdAt.substr(0, 10)}</td>
            <td>{`{profit}`}</td>
            <td className="product-item__action">
                <span>Action <i className="fas fa-chevron-down"></i></span>
                <ul className="list-actions">
                    <li onClick={() => {history.push(`/seller-dashboard/products/${props._id}`)}}>
                        <i className="fas fa-pen text--greyish-two mr-3"></i>
                        Edit
                    </li>
                    <li onClick={() => {props.handleRemoveProduct(props)}}>
                        <i className="fas fa-trash text--greyish-two mr-3"></i>
                        Remove
                    </li>
                </ul>
            </td>
        </tr>
    );
};

export default ProductItem;
