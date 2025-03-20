import React, { createContext, useEffect, useState } from 'react';

export const ProductListContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching products from API...');
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => {
        console.log('API Response:', data);
        if (Array.isArray(data)) {
          setProducts(data); // Directly set the array of products
        } else {
          throw new Error('Invalid product data format');
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductListContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductListContext.Provider>
  );
};