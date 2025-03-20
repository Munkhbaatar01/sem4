import React, { useState, useEffect } from 'react';

const Counter = ({ stock, quantity, updateQuantity }) => {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const increment = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      updateQuantity(newCount);
    }
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateQuantity(newCount);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={decrement} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">-</button>
      <h2 className="text-xl font-bold">{count}</h2>
      <button onClick={increment} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">+</button>
    </div>
  );
};

export default Counter;