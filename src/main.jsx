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



