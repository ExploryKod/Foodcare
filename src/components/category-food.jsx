import "../styles/categories.scss";

const CategoryItem = ({ category }) => {
  // We need image url so we pass it through props (here ou directly in parenthesis of the function)
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category">
        <h2>{title}</h2>
        <p>Decouvrir</p>
      </div>
    </div>
  );
};

export default CategoryItem;
