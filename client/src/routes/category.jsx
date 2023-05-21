import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../context/categories.context';
import { ProductCard } from '../components/product-card';
import '../styles/category.scss';

export const Category = () => {
    let { category } = useParams();
    const { categoriesData } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesData);
    const noProductsMessage = <p className="category-text">Il n'y a pas de produits à vendre pour le moment.</p>;

    useEffect( () => {
        setProducts(categoriesData);
    }, [category, categoriesData])
  
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    category = removeAccents(category);

    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {!products || !products.length ? (
                    noProductsMessage
                ) : (
                    products.filter((product) => product.category === category.toLowerCase()).map((product) => (
                        <ProductCard key={product.id} product={product} category={category} />
                    ))
                )}
            </div>
        </Fragment>
    )
}