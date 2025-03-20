import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './cartContext';
import { ProductContext } from './ProductContext';
import ColorList from './colorList';
import Counter from './counter';
import Filter from './filter';

const Products = () => {
  const { addToCart, updateCartColor, updateCartQuantity } = useContext(CartContext);
  const { products, loading, error } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetched products:", products);
  }, [products]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 className="text-red-500">Error: {error}</h2>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Filter onFilterChange={(filters) => console.log(filters)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            updateCartColor={updateCartColor} 
            updateCartQuantity={updateCartQuantity} 
          />
        ))}
      </div>
    </div>
  );
};const Product = ({ product, addToCart, updateCartColor, updateCartQuantity }) => {
  const [selectedcolor, setSelectedColor] = useState(
    Array.isArray(product.image) ? product.image[0] : "defaultImage"
  );
  const [quantity, setQuantity] = useState(product.quantity || 1);

  
  const colors = Array.isArray(product.image)
    ? product.image
    : typeof product.image === "string"
    ? product.image.split(",") 
    : [];

  const handleAddToCart = () => {
    addToCart({ ...product, color: selectedcolor, quantity });
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (updateCartColor) updateCartColor(product.id, color);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    if (updateCartQuantity) updateCartQuantity(product.id, newQuantity);
  };

  return (
    <div className="border border-gray-300 p-4 m-4 w-full rounded-lg text-center bg-white shadow-md">
      <img
        src={product.color} 
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <h2 className="font-sans mb-4">Price: ${product.price}</h2>
      <ColorList colors={colors} updateColor={handleColorChange} color={selectedcolor} />
      <Counter stock={product.stock} quantity={quantity} updateQuantity={handleQuantityChange} />
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Products;