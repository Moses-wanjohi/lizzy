import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  const [activeTab, setActiveTab] = useState('women');
  const { addToCart } = useCart();

  
  const products = [
    
    { name: "Structured Blazer", price: "ksh890", category: "Tailoring", department: "women", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
    { name: "Silk Slip Dress", price: "ksh1,100", category: "Dresses", department: "women", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=500" },
    { name: "Leather Atelier Tote", price: "ksh650", category: "Accessories", department: "women", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
    { name: "Sculptural Heel", price: "ksh480", category: "Footwear", department: "women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500" },
    
    { name: "Oversized Wool Trench", price: "ksh1,250", category: "Outerwear", department: "men", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500" },
    { name: "Minimalist Derby Shoes", price: "ksh520", category: "Footwear", department: "men", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500" },
    { name: "Tailored Trousers", price: "ksh340", category: "Trousers", department: "men", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500" },
    { name: "Cashmere Turtleneck", price: "ksh450", category: "Knitwear", department: "men", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500" },
    
    { name: "Mini Cotton Chinos", price: "ksh180", category: "Trousers", department: "children", img: "https://images.unsplash.com/photo-1519238398263-548777176465?auto=format&fit=crop&q=80&w=500" },
    { name: "Knit Cardigan", price: "ksh220", category: "Knitwear", department: "children", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=500" },
    { name: "Classic Sneakers", price: "ksh150", category: "Footwear", department: "children", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=500" },
    { name: "Denim Jacket", price: "ksh290", category: "Outerwear", department: "children", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=500" },
  ];

  const filteredProducts = products.filter(item => item.department === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
    
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] border-b border-zinc-800">
        <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-16 border-r border-zinc-800 bg-zinc-950/50">
          <div className="space-y-6 max-w-xl my-auto">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em]">Spring / Summer '26</span>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-white tracking-tight leading-tight">
              RE-DRAFTING <br />
              <span className="text-[#D4AF37] italic">THE CODES</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              An architectural approach to high fashion. Discover handcrafted tailoring, bold silhouettes, and timeless luxury garments for the whole family.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300 inline-block text-center">
                Browse Shop
              </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative bg-zinc-900 min-h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000" 
            alt="Editorial Fashion" 
            className="w-full h-full object-cover object-center grayscale contrast-125 hover:scale-105 transition duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 border-b border-zinc-800">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Collections</span>
          <h3 className="text-3xl font-serif text-white mt-1">Shop by Department</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Women", link: "/shop/women", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" },
            { title: "Men", link: "/shop/men", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800" },
            { title: "Children", link: "/shop/children", img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=800" }
          ].map((cat, idx) => (
            <Link to={cat.link} key={idx} className="group relative aspect-[4/5] bg-zinc-900 overflow-hidden block">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale " />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-transparent transition duration-500">
                <h4 className="text-3xl font-serif text-white tracking-wide">{cat.title}</h4>
                <span className="mt-4 border-b border-[#D4AF37] text-xs uppercase tracking-widest text-[#D4AF37] pb-1 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-6 md:space-y-0">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Curated Selection</span>
            <h3 className="text-3xl font-serif text-white mt-1">New Arrivals</h3>
          </div>
          
          
          <div className="flex space-x-8 border-b border-zinc-800 w-full md:w-auto">
            {['women', 'men', 'children'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs uppercase tracking-widest transition-colors duration-300 relative ${
                  activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[#D4AF37]"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item, idx) => (
            <div key={idx} className="group cursor-pointer animate-fade-in">
              <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden mb-4 group-hover:border-[#D4AF37]/40 transition">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500" />
                <button
                onClick={() => addToCart(item)}
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
      </section>

    
      <section className="p-8 md:p-16 m-6 md:m-12 border border-[#D4AF37]/30 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif text-white">
              COMMITTED TO GENUINE LUXURY & <br />
              <span className="text-[#D4AF37] italic">SUSTAINABLE CIRCULARITY</span>
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Every garment on our platform undergoes explicit digital archiving and authentication. We ensure transparent craftsmanship and ethical sourcing across all collections.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5"></div>
              <div>
                <h5 className="text-xs uppercase tracking-wider text-white font-semibold">100% Verified Authenticity</h5>
                <p className="text-xs text-zinc-500">Inspected by industry specialists prior to shipment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5"></div>
              <div>
                <h5 className="text-xs uppercase tracking-wider text-white font-semibold">Worldwide White-Glove Logistics</h5>
                <p className="text-xs text-zinc-500">Fully insured Express delivery directly to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;