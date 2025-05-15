import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import HomePage from './HomePage';
import Newsletter from './components/NewsLetter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          </Routes>
          <Newsletter />
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App; 