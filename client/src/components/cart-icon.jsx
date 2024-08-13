import { useContext } from 'react';
import { ReactComponent as BasketIcon } from '../assets/img/categories/shopping-bag.svg';
import { CartContext } from '../context/cart.context';

const CartIcon = ({onOpenModal}) => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className='cart-icon-container' onClick={onOpenModal}>
            <BasketIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );

}

export default CartIcon;
