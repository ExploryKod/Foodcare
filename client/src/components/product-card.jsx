import { useContext, useState, useEffect } from 'react';
import '../styles/product-card.scss';
import Button from './button';
import { CartContext } from '../context/cart.context';

export const ProductCard = ({ product, category }) => {
    let { product_name, product_price } = product;
    const [imageList, setImageList] = useState([]);
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch('http://localhost:5000/images_names');
          if (response.ok) {
            const data = await response.json();
            setImageList(data.images);
          } else {
            console.error('Error fetching images:', response.status);
          }
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchImages();
    }, []);

    let product_nameUrl = product_name.toLowerCase().split(' ').filter(word => word !== '').join('')
    let imageUrl = `http://localhost:5000/uploads/${category}_${product_nameUrl}.jpeg`
 
    return (
        <>
        <div className={`product-card-container card-${product_name}`}>
            <img src={imageUrl} alt={`${product_name}`} />
            <div className='footer'>
                <span className='name'>{product_name}</span>
                <span className='price'>{product_price}€</span>
            </div>
            <Button onClick={addProductToCart}>Choisir</Button>
        </div></>);

}

export default ProductCard;
