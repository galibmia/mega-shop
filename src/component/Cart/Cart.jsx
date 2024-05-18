import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    let total =0;
    let totalShipping = 0;
    

    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total * 0.15);
    const totalTax = parseFloat(tax.toFixed(2));
    const grandTotal = total + totalShipping + totalTax;

    return (
        <div className='order-summary'>
            <div>
            <h3 className='title'>Order Summary</h3>
            <p>Total Item Selected: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${totalTax}</p>
            <h4>Grand Total: ${grandTotal} </h4>
            </div>
            <div className='btn-container'>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <button className='btn-review-order'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;