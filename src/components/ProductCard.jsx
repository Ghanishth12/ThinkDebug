import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import React from 'react';

const ProductCard = ({ product }) => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();

  const isInWishlist = wishlistState.items.some(item => item.id === product.id);
  const cartItem = cartState.items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      cartDispatch({ type: 'ADD_TO_CART', payload: product });
    } else if (action === 'decrement') {
      if (quantity === 1) {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
      } else {
        cartDispatch({ type: 'DECREASE_QUANTITY', payload: product.id });
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative group transition-transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-contain p-4 bg-gray-50"
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow group-hover:scale-110 transition-transform"
        >
          {isInWishlist ? (
            <HeartSolidIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartIcon className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
          )}
        </button>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base font-semibold line-clamp-2 min-h-[48px]">{product.title}</h3>
        <div className="text-sm text-gray-500">
          <span className="text-gray-400 mr-1">From</span>
          <span className="text-blue-600 font-bold">${product.price}</span>
        </div>
        {quantity > 0 ? (
          <div className="mt-2 flex bg-orange-500 items-center justify-between rounded-full">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center transition-colors"
            >
              <span className="text-xl font-semibold">-</span>
            </button>
            <span className="text-lg text-white font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center transition-colors"
            >
              <span className="text-xl font-semibold">+</span>
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-2 w-full bg-orange-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            Add to Cart
          </button>
        )}
        {quantity > 0 && (
          <p className="text-center text-sm text-green-600 font-medium mt-1">
            Added to Cart
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard; 