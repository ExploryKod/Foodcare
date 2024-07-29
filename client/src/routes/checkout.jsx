import {React, useState, useEffect } from 'react';
import { useContext } from 'react';
import { CreditCard } from 'lucide-react';
import { CartContext } from '../context/cart.context';
import CartSummary from "./cartSummary";

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
        <section className={"checkout-container"}>
        {(cartItems && cartItems?.length > 0) ? (
            <>
                <article className="table-container">
                    <div className="table">

                            <div className="table-header">
                                <div>Produit</div>
                                <div>Commande</div>
                                <div>Quantité</div>
                                <div>Prix</div>
                                <div>Actions</div>
                            </div>

                        {cartItems && cartItems?.map((cartItem) => (
                            <CartSummary key={cartItem.id} cartItem={cartItem} />
                        ))}
                    </div>
                    <div className="result-container">
                        <a className="button button--secondary paiement-btn" href="/payment">J'achète <CreditCard /></a>
                        <span className='total'>TOTAL: {`${total}`} €</span>
                    </div>
                </article>
               </>

            ): (<article className={"container-center-child container-center-child--column"}>
                <p className="category-text">Il n'y a pas de produits dans votre panier.</p>
                </article>)}
        </section>
    );
};

export default Checkout;
