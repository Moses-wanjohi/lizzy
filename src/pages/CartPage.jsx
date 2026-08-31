import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const verificationFee = 15;
  const shippingFee = 25;

  
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const numericString = priceStr.toString().replace(/[^0-9.]/g, '');
    return parseFloat(numericString) || 0;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  const total = subtotal + verificationFee + shippingFee;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">
          Your Atelier Bag ({cartItems.length} Items)
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 items-start">
          
          
          <section className="lg:col-span-7">
            {cartItems.length === 0 ? (
              <div className="py-12 border-t border-gray-200">
                <p className="text-gray-500 mb-6">Your bag is currently empty.</p>
                <Link to="/shop" className="text-black font-semibold uppercase tracking-widest text-sm underline hover:text-gray-600 transition">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="border-t border-gray-200 divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex py-6 sm:py-8">
                    <div className="flex-shrink-0 w-24 sm:w-32 h-32 sm:h-40 bg-gray-100 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col justify-between">
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm font-bold uppercase tracking-wide text-black">
                            {item.brand || "Brand Name"}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{item.name}</p>
                          <p className="mt-2 text-sm text-gray-500 uppercase">Size: {item.size || "M"}</p>
                        </div>
                        <p className="text-sm font-medium text-black text-right">
                          ${parsePrice(item.price).toLocaleString()}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-300">
                          <span className="px-3 py-1 text-xs text-gray-500 uppercase tracking-widest border-r border-gray-300">Qty:</span>
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-sm font-medium text-black">
                            {item.quantity || 1}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-black transition underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          
          {cartItems.length > 0 && (
            <section className="lg:col-span-5 mt-16 lg:mt-0 bg-[#F8F7F5] p-6 sm:p-8 rounded-sm">
              <h2 className="text-lg font-bold uppercase tracking-wide text-black mb-6">
                Order Summary
              </h2>

              <dl className="space-y-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
                <div className="flex justify-between">
                  <dt className="uppercase tracking-wide text-xs">Subtotal</dt>
                  <dd className="font-medium text-black">${subtotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="uppercase tracking-wide text-xs">Verification Fee</dt>
                  <dd className="font-medium text-black">${verificationFee.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="uppercase tracking-wide text-xs">Shipping</dt>
                  <dd className="font-medium text-black">${shippingFee.toLocaleString()}</dd>
                </div>
              </dl>

              
              <div className="py-6 border-b border-gray-200">
                <label htmlFor="promo" className="block text-xs font-bold uppercase tracking-wide text-black mb-2">
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="ENTER CODE.."
                    className="flex-1 min-w-0 block w-full px-4 py-3 bg-white border border-gray-300 text-sm focus:border-black focus:ring-black rounded-none outline-none"
                  />
                  <button className="ml-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-6 text-black">
                <dt className="text-base font-bold uppercase tracking-wide">Total</dt>
                <dd className="text-xl font-bold">${total.toLocaleString()}</dd>
              </div>

              <button className="w-full py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition duration-300">
                Proceed to Checkout
              </button>

              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span>Maison Secure Buyer Protection Guaranteed</span>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPage;