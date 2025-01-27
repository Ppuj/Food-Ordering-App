import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();
//----------------------createdContext------------------------------
export const useCart = () => useContext(CartContext);
//--------------------usedContext------------------------------------
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    setCartItems((prevItems) => [...prevItems, foodItem]);
  };

  const removeFromCart = (foodId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.idMeal !== foodId));
  };
  const clearCart = () => {
    setCartItems([]); 
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
