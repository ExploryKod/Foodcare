import CategoryItem from "./category-food";
import {useContext, useEffect, useState} from "react";
import { ProductsContext } from "../context/products.context";
import {useParams} from "react-router-dom";

const CategoriesContainer = () => {
    const { productsData, categoriesData } = useContext(ProductsContext);
    const [categories, setCategories] = useState([])
    console.log('in accueil, categories ', categoriesData)
    // Faire passer les catégories via un state Manager ou autrement et user de React Query
    useEffect( () => {
        setCategories(categoriesData)
    }, [])
    console.log('categories', categories)
    return (
        <>
        {categoriesData.length > 0 ?
                (<div className="categories-container">
            {categoriesData.map( ( item ) => (
                <CategoryItem key={item.id} category={item} /> ))}
        </div>): (<div> Aucune catégorie d'aliment pour le moment </div>)}
        </>
    )
}

export default CategoriesContainer;