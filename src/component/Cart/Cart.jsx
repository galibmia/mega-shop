import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = (total * 0.15);
    const totalTax = parseFloat(tax.toFixed(2));
    const grandTotal = total + totalShipping + totalTax;

    const clearCart = () => {

        toast.warn("Cart Clear", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        window.localStorage.clear();

        setTimeout(() => {
            window.location.reload();
        }, 1100);

    }

    return (
        <div className='order-summary'>
            <h1 className='title text-3xl font-semibold'>Order Summary</h1>
            <div className='order-summary-text'>
                <p>Total Item Selected: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${totalTax}</p>
                <h4>Grand Total: ${grandTotal} </h4>
            </div>
            <div className='btn-container'>
                <button onClick={clearCart} className='btn-clear btn-text'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <Link to={'/orders'}><button className='btn-review-order btn-text'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
    );
};

export default Cart;