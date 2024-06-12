import React from 'react';
import "./Order.css";
import { TrashIcon } from '@heroicons/react/20/solid'

const Order = ({ product, handelRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;

    return (
        <div className='orderedItem'>
            <img className='orderedImg' src={img} alt="" />
            <div className='cart-item-info'>
                <div>
                    <h4>{name}</h4>
                    <p>Price: <span className='text-order'>${price}</span></p>
                    <p>Order Quantity: <span className='text-order'>{quantity}</span></p>
                </div>
                <button onClick={() => handelRemoveFromCart(id)} className='btn'><TrashIcon className="trashIcon" /></button>
                <button onClick={() => handelRemoveFromCart(id)} className='btn-delete'>Delete</button>
            </div>
        </div>
    );
};

export default Order;