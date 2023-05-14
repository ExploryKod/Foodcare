import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../context/categories.context';
import { CategoryPreview } from '../components/category-preview.component';

export const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    console.log('DATA FROM CAT  '+categoriesMap);
    console.log('My DATA cat'+categoriesMap.map( (prod, index) => { 
        console.log(prod)
        return prod;
 }) );
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) =>{
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </Fragment>
    );
};
