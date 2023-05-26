import {React, useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { CheckoutItem } from '../components/checkout-item';

import '../styles/checkout.scss';
const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    useContext(CartContext);

    useEffect(() => {
        let totalPrice = 0;
        cartItems.forEach((cartItem) => {
          const { product_price, quantity } = cartItem;
          const itemPrice = parseFloat(product_price) * parseFloat(quantity);
          totalPrice += itemPrice;
        });
        setTotal(totalPrice);
    }, [cartItems]);
  
    

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
            <span className='total'>TOTAL: {`${total}`} €</span>
        </div>
    );
};

export default Checkout;
