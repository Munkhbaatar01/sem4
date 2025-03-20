import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">Home</h1>
      <p className="text-lg text-center mb-6">Welcome to our website! Explore our latest products and offers.</p>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">We offer high-quality products to meet your needs. Browse our collection today!</p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>24/7 Customer Support</li>
          <li>Fast and Reliable Shipping</li>
          <li>Best Price Guarantee</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;