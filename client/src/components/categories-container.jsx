import CategoryItem from "./category-food";
import {useContext, useEffect, useState} from "react";
import { ProductsContext } from "../context/products.context";

const CATEGORIES = [

    { id: 1, category_name: "Protéines", route: 'shop/1' },

    { id: 2, category_name: "Légumes", route: 'shop/2' },

    { id: 3, category_name: "Fruits", route:'shop/3' },

    { id: 4, category_name: "Epices", route:'shop/4' },

    { id: 5, category_name: "Féculents", route: 'shop/5' },

    { id: 6, category_name: "Boissons", route: 'shop/6' },

    { id: 7, category_name: "Nos recettes", route: 'shop/7' },
  ];


const CategoriesContainer = () => {
    const { productsData, categoriesData } = useContext(ProductsContext);
    const [categories, setCategories] = useState(CATEGORIES)
    console.log('in accueil, categories ', categories)
    // Faire passer les catégories via un state Manager ou autrement et user de React Query
    useEffect( () => {
        setCategories(categories)
    }, [])
    console.log('categories', categories)
    return (
        <>
        {categories.length > 0 ?
                (<div className="categories-container">
            {categories.map( ( item ) => (
                <CategoryItem key={item.id} category={item} /> ))}
        </div>): (<div class="categories-container__no-category"> 
                <h1 class="no-category__title">Aucune catégorie disponible pour le moment </h1>
                <div class="no-category__icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cooking-pot"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
                </div>
            </div>)}
        </>
    )
}

export default CategoriesContainer;