import { Fragment } from 'react';
import { useContext, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../components/cart-icon'
import { CartContext } from '../context/cart.context';
import logo from '../assets/img/logo.png';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CartDropdown from '../components/cart-dropdown';
import Button from '../components/button';
import CartItem from '../components/cart-item'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const { cartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [totalQuality, setTotalQuality] = useState({points: 0, color: ''});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const navigate = useNavigate();
    const goToCheckoutPage = () => {
        navigate('/checkout')
        setOpen(false);
    };

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
                    {/* <Link className='nav-link' to='/upload'>
                        PROPOSITIONS
                    </Link> */}
                    {/* <Link className='nav-link' to='/connexion'>
                        S'INSCRIRE
                    </Link> */}
                    <CartIcon onOpenModal={onOpenModal} />
                </div>
            </div>
            {totalQuality.points > 0 ?
            (<div className="container"> 
                <div className="indice-container">
                    <p className="category-text">Mon indice de repas équilibré: <span class="points"> {totalQuality.points}</span></p>  
                </div>
            </div>): null}

            <Modal open={open} onClose={onCloseModal} center >
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
                
            </Modal>

            <Outlet />

        </Fragment>
    )
}

export default Navigation;
