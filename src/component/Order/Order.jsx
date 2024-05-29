import React from 'react';
import "./Order.css";
import { TrashIcon } from '@heroicons/react/20/solid'

const Order = ({ cart }) => {
    const { img, name, price, shipping } = cart
    return (
        <div className='orderedItem'>
            <img className='orderedImg' src={img} alt="" />
            <div className='cart-item-info'>
                <div>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
                <TrashIcon className="size-2 text-blue-500 trashIcon" />
            </div>
        </div>
    );
};

export default Order;