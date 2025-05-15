import { XMarkIcon } from '@heroicons/react/24/outline';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import React from 'react';

const WishlistModal = ({ isOpen, onClose }) => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  if (!isOpen) return null;

  const handleRemoveFromWishlist = (productId) => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const handleAddToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
    handleRemoveFromWishlist(item.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Wishlist</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {wishlistState.items.length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty</p>
          ) : (
            wishlistState.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal; 