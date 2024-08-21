// CartContext.js es un componente que nos ayuda a que funcione el carrito de compra
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [total, setTotal] = useState(() => {
    const storedTotal = localStorage.getItem('total');
    return storedTotal ? JSON.parse(storedTotal) : 0;
  });

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('total', JSON.stringify(newTotal));
  }, [cartItems]);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCartItems((prevItems) => 
      prevItems.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem('cartItems');
    localStorage.removeItem('total');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

