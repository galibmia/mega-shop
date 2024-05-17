import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    return (
        <div className='card'>
            <img src={img} alt="..." />
            <div className="card-body">
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings}</p>
            </div>
            <button className='cart-btn'>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;