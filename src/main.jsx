// src/main.jsx (o index.jsx, dependiendo de cómo esté configurado tu proyecto)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Usa `react-dom/client` para React 18+
import App from './App';
import { CartProvider } from './context/CartContext'; // Ajusta la ruta según sea necesario

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);



// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
