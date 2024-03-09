import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import Shopping from "./routes/shopping";
import Upload from "./routes/upload";
import Connexion from './routes/connexion';
import NotFoundPage from './routes/notFoundPage';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='connexion' element={<Connexion />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='shopping' element={<Shopping />} />
        <Route path='upload/*' element={<Upload />} />
        <Route path='*' element={<NotFoundPage category={""} />} />
      </Route>
    </Routes>

  );
};

export default App;
