import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const OrderHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem('Name');
    const storedOrderHistory = JSON.parse(localStorage.getItem(userName + "-orderHistory")) || [];
    setOrderHistory(storedOrderHistory);
  }, []);

  return (
    <div className="order-history">
      <div className='navbarcart'>
        <h1>Order History</h1>
        <button className='logout-btn' onClick={() => navigate('/home')}>Add➕</button>
      </div>
      {orderHistory.length === 0 ? (
        <div style={{ fontSize: 'xxx-large' }}>You have no previous orders.</div>
      ) : (
        <div className='order-list'>
          {orderHistory.map((order, index) => (
            <div key={index} className="order-item">
              <h3>Order Date: {order.date}</h3>
              <button className='logout-btn'>Total Price: ${order.totalPrice.toFixed(2)}</button>
              <div>
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.strMeal} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
