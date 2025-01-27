import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const FoodData = ({ userName }) => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();


  const getRandomPrice = () => {
    return (Math.random() * 1000).toFixed(2);
  };

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => {
        const mealsWithPrice = data.meals.map(meal => {
          const randomPrice = getRandomPrice();
          return { ...meal, price: randomPrice };
        });
        setFoodData(mealsWithPrice);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (foodItem) => {
    addToCart(foodItem);
  };
  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}
      {!loading && !error&&(
        <>
        <h1 className='h1food'>Food Data</h1>
        <div className="food-list">
          {foodData.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.strMealThumb} alt={food.strMeal} className="food-image" />
              <h3>{food.strMeal}</h3>
              <div>{food.strIngredient1}{' '}{food.strIngredient2}</div>
              <div>{food.strArea}</div>
              <div>
                <button className='logout-btn'>Price ${food.price}</button>
                {userName && <button className="logout-btn" onClick={() => handleAddToCart(food)}>Add to cart</button>}
              </div>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default FoodData;
