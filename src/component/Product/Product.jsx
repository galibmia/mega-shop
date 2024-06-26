import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    const addToCart = props.addToCart;


    return (
        <div className='card'>
            <div className='card-img '><img className='object-cover' src={img} alt="..." /></div>
            <div className="card-body">
                <h4 className='product-name font-semibold'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings} <FontAwesomeIcon icon={faStar} /> </p>
            </div>
            <button onClick={()=> addToCart(props.product)} className='cart-btn'>
                <span className='btn-text'>Add to Cart </span><FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;