import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import HomePage from './HomePage';
import Newsletter from './components/NewsLetter';
import Header from './components/Header';
import Footer from './components/Footer';

// Placeholder components for Cart and Wishlist
const CartPage = () => <div className="max-w-7xl mx-auto px-4 py-8"><h2 className="text-2xl font-bold mb-6">Cart</h2><p>Your cart items will appear here.</p></div>;
const WishlistPage = () => <div className="max-w-7xl mx-auto px-4 py-8"><h2 className="text-2xl font-bold mb-6">Wishlist</h2><p>Your wishlist items will appear here.</p></div>;

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          <Newsletter />
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App; 