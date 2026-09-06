import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const [checkoutStatus, setCheckoutStatus] = useState('idle'); 
  
  // Track selected items using a composite key (id-size)
  const [selectedItemKeys, setSelectedItemKeys] = useState([]);

  // Auto-select all items when the cart loads or changes
  useEffect(() => {
    setSelectedItemKeys(cartItems.map(item => `${item.id}-${item.size}`));
  }, [cartItems.length]);

  const handleToggleSelect = (itemKey) => {
    setSelectedItemKeys(prev => 
      prev.includes(itemKey) 
        ? prev.filter(key => key !== itemKey) 
        : [...prev, itemKey]
    );
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter(item => selectedItemKeys.includes(`${item.id}-${item.size}`))
      .reduce((total, item) => {
        const priceNumber = typeof item.price === 'string' 
          ? parseInt(item.price.replace(/[^\d]/g, '')) 
          : item.price;
        return total + (priceNumber * item.quantity);
      }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 25; 
  const total = subtotal + (subtotal > 0 ? shipping : 0);

  // Count quantities only for selected items
  const selectedItemsCount = cartItems
    .filter(item => selectedItemKeys.includes(`${item.id}-${item.size}`))
    .reduce((total, item) => total + (item.quantity || 1), 0);

  const handleCheckout = () => {
    if (selectedItemKeys.length === 0) return;
    
    setCheckoutStatus('processing');
    
    setTimeout(() => {
      setCheckoutStatus('success');
      // Remove ONLY the purchased items, leaving unselected items in the cart
      cartItems.forEach(item => {
        if (selectedItemKeys.includes(`${item.id}-${item.size}`)) {
          removeFromCart(item.id, item.size);
        }
      });
    }, 2000);
  };

  if (checkoutStatus === 'success') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
        <div className="flex flex-col items-center animate-[fadeIn_1s_ease-in-out]">
          <svg className="w-24 h-24 text-[#C59B27] mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path className="animate-[dash_1s_ease-in-out_forwards]" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider text-center">ORDER CONFIRMED</h1>
          <p className="text-zinc-400 mb-10 text-center max-w-md">
            Thank you for your purchase. Your payment was successful and your atelier items are now being prepared for shipment.
          </p>
          <Link 
            to="/" 
            onClick={() => setCheckoutStatus('idle')}
            className="px-10 py-4 bg-[#C59B27] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans">
      <h1 className="text-3xl font-bold mb-10 tracking-tight">
        YOUR ATELIER BAG ({cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'})
      </h1>
      
      {cartItems.length === 0 ? (
        <div>
          <p className="text-zinc-400 mb-4">Your bag is currently empty.</p>
          <Link to="/" className="text-[#C59B27] underline underline-offset-4 hover:text-white transition duration-300">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3">
            <div className="border-t border-zinc-800">
              {cartItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start justify-between py-8 border-b border-zinc-800 hover:bg-zinc-900/20 transition px-2 rounded-sm">
                  <div className="flex gap-4 md:gap-6 items-center">
                    
                    {/* Item Checkbox */}
                    <input 
                      type="checkbox" 
                      checked={selectedItemKeys.includes(`${item.id}-${item.size}`)}
                      onChange={() => handleToggleSelect(`${item.id}-${item.size}`)}
                      className="w-5 h-5 accent-[#C59B27] cursor-pointer"
                    />

                    <img src={item.img} alt={item.name} className="w-24 h-32 md:w-32 md:h-40 object-cover bg-zinc-900" />
                    
                    <div className="flex flex-col justify-between h-32 md:h-40 py-1">
                      <div>
                        <h3 className="text-lg font-bold uppercase">{item.brand || 'BRAND NAME'}</h3>
                        <p className="text-zinc-400 text-sm mt-1">{item.name}</p>
                        <p className="text-zinc-500 text-sm mt-2">SIZE: {item.size || 'M'}</p>
                      </div>
                      
                      <div className="flex items-center mt-auto">
                        <span className="text-xs text-zinc-500 mr-4">QTY:</span>
                        <div className="flex items-center border border-zinc-700 rounded-sm">
                          <button onClick={() => updateQuantity(item.id, item.size, -1)} className="px-3 py-1 text-zinc-400 hover:bg-zinc-800 hover:text-white">-</button>
                          <span className="px-3 py-1 text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, 1)} className="px-3 py-1 text-zinc-400 hover:bg-zinc-800 hover:text-white">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between h-full text-right mt-4 md:mt-0">
                    <p className="font-bold text-lg">${item.price}</p>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-xs text-zinc-500 underline uppercase mt-auto md:pt-24 hover:text-[#C59B27] transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm sticky top-8">
              <h2 className="text-xl font-bold mb-2 text-[#C59B27]">ORDER SUMMARY</h2>
              <p className="text-sm text-zinc-400 mb-6">
                {selectedItemsCount} {selectedItemsCount === 1 ? 'item' : 'items'} selected
              </p>
              
              <div className="space-y-4 text-sm border-b border-zinc-800 pb-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">SUBTOTAL</span>
                  <span className="font-medium">Ksh{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">SHIPPING</span>
                  <span className="font-medium">Ksh{subtotal > 0 ? shipping : 0}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-lg font-bold mb-8 border-zinc-800 pt-6">
                <span>TOTAL</span>
                <span className="text-[#C59B27]">Ksh{total.toLocaleString()}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                disabled={checkoutStatus === 'processing' || selectedItemKeys.length === 0}
                className={`w-full py-4 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 
                  ${checkoutStatus === 'idle' && selectedItemKeys.length > 0 
                    ? 'bg-[#C59B27] text-black hover:bg-white' 
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}
                `}
              >
                {checkoutStatus === 'idle' ? (
                  'Proceed to Checkout'
                ) : (
                  <>
                    <svg className="animate-spin h-5 w-5 text-[#C59B27]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;