import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    const addToCart = props.addToCart;
    
    return (
        <div className='card'>
            <div className='card-img'><img src={img} alt="..." /></div>
            <div className="card-body">
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings}</p>
            </div>
            <button onClick={()=> addToCart(props.product)} className='cart-btn'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;