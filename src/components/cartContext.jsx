import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
        color: product.color || '',
      },
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity,
      },
    }));
  };

  const updateCartColor = (productId, color) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        color,
      },
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, updateCartColor }}>
      {children}
    </CartContext.Provider>
  );
};