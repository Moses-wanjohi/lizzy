import React from 'react';
import { useParams } from 'react-router-dom';


const ShopPage = () => {
  const { category } = useParams();
  const products = [
    { name: "Oversized Wool Trench", price: "ksh1,250", category: "Outerwear", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500" },
    { name: "Structured Blazer", price: "ksh890", category: "Tailoring", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
    { name: "Leather Atelier Tote", price: "ksh650", category: "Accessories", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
    { name: "Minimalist Derby Shoes", price: "ksh520", category: "Footwear", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500" },
    { name: "Silk Blend Turtleneck", price: "ksh450", category: "Knitwear", img: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?auto=format&fit=crop&q=80&w=500" },
    { name: "Pleated Trousers", price: "ksh580", category: "Tailoring", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500" },
  ];

  return (
    <div className="min-h-screen pt-12 px-6 md:px-12 mb-24">
      <div className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight">THE CATALOG</h1>
        <p className="text-zinc-400 mt-4 text-sm max-w-xl leading-relaxed">
          Explore the full LIZZY collection. Filtered by seasonal essentials and avant-garde statement pieces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden mb-4 group-hover:border-[#D4AF37]/40 transition">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500" />
              <button
              className="absolute bottom-4 left-4 right-4 py-3 bg-black/80 backdrop-blur text-white text-xs uppercase tracking-widest transition duration-300 hover:bg-[#D4AF37] hover:text-black">
                Quick Add 
              </button>
            </div>
            <p className="text-xs text-[#D4AF37] uppercase tracking-wider mb-1">{item.category}</p>
            <h4 className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition">{item.name}</h4>
            <p className="text-sm text-zinc-400 mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;