import { Outlet } from 'react-router-dom';

import imageVeg from "../assets/vegetables.jpeg";
import beverage from "../assets/beverage.jpeg";
import proteines from "../assets/proteines.jpeg";
import spices from "../assets/spices.jpeg";
import feculents from "../assets/feculents.jpeg";

import CategoriesContainer from "../components/categories-container";

const Home = () => {

  return (
    <div>
    <CategoriesContainer/>
    <Outlet/>
    </div>
  );
};

export default Home;
