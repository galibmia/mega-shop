import { getShoppingCart } from "../../utilities/fakedb";

const cartLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    
    
    const storedCart = getShoppingCart();
    const savedCart = [];

    for( const id in storedCart){
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartLoader;