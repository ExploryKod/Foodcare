import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";



const App = () => {

  return (
    <Routes>
        <Route index element={<Home/>}/>
    </Routes>
   
  );
};

export default App;

