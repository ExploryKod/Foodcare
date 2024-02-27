import '../styles/checkout-item.scss';
import {useContext} from "react";
import {CartContext} from "../context/cart.context";
import { Config } from '../config/config';

export const CheckoutItem = ({cartItem}) => {
    const { product_name, product_image_url, product_price, quantity } = cartItem;
    const {  removeItemFromCart } = useContext(CartContext);
    const removeProductFromCart = () => removeItemFromCart(cartItem);
 
    const imageUrl = `${Config.siteUrl}/uploads/${product_image_url}.jpeg`;
    const price = parseFloat(product_price) * quantity;
    
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${product_name}`} />
            </div>
            <span className='name'> {product_name} </span>
            <span className='quantity'> {quantity}</span>
            <span className='price'>{price}€</span>
            <div onClick={removeProductFromCart} className='remove-button'>&#10005;</div>
        </div>
    )

}

export default CheckoutItem;