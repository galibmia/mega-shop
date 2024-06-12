import React, { useState } from 'react';
import "./Orders.css"
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { toast } from 'react-toastify';

const Orders = () => {
    const SavedCart = useLoaderData();

    const [cart, setCart] = useState(SavedCart);

    const handelClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
        toast.warn("Cart Clear", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            window.location.reload();
        }, 600);
    }

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);

        toast.warn("Item Deleted", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() => {
            window.location.reload();
        }, 600);
    }

    return (
        <div className='shop-container'>
            <div className="cart-item-container">
                {SavedCart.map(product => {
                    return <Order key={product.id}
                        product={product}
                        handelRemoveFromCart={handelRemoveFromCart}
                    ></Order>
                })}
            </div>
            <div className="order-container">
                <Cart cart={SavedCart} handelClearCart={handelClearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;