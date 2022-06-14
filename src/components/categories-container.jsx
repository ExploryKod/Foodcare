import CategoryItem from "./category-food"; 
import "../styles/categories.scss";
import "../styles/categories-container.scss";

const categories = [
    { id: 1, title: "Légumes", imageUrl: imageVeg, route: 'shop/hats' },

    { id: 2, title: "Protéines", imageUrl: proteines, route:'shop/jackets' },

    { id: 3, title: "Epices et autres", imageUrl: spices, route: 'shop/sneakers' },

    { id: 4, title: "Féculents", imageUrl: feculents, route: 'shop/womens' },

    { id: 5, title: "Boissons", imageUrl: beverage, route: 'shop/mens' },
  ];


const CategoriesContainer = ({categories}) => {
    return (

        <div className="categories-container">
            {categories.map( ( item ) => (
                <CategoryItem key={item.id} category={item} /> ))};
        </div>
    )
}

export default CategoriesContainer;