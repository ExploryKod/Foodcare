import { Routes, Route } from 'react-router-dom';
import { CategoriesPreview }  from './categories-preview.route';
import { Category } from './category'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category_id' element={<Category/>} />
        </Routes>
    );
};

export default Shop;
