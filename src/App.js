import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Compo from "./routes/compo";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='compo' element={<Compo/>}/>
      </Route>
    </Routes>
   
  );
};

export default App;

