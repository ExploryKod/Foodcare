import {useContext, useEffect, useState} from 'react';
import Button from './button';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import { CartContext } from '../context/cart.context';
import image_7 from "../assets/img/categories/recipes.jpg";

export const ProductCard = ({ product, category_food_id }) => {
    const { category_id, category, product_name, product_price, product_image_url } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    const [imageUrl, setImageUrl] = useState(`../assets/img/products/${product_image_url}.jpeg`)

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_URL}/uploads/${product_image_url}.jpeg`,
            {method: 'HEAD'})
            .then(res => {
                if (res.ok) {
                    setImageUrl(`${process.env.REACT_APP_API_URL}/uploads/${product_image_url}.jpeg`);
                } else {
                    setImageUrl(`${image_7}`);
                }
            })
            .catch(err => console.error('Error:', err))
    },[category])



    return (
        <>
            {category_id === category_food_id &&
                (<div className={`product-card-container card-${product_name}`}>
        <img className="product-card-container__product-img" src={imageUrl} alt={`${removeAccent(product_name)}`} />
            <div className='footer'>
                <span className='product-name'>{product_name}</span>
                {product_price !== '' && product_price !== null ? (<span className='price'>{product_price}€</span>)
                : (<span className='price-wait'>Prix indisponible</span>)}
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div>)}
        </>
    );

}

export default ProductCard;
