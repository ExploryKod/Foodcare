import '../styles/checkout-item.scss';
import {useContext} from "react";
import {CartContext} from "../context/cart.context";

export const CheckoutItem = ({cartItem}) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const {  removeItemFromCart } = useContext(CartContext);

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> {quantity}</span>
            <span className='price'>{price}€</span>
            <div onClick={removeItemFromCart} className='remove-button'>&#10005;</div>
        </div>
    )

}

export default CheckoutItem;