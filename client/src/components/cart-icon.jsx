import { useContext } from 'react';
import { ReactComponent as BasketIcon } from '../img/categories/shopping-bag.svg';
import { CartContext } from '../context/cart.context';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <BasketIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );

}

export default CartIcon;
