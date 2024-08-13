import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";
import Shopping from "./routes/shopping";
import Upload from "./routes/upload";
import Connexion from './routes/connexion';
import NotFoundPage from './routes/notFoundPage';
import UploadFilesPage from "./routes/uploadFilesPage";
import StripePayment from "./routes/StripePayment";
import PaymentSuccess from "./routes/PaymentSuccess";


const App = () => {

 

  return (
    <Routes>
      <Route path='connexion' element={<Connexion />} />
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='shopping' element={<Shopping />} />
        {/* <Route path='upload/*' element={<Upload />} /> */}
        {/* <Route path='show-uploads' element={<UploadFilesPage />} /> */}
        <Route path="payment" element={<StripePayment />} />
        <Route path="success" element={<PaymentSuccess />} />
        <Route path='*' element={<NotFoundPage category={""} />}  />
      </Route>
    </Routes>
  );
};

export default App;
