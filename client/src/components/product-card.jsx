import { useContext } from 'react';
import '../styles/product-card.scss';
import Button from './button';
import { CartContext } from '../context/cart.context';

export const ProductCard = ({ product }) => {
    const { product_name, product_price, product_image } = product;
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);
    
    return (
        <div className={`product-card-container card-${product_name}`}>
            <img src='../assets/products/legumes_tomate.jpg' alt={`${product_name}`} />
            <div className='footer'>
                <span className='name'>{product_name}</span>
                <span className='price'>{product_price}€</span>
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div>);

}

export default ProductCard;
