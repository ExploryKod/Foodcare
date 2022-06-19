import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import SignIn from "./routes/sign-in";
import Checkout from "./routes/checkout";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>

  );
};

export default App;

