import { Outlet } from 'react-router-dom';

import CategoriesContainer from "../components/categories-container";

const Home = () => {

  return (
    <div class="home">
    <CategoriesContainer/>
    <Outlet/>
    </div>
  );
};

export default Home;
