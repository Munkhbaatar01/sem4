import React, { useState, useContext } from 'react';
import { AdminContext } from './adminContext';


const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', image: '', color: '', stock: '' });
  const { addProduct } = useContext(AdminContext);
  const [error, setError] = useState(null);

  const handleAddProduct = () => {
    addProduct(product.name, product.price, product.image, product.color, product.stock)
      .then((newProduct) => {
        console.log('Added product:', newProduct);
        setProduct({ name: '', price: '', image: '', color: '', stock: '' });
      })
      .catch((err) => {
        console.error('Add product error:', err);
        setError(err.message);
      });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        <label className="block text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Price:</label>
        <input
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Image URL:</label>
        <input
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Color:</label>
        <input
          type="text"
          value={product.color}
          onChange={(e) => setProduct({ ...product, color: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Stock:</label>
        <input
          type="text"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleAddProduct}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};


export default AddProduct;