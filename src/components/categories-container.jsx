import CategoryItem from "./category-food"; 
import "../styles/categories.scss";
import "../styles/categories-container.scss";
import imageVeg from "../assets/vegetables.jpeg";
import beverage from "../assets/beverage.jpeg";
import proteines from "../assets/proteines.jpeg";
import spices from "../assets/spices.jpeg";
import feculents from "../assets/feculents.jpeg";
import recipes from "../assets/recipes.jpg";

const categories = [
    { id: 1, title: "Protéines", imageUrl: proteines, route: 'shop/proteines' },

    { id: 2, title: "Epices", imageUrl: spices, route:'shop/epices' },

    { id: 3, title: "Légumes", imageUrl: imageVeg, route: 'shop/légumes' },

    { id: 4, title: "Féculents", imageUrl: feculents, route: 'shop/feculents' },

    { id: 5, title: "Boissons", imageUrl: beverage, route: 'shop/boissons' },

    { id: 6, title: "Nos recettes", imageUrl: recipes, route: 'shop/recettes' },
  ];


const CategoriesContainer = () => {
    return (

        <div className="categories-container">
            {categories.map( ( item ) => (
                <CategoryItem key={item.id} category={item} /> ))};
        </div>
    )
}

export default CategoriesContainer;