import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CollectionsPage = () => {
  const { addToCart } = useCart(); 
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');

  // Sync active filter with URL query parameter (e.g., /collections?department=women)
  useEffect(() => {
    const departmentParam = searchParams.get('department');
    if (departmentParam) {
      const formatted = departmentParam.charAt(0).toUpperCase() + departmentParam.slice(1).toLowerCase();
      if (['Women', 'Men', 'Children'].includes(formatted)) {
        setActiveFilter(formatted);
      }
    }
  }, [searchParams]);

  const products = [
    { id: 1, name: "Oversized Wool Trench", price: 1250, displayPrice: "ksh1,250", department: "Men", category: "Outerwear", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Structured Blazer", price: 890, displayPrice: "ksh890", department: "Women", category: "Tailoring", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Leather Atelier Tote", price: 650, displayPrice: "ksh650", department: "Women", category: "Accessories", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Minimalist Derby Shoes", price: 520, displayPrice: "ksh520", department: "Men", category: "Footwear", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Silk Crepe Blouse", price: 450, displayPrice: "ksh450", department: "Women", category: "Tailoring", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Cashmere Turtleneck", price: 680, displayPrice: "ksh680", department: "Men", category: "Outerwear", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500" },
    { id: 7, name: "Mini Cotton Chinos", price: 180, displayPrice: "ksh180", department: "Children", category: "Trousers", img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=500" },
    { id: 8, name: "Knit Cardigan", price: 220, displayPrice: "ksh220", department: "Children", category: "Knitwear", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=500" },
  ];

  const filters = ['All', 'Women', 'Men', 'Children'];
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.department.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      <header className="pt-32 pb-16 px-6 md:px-12 border-b border-zinc-800 bg-zinc-950/30 text-center">
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] block mb-4">
          The Complete Archive
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight mb-6">
          SPRING / SUMMER <span className="italic text-[#D4AF37]">'26</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Explore the full synthesis of architectural tailoring and uncompromised luxury. 
          Every piece is designed with sustainable circularity and timeless intent.
        </p>
      </header>

      {/* Navigation Filter Bar */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800 px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs uppercase tracking-[0.15em] transition duration-300 pb-1 border-b ${
                activeFilter === filter 
                  ? 'text-[#D4AF37] border-[#D4AF37]' 
                  : 'text-zinc-500 border-transparent hover:text-white hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16 px-6 md:px-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-sm uppercase tracking-widest">No garments found in this department.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden mb-4 group-hover:border-[#D4AF37]/40 transition">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover  group-hover:scale-105 transition duration-700" 
                  />
                  
                  <div className="absolute inset-0 flex items-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (addToCart) addToCart(item);
                      }}
                      className="w-full m-4 py-4 bg-black/90 backdrop-blur text-white text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition duration-300"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] mb-1.5">
                      {item.department} &bull; {item.category}
                    </p>
                    <h4 className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition leading-snug">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-400 mt-3">{item.displayPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CollectionsPage;