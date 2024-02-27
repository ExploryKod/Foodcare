import { useContext } from 'react';
import '../styles/product-card.scss';
import Button from './button';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import { CartContext } from '../context/cart.context';
import { Config } from '../config/config';

export const ProductCard = ({ product, category, imageUrl }) => {
    let { product_name, product_price } = product;
  
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    if(category && product_name){
      let product_nameUrl = product_name.toLowerCase().split(' ').filter(word => word !== '').join('')
      imageUrl = `${Config.siteUrl}/uploads/${category}_${product_nameUrl}.jpeg`;
    }

    const standardImage = `${Config.siteUrl}/uploads/generic_food.jpg`

    return (
        <>
        {product_name &&
        <div className={`product-card-container card-${product_name}`}>
        {category ? (<img src={imageUrl} alt={`${removeAccent(product_name)}`} />) : (<img src={standardImage} alt={`${product_name}`} />)}
            <div className='footer'>
                <span className='product-name'>{product_name}</span>
                {product_price !== '' && product_price !== null ? (<span className='price'>{product_price}€</span>)
                : (<span className='price-wait'>Prix indisponible</span>)}
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div>}</>);

}

export default ProductCard;
