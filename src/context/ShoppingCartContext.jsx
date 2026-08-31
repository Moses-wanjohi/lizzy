import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ShoppingCartContext = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
    
      const priceNumber = parseInt(item.price.replace('ksh', '').replace(',', ''));
      return total + priceNumber;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div>
          <p className="text-zinc-400 mb-4">Your cart is currently empty.</p>
          <Link to="/" className="text-[#D4AF37] hover:text-white transition">← Continue Shopping</Link>
        </div>
      ) : (
        <div className="max-w-4xl border-t border-zinc-800 pt-6">
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-20 h-24 object-cover" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-[#D4AF37] uppercase tracking-wider">{item.category}</p>
                  </div>
                </div>
                <p className="text-white font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex justify-between items-center text-xl">
            <span className="font-serif">Total:</span>
            <span className="text-[#D4AF37]">ksh{calculateTotal().toLocaleString()}</span>
          </div>
          
          <button className="mt-8 w-full py-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

