import {useContext, useEffect, useState} from 'react';
import Button from './button';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import { CartContext } from '../context/cart.context';
import CartDropdown from "./cart-dropdown";
// todo: mettre cart dropdown dans un emplacement meilleur
// todo: verifier product image path est ok
export const ProductCard = ({ product, category_food_id }) => {
    const { category_id, category, product_name, product_price, product_image_url } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    const { isCartOpen } = useContext(CartContext);
    const [imageUrl, setImageUrl] = useState('')

    // let product_nameUrl = product_name.toLowerCase().split(' ').filter(word => word !== '').join('')
    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_URL}/uploads/${product_image_url}`,
            {method: 'HEAD'})
            .then(res => {
                if (res.ok) {
                    setImageUrl(`${process.env.REACT_APP_API_URL}/uploads/${product_image_url}`);
                } else {
                    setImageUrl(`${process.env.REACT_APP_API_URL}/uploads/generic_food.jpg`);
                }
            })
            .catch(err => console.log('Error:', err))
    },[category])

    return (
        <>
            {category_id === category_food_id &&
                (<div className={`product-card-container card-${product_name}`}>
        <img src={imageUrl} alt={`${removeAccent(product_name)}`} />
            <div className='footer'>
                <span className='product-name'>{product_name}</span>
                {product_price !== '' && product_price !== null ? (<span className='price'>{product_price}€</span>)
                : (<span className='price-wait'>Prix indisponible</span>)}
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div>)}
            {isCartOpen && <CartDropdown />}
        </>
    );

}

export default ProductCard;
