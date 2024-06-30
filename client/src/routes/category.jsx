import { useContext, useState, useEffect, Fragment } from 'react';
import {Link, useParams} from 'react-router-dom';
import { ProductsContext } from '../context/products.context';
import { ProductCard } from '../components/product-card';
import CartDropdown from "../components/cart-dropdown";
import {CartContext} from "../context/cart.context";

export const Category = () => {
    let { category_id } = useParams();
    const { isCartOpen } = useContext(CartContext);
    const { productsData, categoriesData } = useContext(ProductsContext);
    // const [products, setProducts] = useState([]);
    // const [categoriesFood, setCategoriesFood] = useState([])
    // Faire passer les catégories via un state Manager ou autrement et user de React Query
    console.log('categories food in cat.jsx >> ', categoriesData)
    console.log('categories products in cat.jsx >> ', productsData)
    // todo: proposer d'envoyer un email si la stock est ok si rupture de stock
    // todo: nouvelle entrée dans le tableau pour les slug vs title (epices > Nos épices)
    return(
        <>
        {categoriesData.length > 0 ?
                (
            <>
            {categoriesData.filter((food_category) => parseInt(food_category.id) === parseInt(category_id))
                .map((food_category) => (
                <div  className="category-title-container" key={food_category.id} >
                    <h2 className='category-title'>{food_category.category_name.toUpperCase()}</h2>
                </div>
            ))}
            {productsData.find(product => product.category_id === parseInt(category_id)) ?
                    (<div className='products-container'>
                {productsData.filter(product => product.category_id === parseInt(category_id)).map((product) =>
                    (<ProductCard key={product.id} product={product} category_food_id={product.category_id} />))}
            </div>): ( <div className='category-container product-container'>
                    <div style={{ minHeight:'200px', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'10px', color: '#fff', backgroundColor:'#00AD9C', position:'absolute', top:'100px', right:'50%', transform: 'translateX(50%)'}}>
                        <h2 className="category-text"> Nous sommes en rupture de stock pour cette catégorie </h2>
                        <Link className="button-container els-text-link" to={'/shop'}>Revenir au magasin</Link>
                    </div>
                </div>)}
            </>
            ) : (
                <div className='category-container category-container--empty product-container'>
                    <div style={{ minHeight:'200px', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'10px', color: '#fff', backgroundColor:'#00AD9C', position:'absolute', top:'100px', right:'50%', transform: 'translateX(50%)'}}>
                        <h2 class="title"> Cette catégorie est indisponible </h2>
                        <Link className="button-container els-text-link" to={'/shop'}>Revenir au magasin</Link>
                    </div>
                </div>
            )}
            {isCartOpen && <CartDropdown />}
        </>)
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