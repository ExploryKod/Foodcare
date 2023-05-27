import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../context/categories.context';
import { ProductCard } from '../components/product-card';
import NotFoundPage from './notFoundPage';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import '../styles/category.scss';

export const Category = () => {
    let { category } = useParams();
    const { categoriesData } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesData);
  
    let categories = ['proteines', 'legumes','epices','recettes','boissons','feculents','nosrecettes']
    useEffect( () => {
        setProducts(categoriesData);
    }, [category, categoriesData])
   
    category = removeAccent(category.toLowerCase());

    let imageUrl = null;
 
    return(
        <Fragment>
            {categories.includes(category.toLowerCase().replace(" ","")) ?
        (<h2 className='category-title'>{category.toUpperCase()}</h2>) : (<NotFoundPage category={category}/>)}
            <div className='category-container product-container'>
                {((!products || !products.length)) ? (
                <p className="category-text">Il n'y a pas de produits à vendre pour le moment.</p>
                ) : (
                    products.filter((product) => product.category === category.toLowerCase()).map((product) => (
                        <ProductCard key={product.id} product={product} category={category} imageUrl={imageUrl} />
                    ))
                )}
            </div>
        </Fragment>
    )
}