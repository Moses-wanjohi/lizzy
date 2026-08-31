import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  
  const { cartCount } = useCart();
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md flex justify-between items-center py-5 px-6 md:px-12 border-b border-[#D4AF37]/20">
      <Link to="/" className="text-2xl font-bold tracking-[0.25em] text-[#D4AF37]">
        LIZZY
      </Link>
      
      <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] text-zinc-300">
        <li><Link to="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
        <li><Link to="/collections" className="hover:text-[#D4AF37] transition">Collections</Link></li>
        <li><Link to="/Sellers" className="hover:text-[#D4AF37] cursor-pointer transition">Sellers</Link></li>
        <li><Link to="/about" className="hover:text-[#D4AF37] cursor-pointer transition">About</Link></li>
      </ul>

      <div className="flex space-x-5 text-[#D4AF37]">
        <button className="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        <button className="hover:text-white transition relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
            {cartCount}
          </span>
        </button>
        <Link to="/login" className="hover:text-white transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;