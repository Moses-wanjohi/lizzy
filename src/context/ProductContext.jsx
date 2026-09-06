import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const DEFAULT_PRODUCTS = [
  {
    id: '1',
    name: "Oversized Wool Trench",
    price: 1250,
    displayPrice: "ksh1,250",
    department: "men",
    category: "Outerwear",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500",
    description: "Architectural wool trench coat."
  },
  {
    id: '2',
    name: "Structured Blazer",
    price: 890,
    displayPrice: "ksh890",
    department: "women",
    category: "Tailoring",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500",
    description: "Tailored structured blazer."
  }
];

export const ProductProvider = ({ children }) => {
  // Load initial state from browser storage if available
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('lizzy_products');
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('lizzy_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    const formattedItem = {
      ...newProduct,
      id: crypto.randomUUID(),
      displayPrice: newProduct.price.toString().toLowerCase().startsWith('ksh')
        ? newProduct.price
        : `ksh${newProduct.price}`,
      price: parseFloat(newProduct.price.toString().replace(/[^0-9.]/g, '')) || 0,
    };

    // Prepend the new garment to appear first in New Arrivals
    setProducts(prev => [formattedItem, ...prev]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};