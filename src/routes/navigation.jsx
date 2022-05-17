import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import "./navigation.scss";

import logo from '../assets/logo.png'; 


const Navigation = () => {

    return(
        <Fragment>

        <div className='navigation'> 
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo'></img>
        </div>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>

        <Outlet/>
   
        </Fragment>
    )
}

export default Navigation;