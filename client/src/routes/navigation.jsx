import { Fragment } from 'react';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../components/cart-icon'
import CartDropdown from '../components/cart-dropdown'

import { CartContext } from '../context/cart.context';
import logo from '../img/logo.png';


const Navigation = () => {

    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link to="/"><img src={logo} alt='logo' className='logo'></img></Link>
                </div>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        ACCUEIL
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        BOUTIQUE
                    </Link>
                    <Link className='nav-link' to='/upload'>
                        UPLOADS
                    </Link>
                    <Link className='nav-link' to='/connexion'>
                        S'INSCRIRE
                    </Link>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>

            <Outlet />

        </Fragment>
    )
}

export default Navigation;
