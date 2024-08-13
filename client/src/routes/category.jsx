import { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import { ProductsContext } from '../context/products.context';
import { ProductCard } from '../components/product-card';


export const Category = () => {
    let { category_id } = useParams();
    const { productsData, categoriesData } = useContext(ProductsContext);
    console.log(category_id)
    console.log('product data', productsData)

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
            {productsData && productsData.length > 0 ?
                    (<div className='products-container'>
                {productsData.filter(product => product.category_id === parseInt(category_id)).map((product) =>
                    (<ProductCard key={product.id} product={product} category_food_id={product.category_id} />))}
            </div>): ( <div className='category-container product-container'>
                    <div style={{ minHeight:'200px', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'10px', color: '#fff', backgroundColor:'#00AD9C', position:'absolute', top:'100px', right:'50%', transform: 'translateX(50%)'}}>
                        <h2 className="category-text"> Nous sommes en rupture de stock pour cette catégorie </h2>
                        <Link className="els-text-link button-container" to={'/shop'}>Revenir au magasin</Link>
                    </div>
                </div>)}
            </>
            ) : (
                <div className='category-container category-container--empty product-container'>
                    <div style={{ minHeight:'200px', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'10px', color: '#fff', backgroundColor:'#00AD9C', position:'absolute', top:'100px', right:'50%', transform: 'translateX(50%)'}}>
                        <h2 className="title"> Cette catégorie est indisponible </h2>
                        <Link className="els-text-link button-container" to={'/shop'}>Revenir au magasin</Link>
                    </div>
                </div>
            )}
        </>)
    
}