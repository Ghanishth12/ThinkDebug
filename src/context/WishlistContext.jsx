import { createContext, useContext, useReducer, useEffect } from 'react';
import React from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 