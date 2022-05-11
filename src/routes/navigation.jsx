import { Outlet, Link } from 'react-router-dom';
import Logo from '../assets/food.png';
import '../styles/navigation.scss';

const Navigation = () => {

  return(
    <>
      <div className='navigation-bar'>
        <Link className='logo-container' to='/'>
           <img src={Logo} alt="icon" className='logo'/>
        </Link>
        <div className="nav-links-container">
            <Link className='nav-link' to='/compo'>
                Composer un plat
            </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;


// Issue to remember:
// https://github.com/boopathi/react-svg-loader/issues/197
// Issue was: Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('/static/media/food.32e162e8524afc44cec4.png') is not a valid name
// Solved by putting it as a string in src={} - otherwise it is a complicated thing in webpack config json...
