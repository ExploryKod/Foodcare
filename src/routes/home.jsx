import imageVeg from "../assets/vegetables.jpeg";
import beverage from "../assets/beverage.jpeg";
import proteines from "../assets/proteines.jpeg";
import spices from "../assets/spices.jpeg";
import feculents from "../assets/feculents.jpeg";

import CategoriesContainer from "../components/categories-container";

const Home = () => {

  const categories = [
    { id: 1, title: "Légumes", imageUrl: imageVeg },

    { id: 2, title: "Protéines", imageUrl: proteines },

    { id: 3, title: "Epices et autres", imageUrl: spices },

    { id: 4, title: "Féculents", imageUrl: feculents },

    { id: 5, title: "Boissons", imageUrl: beverage },
  ];

  return (
    <CategoriesContainer categories={categories} />
  );
};

export default Home;
