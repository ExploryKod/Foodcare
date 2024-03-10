import React from 'react';
import { useNavigate } from 'react-router-dom';
import image_1 from "../assets/img/categories/proteines.jpeg";
import image_2 from "../assets/img/categories/vegetables.jpeg";
import image_3 from "../assets/img/categories/fruits.jpg";
import image_4 from "../assets/img/categories/spices.jpeg";
import image_5 from "../assets/img/categories/feculents.jpeg";
import image_6 from "../assets/img/categories/beverage.jpeg";
import image_7 from "../assets/img/categories/recipes.jpg";

const images = [
    { imageUrl: image_1, category_id: 1 },
    { imageUrl: image_2, category_id: 2 },
    { imageUrl: image_3, category_id: 3 },
    { imageUrl: image_4, category_id: 4 },
    { imageUrl: image_5, category_id: 5 },
    { imageUrl: image_6, category_id: 6 },
    { imageUrl: image_7, category_id: 7 },
]
const CategoryItem = ({ category }) => {
  // We need image url so we pass it through props (here ou directly in parenthesis of the function)
  const { category_name, route, id } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className={`main-category-container card-${id}`} onClick={onNavigateHandler}>
    {images
        .filter((image) => image.category_id === id)
        .map((image) => (
        <div
            key={image.category_id}
            className="background-image"
            style={{ backgroundImage: `url(${image.imageUrl})` }}
        />
    ))}

      <div className="body">
        <h2>{category_name}</h2>
        <p>Decouvrir</p>
      </div>
    </div>
  );
};

export default CategoryItem;
