import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  { id: 1, name: "Oversized Wool Trench", price: "ksh1,250", category: "Outerwear", department: "Men", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500" },
  { id: 2, name: "Structured Blazer", price: "ksh890", category: "Tailoring", department: "Women", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
  { id: 3, name: "Leather Atelier Tote", price: "ksh650", category: "Accessories", department: "Women", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
  { id: 4, name: "Minimalist Derby Shoes", price: "ksh520", category: "Footwear", department: "Men", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500" },
  { id: 5, name: "Silk Crepe Blouse", price: "ksh450", category: "Tailoring", department: "Women", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=500" },
  { id: 6, name: "Cashmere Turtleneck", price: "ksh680", category: "Outerwear", department: "Men", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500" },
  { id: 7, name: "Mini Cotton Chinos", price: "ksh180", category: "Trousers", department: "Children", img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=500" },
  { id: 8, name: "Knit Cardigan", price: "ksh220", category: "Knitwear", department: "Children", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=500" },
];

const Navbar = () => {
  const { totalItemsCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.department.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?department=${encodeURIComponent(searchQuery.trim().toLowerCase())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSelectProduct = (department) => {
    navigate(`/collections?department=${department.toLowerCase()}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md flex justify-between items-center py-5 px-6 md:px-12 border-b border-[#D4AF37]/20 text-white">
        <Link to="/" className="text-2xl font-bold tracking-[0.25em] text-[#D4AF37]">
          LIZZY
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] text-zinc-300">
          <li><Link to="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
          <li><Link to="/collections" className="hover:text-[#D4AF37] transition">Collections</Link></li>
          <li><Link to="/Sellers" className="hover:text-[#D4AF37] cursor-pointer transition">Sellers</Link></li>
          <li><Link to="/about" className="hover:text-[#D4AF37] cursor-pointer transition">About</Link></li>
        </ul>

        <div className="flex items-center space-x-5 text-[#D4AF37]">
          
          <button 
            onClick={() => setIsSearchOpen(true)} 
            aria-label="Search"
            className="hover:text-white transition focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

    
          <Link to="/cart" className="hover:text-white transition relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {totalItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </Link>

          
          <Link to="/login" className="hover:text-white transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
        </div>
      </nav>

      
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-6 md:p-12">
          <div className="flex justify-between items-center max-w-5xl w-full mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Search Collection
            </span>
            <button 
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest"
            >
              Close 
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="max-w-5xl w-full mx-auto border-b border-[#D4AF37]/50 pb-4 mb-8">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trench, blazer, shoes, outerwear..."
              className="w-full bg-transparent text-2xl md:text-4xl font-serif text-white placeholder-zinc-600 focus:outline-none"
            />
          </form>

          <div className="max-w-5xl w-full mx-auto flex-1 overflow-y-auto">
            {searchQuery.trim() !== '' && filteredProducts.length === 0 ? (
              <p className="text-zinc-500 text-sm uppercase tracking-widest">No garments found for "{searchQuery}".</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => handleSelectProduct(product.department)}
                    className="group cursor-pointer bg-zinc-950 border border-zinc-800 p-3 hover:border-[#D4AF37]/50 transition"
                  >
                    <div className="aspect-[3/4] bg-zinc-900 mb-3 overflow-hidden">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider">{product.department} &bull; {product.category}</p>
                    <h5 className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition">{product.name}</h5>
                    <p className="text-xs text-zinc-400 mt-1">{product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;