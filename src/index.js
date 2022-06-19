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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Learning path

// ROUTER
// Browser Router issu de react router se comporte comme un composant
// Nous voulons que toute notre app y ait accés donc il est mis là.
// "we want to connect your app to the browser's URL: import BrowserRouter and render it around your whole app."
