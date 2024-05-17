import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    const addToCart= (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="order-container">
                <h3>Order Summary</h3>
                <p>Total Item Added: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;