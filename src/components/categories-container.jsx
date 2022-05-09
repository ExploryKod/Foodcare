import CategoryItem from "./category-food"; 
import "../styles/categories.scss";
import "../styles/categories-container.scss";

const CategoriesContainer = ({categories}) => {
    return (

        <div className="categories-container">
            {categories.map( ( item ) => (
                <CategoryItem key={item.id} category={item} /> ))};
        </div>
    )
}

export default CategoriesContainer;