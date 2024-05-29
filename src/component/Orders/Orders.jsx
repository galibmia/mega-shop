import React from 'react';
import "./Orders.css"
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';

const Orders = () => {
    const carts = useLoaderData();
    console.log(carts)
    return (
        <div className='shop-container'>
            <div className="cart-item-container">
            {carts.map(cart => {
                    return <Order key={cart.id} cart = {cart}></Order>
                    // console.log(cart.id)
                })}
            </div>
            <div className="order-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;