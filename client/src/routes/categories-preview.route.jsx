import { useState, useEffect, Fragment } from 'react';
import { CategoryPreview } from '../components/category-preview.component';

const CATEGORIES = [

    { id: 1, category_name: "Protéines", route: 'shop/1' },

    { id: 2, category_name: "Légumes", route: 'shop/2' },

    { id: 3, category_name: "Fruits", route:'shop/3' },

    { id: 4, category_name: "Epices", route:'shop/4' },

    { id: 5, category_name: "Féculents", route: 'shop/5' },

    { id: 6, category_name: "Boissons", route: 'shop/6' },

    { id: 7, category_name: "Nos recettes", route: 'shop/7' },
  ];

export const CategoriesPreview = () => {
    const [categories, setCategories] = useState(CATEGORIES);
  
    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/category_food`);
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data)
                } else {
                    console.error('Error fetching categories of food:', response.status);
                    setCategories([]);
                }
            } catch (error) {
                console.error('Error fetching categories of food:', error);
                setCategories([]);
            }
        };

       fetchAllCategories();
    }, []);
 
    return (  
        <div  className="category-food-wrapper">
            {categories.map((category_food) =>{
                return (

                    <CategoryPreview 
                    key={category_food.id}
                    title={category_food.category_name}
                    category_food_id={category_food.id}
                    category={category_food.category_name} />
                )
            })}
        </div>) 
        
};
