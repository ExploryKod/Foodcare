import { Link } from 'react-router-dom';
import { ProductCard } from './product-card';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';
import {useEffect, useState} from "react";

const PRODUCTS = [
    {
      id: "1",
      category_id: "1",
      category: "proteines",
      product_name: "Poulet Bio",
      product_image_url: "proteines_poulet_bio.jpeg",
      product_price: "25.00"
    },
    {
      id: "2",
      category_id: "1",
      category: "proteines",
      product_name: "Tofu",
      product_image_url: "proteines_tofu",
      product_price: "18.00"
    },
    {
      id: "3",
      category_id: "1",
      category: "proteines",
      product_name: "Poisson",
      product_image_url: "proteines_poisson",
      product_price: "35.00"
    },
    {
      id: "4",
      category_id: "1",
      category: "proteines",
      product_name: "Edamam",
      product_image_url: "proteines_edamam",
      product_price: "25.00"
    },
    {
      id: "5",
      category_id: "1",
      category: "proteines",
      product_name: "Lentilles",
      product_image_url: "proteines_lentilles",
      product_price: "18.00"
    },
    {
      id: "6",
      category_id: "1",
      category: "proteines",
      product_name: "Pois Chiches",
      product_image_url: "proteines_pois_chiches",
      product_price: "14.00"
    },
    {
      id: "7",
      category_id: "1",
      category: "proteines",
      product_name: "Viande rouge",
      product_image_url: "proteines_viande_rouge",
      product_price: "18.00"
    },
    {
      id: "8",
      category_id: "1",
      category: "proteines",
      product_name: "Sardine",
      product_image_url: "proteines_sardine",
      product_price: "14.00"
    },
    {
      id: "9",
      category_id: "1",
      category: "proteines",
      product_name: "Green Beans",
      product_image_url: "proteines_green_beans",
      product_price: "16.00"
    },
    {
      id: "10",
      category_id: "2",
      category: "legumes",
      product_name: "chou fleur",
      product_image_url: "legumes_chou_fleur",
      product_price: "8.00"
    },
    {
      id: "11",
      category_id: "2",
      category: "legumes",
      product_name: "Poivron",
      product_image_url: "legumes_poivron",
      product_price: "3.00"
    },
    {
      id: "12",
      category_id: "2",
      category: "legumes",
      product_name: "Tomate",
      product_image_url: "legumes_tomate",
      product_price: "4.00"
    },
    {
      id: "13",
      category_id: "2",
      category: "legumes",
      product_name: "Brocoli",
      product_image_url: "legumes_brocoli",
      product_price: "5.00"
    },
    {
      id: "14",
      category_id: "2",
      category: "legumes",
      product_name: "Carotte",
      product_image_url: "legumes_carotte",
      product_price: "2.00"
    },
    {
      id: "15",
      category_id: "3",
      category: "fruits",
      product_name: "Banane",
      product_image_url: "fruits_banane",
      product_price: "1.00"
    },
    {
      id: "16",
      category_id: "3",
      category: "fruits",
      product_name: "Pomme",
      product_image_url: "fruits_pomme",
      product_price: "2.00"
    },
    {
      id: "17",
      category_id: "3",
      category: "fruits",
      product_name: "Orange",
      product_image_url: "fruits_orange",
      product_price: "1.00"
    },
    {
      id: "18",
      category_id: "3",
      category: "fruits",
      product_name: "Fraise",
      product_image_url: "fruits_fraise",
      product_price: "3.00"
    },
    {
      id: "19",
      category_id: "3",
      category: "fruits",
      product_name: "Mangue",
      product_image_url: "fruits_mangue",
      product_price: "5.00"
    },
    {
      id: "20",
      category_id: "3",
      category: "fruits",
      product_name: "Apple",
      product_image_url: "proteines_apple",
      product_price: "8.00"
    }
  ]


export const CategoryPreview = ({ title, category_food_id, category }) => {

  
   const [ foodProducts, setFoodProducts ] = useState([])
   const [ isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchProductByCategory = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${category}`);
                if (response.ok) {
                    const data = await response.json();
                 
                    setFoodProducts(data)
                } else {
                    console.error('Error fetching product by category:', response.status);
                    setFoodProducts([])
                }
            } catch (error) {
                console.error('Error fetching product by category:', error);
                setFoodProducts([])
            }  finally {
              setIsLoading(false); // Set loading state to false once data is fetched or an error occurs
          }
        };

       fetchProductByCategory();
    }, [category]);

    if(isLoading) {
        return (<div className="category-preview-container__no-category">
           <h1 className="no-category__title">Chargement des produits... </h1>
           <div className="no-category__icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cooking-pot"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
            </div>
           </div>)
    }

    if(PRODUCTS.length <= 0) { 
        return (<div className="category-preview-container__no-category"> 
            <h1 className="no-category__title">Aucune série de produit pour le moment </h1>
            <div className="no-category__icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cooking-pot"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
            </div>
        </div>)
    }

  
    return(
        <>
        {foodProducts.length ?
        (<div className="category-preview-container">
        
                <h2>
                <Link  className='title' to={`/shop/${category_food_id}`}>
                    {title?.toUpperCase()}
                </Link>
                </h2>
                <div className='preview shop'>
                    {foodProducts.slice(0, 4).map( ( product ) => (
                        <ProductCard key={product.id} category_food_id={category_food_id} product={product} />
                    ))}
                </div>
        </div>) :      (<div className="category-preview-container__no-category"> 
            <h1 className="no-category__title">Aucun aliment pour le moment </h1>
            <div className="no-category__icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cooking-pot"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
            </div>
        </div>)}
        </>
    )
}

export default CategoryPreview;