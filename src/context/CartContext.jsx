import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  const addToCart = (newItem) => {
    setCartItems(prevItems => {
      const safeItem = {
        ...newItem,
        id: newItem.id || crypto.randomUUID() 
      };

      const existingItemIndex = prevItems.findIndex(
        item => item.id === safeItem.id && item.size === safeItem.size
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...safeItem, quantity: 1 }];
      }
    });

    // Display temporary notification pop-up
    setLastAddedItem(newItem);
    setTimeout(() => {
      setLastAddedItem(null);
    }, 3000);
  };

  const removeFromCart = (id, size) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id && item.size === size) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      totalItemsCount,
      clearCart 
    }}>
      {children}

      {/* Floating Add-to-Cart Toast */}
      {lastAddedItem && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-950 border border-[#D4AF37] text-white p-4 shadow-2xl flex items-center gap-4 transition-all">
          {lastAddedItem.img && (
            <img 
              src={lastAddedItem.img} 
              alt={lastAddedItem.name} 
              className="w-12 h-16 object-cover border border-zinc-800" 
            />
          )}
          <div>
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">Item Added To Bag</p>
            <p className="text-sm font-serif font-light">{lastAddedItem.name}</p>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};