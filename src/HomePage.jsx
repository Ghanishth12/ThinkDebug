import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import ProductSlider from './components/ProductSlider';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

const HomePage = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header, search, sort, and cart button will be handled in App.jsx for routing */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <ProductSlider/>
        </section>
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Special Products For You</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HomePage; 