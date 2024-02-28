import { Link } from 'react-router-dom';
import { ProductCard } from './product-card';
import '../styles/category-preview.scss';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';

export const CategoryPreview = ({ title, categories, products }) => {

    return(
        <div className='category-preview-container'>
            <h2>
                <Link  className='title' to={removeAccent(title.toLowerCase())}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                <ProductCard product={products} category={categories}/>
            </div>
        </div>
 
    )
}

export default CategoryPreview;