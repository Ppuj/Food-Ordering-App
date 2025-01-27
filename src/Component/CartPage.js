import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [cartWithQuantity, setCartWithQuantity] = useState([]);

  useEffect(() => {
    const updatedCart = cartItems.reduce((acc, item) => {
      const existingItem = acc.find(i => i.idMeal === item.idMeal);
      if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity if the item already exists
      } else {
        acc.push({ ...item, quantity: 1 }); // Add the item with quantity 1
      }
      return acc;
    }, []);
    setCartWithQuantity(updatedCart);
  }, [cartItems]);

  const handleRemoveFromCart = (foodId) => {
    removeFromCart(foodId);
  };

  const calculateTotal = () => {
    return cartWithQuantity.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  function storingDataBeforePlacingOrder() {
    const orderDate = new Date().toLocaleDateString(); 
    const orderTime = new Date().toLocaleTimeString();
    const orderDetails = {
      items: cartWithQuantity,
      totalPrice: calculateTotal(),
      date: `${orderDate}-${orderTime}`
    };
    const userName = localStorage.getItem('Name');
    let orderHistory = JSON.parse(localStorage.getItem(userName + "-orderHistory")) || [];
    orderHistory.push(orderDetails);
    localStorage.setItem(userName + "-orderHistory", JSON.stringify(orderHistory));
  }
  const handlePlaceOrder = () => {
    storingDataBeforePlacingOrder()
    alert('Your order has been placed!');
    clearCart();
    navigate('/home');
  };
  return (
    <div className="homediv">
      <div className='navbarcart'>
        <h2>Food Cart🛒</h2>
        <button className='logout-btn' onClick={()=>navigate('/home')}>Add➕</button>
      </div>
      <div className="food-list">
        {cartWithQuantity.length === 0 ?
          (<div style={{ marginTop: '100px' }}>
            <div style={{ fontSize: 'xxx-large' }}>Your cart is empty 🛒🛒</div>
          </div>
          ) : (cartWithQuantity.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.strMealThumb} alt={food.strMeal} className="food-image" />
              <h3>{food.strMeal}</h3>
              <p>Price: ${food.price}</p>
              <p>Quantity: {food.quantity}</p>
              <p>Total for this item: ${food.price * food.quantity}</p>
              <button className='logout-btn' onClick={() => handleRemoveFromCart(food.idMeal)}>Remove from Cart</button>
            </div>
          )))}
      </div>

      {cartWithQuantity.length !== 0 && <div className="cart-summary">
        <h3>Total Price: ${calculateTotal().toFixed(2)}</h3>
        <button onClick={handlePlaceOrder} className="logout-btn">Place Order</button>
      </div>}
    </div>
  );
};

export default CartPage;
