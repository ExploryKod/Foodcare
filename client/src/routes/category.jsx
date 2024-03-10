import { useContext, useState, useEffect, Fragment } from 'react';
import {Link, useParams} from 'react-router-dom';
import { ProductsContext } from '../context/products.context';
import { ProductCard } from '../components/product-card';

export const Category = () => {
    let { category_id } = useParams();
    const { productsData, categoriesData } = useContext(ProductsContext);
    const [products, setProducts] = useState([]);
    const [categoriesFood, setCategoriesFood] = useState([])
    // Faire passer les catégories via un state Manager ou autrement et user de React Query
    console.log('cat.jsx - data categories - is a function ? >> ', categoriesData)
    useEffect( () => {
        setCategoriesFood([categoriesData])
        setProducts(productsData);
    }, [])
    console.log('we are products', products)
    console.log("categories", categoriesData)

    if((!categoriesFood || !categoriesData)) {
        return (
            <div className='category-container product-container'>
                <div style={{ minHeight:'200px', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'10px', color: '#fff', backgroundColor:'#00AD9C', position:'absolute', top:'100px', right:'50%', transform: 'translateX(50%)'}}>
                    <h2> Cette catégorie d'aliment est indisponible </h2>
                    <Link className="button-container els-text-link" to={'/shop'}>Revenir à l'accueil</Link>
                </div>
            </div>
        )
    }

    return(
        <div className='category-container product-container'>
            {categoriesFood.filter((food_category) => food_category.id === parseInt(category_id)).map((food_category) => (
                <h2 key={food_category.id} className='category-title'>{food_category.category_name.toUpperCase()}</h2>
            ))}
        </div>)

    //
    //
    //
    // <div className='category-container product-container'>
    //                 {(!products || !products.length) ? (
    //                 <p className="category-text">Il n'y a pas de produits à vendre pour le moment.</p>)
    //                     :
    //                 (
    //                     products.filter(product => product.category_id === parseInt(category_id)).map((product) => (
    //                         <ProductCard key={product.id} product={product} category_food_id={product.category_id} />
    //                 )}
    //             </div>
    //
    // )
}