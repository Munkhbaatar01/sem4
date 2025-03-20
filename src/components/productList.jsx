import React, { useContext } from "react";
import { ProductListContext } from "./productListContext";

const ProductTable = () => {
  const { products, loading, error } = useContext(ProductListContext);

  if (loading) {
    return <h2 className="text-center text-gray-600">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">Error: {error}</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Product List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 border">Image</th>
              <th className="py-3 px-4 border">Title</th>
              <th className="py-3 px-4 border">Description</th>
              <th className="py-3 px-4 border">Rating</th>
              <th className="py-3 px-4 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border font-bold">{product.title}</td>
                <td className="py-2 px-4 border">{product.description}</td>
                <td className="py-2 px-4 border text-center">
                  <span className="block">Rate: {product.rating.rate}</span>
                  <span className="block">Count: {product.rating.count}</span>
                </td>
                <td className="py-2 px-4 border text-center font-bold text-green-600">
                  ${product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;