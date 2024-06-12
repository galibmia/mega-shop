import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCreditCard, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';

const Cart = ({ cart, handelClearCart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total += product.price * product.quantity;
        totalShipping += product.shipping * product.quantity;
        quantity += product.quantity;
    }

    const tax = (total * 0.15).toFixed(2);
    const grandTotal = (total + totalShipping + parseFloat(tax)).toFixed(2);

    const location = useLocation();

    return (
        <div className='order-summary'>
            <h1 className='title'>Order Summary</h1>
            <div className='order-summary-text'>
                <p>Total Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
            <div className='btn-container'>
                {location.pathname === '/orders' && (
                    <>
                        <button onClick={handelClearCart} className='btn-clear'>
                            Clear Cart <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <Link to='/checkout'>
                            <button className='btn-review-order'>
                                Proceed To Checkout <FontAwesomeIcon icon={faCreditCard} />
                            </button>
                        </Link>
                    </>
                )}
                {location.pathname !== '/orders' && (
                    <Link to='/orders'>
                        <button className='btn-review-order'>
                            Review Order <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Cart;
