import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import WishlistModal from "./WishlistModal";

const Header = ({ searchQuery, setSearchQuery }) => {
    const { state: cartState } = useCart();
    const { state: wishlistState } = useWishlist();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
            <Link to="/" className="text-2xl font-bold text-green-600 flex items-center gap-2">
              <img src="/logo.png" alt="logo" className="h-8 w-20 mx-4" />
            </Link>
          </div>
          {/* Search Bar */}
          <form className="flex-1 flex justify-center w-full md:w-auto" onSubmit={e => e.preventDefault()}>
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-300 py-2 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 shadow-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
            </div>
          </form>
          <div className="flex items-center gap-6 w-full md:w-auto justify-end">
            <nav className="flex gap-4 text-gray-700 font-medium">
              <button 
                onClick={() => setIsWishlistOpen(true)}
                className="hover:text-blue-600 relative"
              >
                Wishlist
                {wishlistState.items.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistState.items.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="hover:text-blue-600 relative"
              >
                Cart
                {cartState.items.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartState.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </nav>
            {/* User dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                Tim
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      </header>
    );
  };

export default Header;  