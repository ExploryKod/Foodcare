import { useState, useEffect, Fragment } from 'react';
import { CategoryPreview } from '../components/category-preview.component';

const categoriesFood = [
    { id: 1, title: "Protéines", route: 'shop/1' },

    { id: 2, title: "Légumes", route: 'shop/2' },

    { id: 3, title: "Fruits", route:'shop/3' },

    { id: 4, title: "Epices", route:'shop/4' },

    { id: 5, title: "Féculents", route: 'shop/5' },

    { id: 6, title: "Boissons", route: 'shop/6' },

    { id: 7, title: "Nos recettes", route: 'shop/7' },
  ];

export const CategoriesPreview = () => {
    const [categories, setCategories] = useState(categoriesFood);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/category_food`);
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data)
                } else {
                    console.error('Error fetching categories of food:', response.status);
                }
            } catch (error) {
                console.error('Error fetching categories of food:', error);
            }
        };

        fetchAllCategories();
    }, []);

    console.log('categories from categoryPreview parent', categories)
    return (
        <>
            {categories.map((category_food) =>{
                return (
                    <CategoryPreview key={category_food.id}
                                        title={category_food.category_name}
                                        category_food_id={category_food.id}
                                        category={category_food.category_name} />
                )
            })}
        </>
    );
};
