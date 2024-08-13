import {React, useState, useEffect } from 'react';
import { useContext } from 'react';
import { CreditCard } from 'lucide-react';
import { CartContext } from '../context/cart.context';
import CartSummary from "./cartSummary";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [totalQuality, setTotalQuality] = useState({points: 0, color: ''});
    useContext(CartContext);

    function sumArray(arr) {
        var total = arr.reduce(function(acc, curr) {
          return acc + curr;
        }, 0);
        return total;
      }

    useEffect(() => {
        let totalPrice = 0;
        let totalNutrition = [];
        cartItems.forEach((cartItem) => {
          const { product_price, quantity, category_id } = cartItem;
          const itemPrice = parseFloat(product_price) * parseFloat(quantity);
          totalNutrition.push(category_id);
          totalPrice += itemPrice;
        });
        setTotal(totalPrice);
        
        const nutriPoints = sumArray([...new Set(totalNutrition)]);
        setTotalQuality({points: nutriPoints, color: nutriPoints < 6 ? 'red' : 'green'});
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
                            <div key={cartItem.id}>
                                 <CartSummary cartItem={cartItem} />
                            </div>
                        ))}
                    </div>
                    <div className="result-container">
                        {totalQuality.points > 3 ?
                        <>
                        <a className="button button--secondary paiement-btn" href="/payment">J'achète <CreditCard /></a>
                        <span className='total'>TOTAL: {`${total}`} €</span>
                        </>
                        : (
                        <p className='quality-total'>
                            Votre indice de nutrition est de <span className="points">{totalQuality.points.toString()}</span> donc vous ne pouvez pas encore prétendre à l'achat du panier.</p>)}
                    </div>
                    <div className="result-container">
                        <p className='quality-total' style={{color: totalQuality.color}}>{totalQuality.points > 6 ? `Indice de nutrition: ${totalQuality.points} points` : "Conseil: Ajoutez d'autres catégories de nourriture"}</p>
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
