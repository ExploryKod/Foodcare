

const CartItem = ({ cartItem }) => {
    const { product_name, product_image_url, product_price, quantity } = cartItem;
    const imageUrl = `${process.env.REACT_APP_API_URL}/uploads/${product_image_url}.jpeg` || `../assets/img/products/${product_image_url}.jpeg`;
    let price = Number(product_price) * quantity;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${product_name}`} />
            <div className='item-details'>
                <span className='name'>{product_name}</span>
                <span className='price'>{price}€</span>
            </div>
        </div>
    );
};

export default CartItem;
