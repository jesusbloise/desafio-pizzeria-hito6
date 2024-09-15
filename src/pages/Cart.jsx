// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; // Importa el hook del contexto de usuario

const Cart = () => {
  const { items, total } = useCart();
  const { token } = useUser(); // Accedemos al token

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      {/* Listado de productos */}
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      
      <h3>Total: {total}</h3>

      {/* Deshabilitar el botón si no hay token */}
      <button disabled={!token} className="btn btn-primary">
        Pagar
      </button>

      {!token && <p>Inicia sesión para continuar con el pago.</p>}
    </div>
  );
};

export default Cart;

