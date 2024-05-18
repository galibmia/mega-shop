import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Get the id using for in loop
        for(const id in storedCart){
            // get the product by using id
            const addedProduct = products.find(product => product.id === id )
            // get the quantity using id from product
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity; 
            savedCart.push(addedProduct);
           }
        }
        setCart(savedCart);

    }, [products])
    
    const addToCart= (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;