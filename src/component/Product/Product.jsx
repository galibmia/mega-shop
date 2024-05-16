import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    return (
        <div className='card'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings}</p>
            </div>
            <button className='card-footer'>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;