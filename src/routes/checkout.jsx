import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { CheckoutItem } from '../components/checkout-item';

import '../styles/checkout.scss';
const Checkout = () => {

    const { cartItems, cartTotal, addItemToCart, removeItemToCart } = useContext(CartContext);
    useContext(CartContext);
    return (

        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantité</span>
                </div>
                <div className="header-block">
                    <span>Prix</span>
                </div>
                <div className="header-block">
                    <span>Retirer</span>

                </div>
            </div>

            <div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
            <span className='total'>TOTAL: {cartTotal} €</span>
        </div>
    );
};

export default Checkout;
