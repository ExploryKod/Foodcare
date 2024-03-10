import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../context/cart.context'

import Button from './button';
import CartItem from './cart-item'

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutPage = () => {
        navigate('/checkout')
    };

    return (
        <div className="cart-dropdown-container">
            <div className={`cart-dropdown ${cartItems.length <= 0 ? "no-cart-items" : ""}`}>
            {cartItems.length > 0 ?
                (<>
                <div className='cart-items'>
                    {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
                </div>
                <Button onClick={goToCheckoutPage}>Valider</Button>
                </>
                ): (<p> Vous n'avez pas encore d'articles </p>)}

            </div>
        </div>
    )
}

export default CartDropdown;
