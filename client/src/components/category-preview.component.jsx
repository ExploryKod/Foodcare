import { Link } from 'react-router-dom';
import { ProductCard } from './product-card';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import {useEffect, useState} from "react";

export const CategoryPreview = ({ title, category_food_id, category }) => {
   const [ foodProducts, setFoodProducts ] = useState([])

    useEffect(() => {
        const fetchProductByCategory = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${category}`);
                if (response.ok) {
                    const data = await response.json();
                    setFoodProducts(data)
                } else {
                    console.error('Error fetching product by category:', response.status);
                }
            } catch (error) {
                console.error('Error fetching product by category:', error);
            }
        };

        fetchProductByCategory();
    }, [category]);

    return(
        <div className='category-preview-container'>
            {foodProducts.length ?
            (<>
                <h2>
                <Link  className='title' to={removeAccent(title?.toLowerCase())}>
                    {title?.toUpperCase()}
                </Link>
                </h2>
                <div className='preview shop'>
                    {foodProducts.slice(0, 4).map( ( product ) => (
                        <ProductCard key={product.id} category_food_id={category_food_id} product={product} />
                    ))}
                </div>
            </>) : null}
        </div>
    )
}

export default CategoryPreview;