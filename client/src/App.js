import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import SignIn from "./routes/sign-in";
import Checkout from "./routes/checkout";
import Shopping from "./routes/shopping";
import Upload from "./routes/upload";
import NotFoundPage from './routes/notFoundPage';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='shopping' element={<Shopping />} />
        <Route path='upload/*' element={<Upload />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>

  );
};

export default App;
