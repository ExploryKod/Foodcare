import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/products.context';
import { ProductCard } from '../components/product-card';

export const Category = () => {
    let { category_id } = useParams();
    const { productsData, categoriesData } = useContext(ProductsContext);
    const [products, setProducts] = useState(productsData);
    const [categories, setCategories] = useState(categoriesData)
    // Faire passer les catégories via un state Manager ou autrement et user de React Query
    useEffect( () => {
        setCategories(categoriesData)
        setProducts(productsData);
    }, [category_id, categoriesData, categoriesData])
    console.log('we are products', products)
    console.log("categories", categoriesData)
    return(
        <Fragment>
            {categories.filter((food_category) => food_category.id === parseInt(category_id)).map((food_category) => (
                <h2 key={food_category.id} className='category-title'>{food_category.title}</h2>
            ))}
            <div className='category-container product-container'>
                {(!products || !products.length) ? (
                <p className="category-text">Il n'y a pas de produits à vendre pour le moment.</p>
                ) : (
                    products.filter(product => product.category_id === parseInt(category_id)).map((product) => (
                        <ProductCard key={product.id} product={product} category_food_id={product.category_id} />
                    ))
                )}
            </div>
        </Fragment>
    )
}