import {useContext} from "react";
import {CartContext} from "../context/cart.context";
import CartItem from "./cart-item";


export const CheckoutItem = ({cartItem}) => {
    const { product_name, product_image_url, product_price, quantity } = cartItem;
    const {  removeItemFromCart } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const removeProductFromCart = () => removeItemFromCart(cartItem);
 
    const imageUrl = `${process.env.REACT_APP_API_URL}/uploads/${product_image_url}.jpeg`;
    const price = parseFloat(product_price) * quantity;
    
    return(
         <div className='row checkout-item-container'>
            <div className='cell image-container'>
                <img src={imageUrl} alt={`${product_name}`} />
            </div>
            <span className='cell name'> {product_name} </span>
            <span className='cell quantity'> {quantity}</span>
            <span className='cell price'>{price}€</span>
            <div onClick={removeProductFromCart} className='remove-button'>&#10005;</div>
         </div>
    )
}

export default CheckoutItem;