import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from './context/categories.context'
import { CartProvider } from './context/cart.context';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CategoriesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoriesProvider>
  </BrowserRouter>

);

reportWebVitals();