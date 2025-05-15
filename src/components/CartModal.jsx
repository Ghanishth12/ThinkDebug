import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import React from 'react';

const CartModal = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  if (!isOpen) return null;

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            state.items.map((item) => (
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
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => {
              // Handle checkout
              console.log('Checkout clicked');
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal; 