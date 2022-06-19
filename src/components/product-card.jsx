import { useContext } from 'react';

import '../styles/product-card.scss';

import Button from './button';
import { CartContext } from '../context/cart.context';

export const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}€</span>
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div>);

}

export default ProductCard;
