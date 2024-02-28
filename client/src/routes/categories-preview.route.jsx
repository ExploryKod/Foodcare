import { useState, useEffect, Fragment, useContext } from 'react';
import { CategoryPreview } from '../components/category-preview.component';
import { CategoriesContext } from '../context/categories.context';
import { removeAccent } from '../utils/dataValidation/stringValidation.utils';


const categoriesFood = [
    { id: 1, title: "Protéines", route: 'shop/proteines' },

    { id: 2, title: "Epices", route:'shop/epices' },

    { id: 3, title: "Légumes", route: 'shop/legumes' },

    { id: 4, title: "Féculents", route: 'shop/feculents' },

    { id: 5, title: "Boissons", route: 'shop/boissons' },

    { id: 6, title: "Nos recettes", route: 'shop/recettes' },
  ];

export const CategoriesPreview = () => {
    const [categories, setCategories] = useState(categoriesFood);
    const [productsByCategory, setProductsByCategory] = useState([]);
    let category = 'fruits';

    useEffect(() => {
        const fetchProductByCategory = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${category}`);
            if (response.ok) {
              const data = await response.json();
              setProductsByCategory(data)
            } else {
              console.error('Error fetching product by category:', response.status);
            }
          } catch (error) {
            console.error('Error fetching product by category:', error);
          }
        };
    
        fetchProductByCategory();
      }, [category]);

   

    useEffect( () => {
        setCategories(categoriesFood);
    },[])

    return (
        <Fragment>
            {categories?.map((item) =>{
                return <CategoryPreview key={item.id} title={item.title} categories={categories} products={productsByCategory}/>
            })}
        </Fragment>
    );
};
