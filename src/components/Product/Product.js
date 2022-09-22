import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    return (
        <div className='product'>
            <div className="product-image">
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-details">
                <h4>{props.product.name}</h4>
                <div className="product-details-conatiner">
                    <div className="product-details-left">
                        <p>By : {props.product.seller}</p>
                        <h3>${props.product.price}</h3>
                        <p>only {props.product.stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                    <div className="product-details-right">
                        <h5>Reviews:</h5>
                        <span>{props.product.star}</span>
                        <h3>Features</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;