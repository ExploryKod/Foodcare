import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../context/categories.context';
import { ProductCard } from '../components/product-card';
import '../styles/category.scss';

export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const noProductsMessage = <p className="category-text">Il n'y a pas de produits à vendre pour le moment.</p>;

    useEffect( () => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {!products || !products.length ? (
                    noProductsMessage
                ) : (
                    products.filter((product) => product).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </Fragment>
    )
}