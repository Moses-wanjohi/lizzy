import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-zinc-800 text-xs text-zinc-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <span className="text-lg font-bold tracking-[0.25em] text-[#D4AF37] block mb-4">LIZZY</span>
          <p className="text-zinc-400 leading-relaxed">
            The premier destination for curated luxury, high fashion, and avant-garde designs.
          </p>
        </div>
        <div>
          <h5 className="text-white uppercase tracking-widest font-semibold mb-4">Navigation</h5>
          <ul className="space-y-2">
            <li><Link to="/shop" className="hover:text-[#D4AF37] cursor-pointer">Shop All</Link></li>
            <li><Link to="/collections" className="hover:text-[#D4AF37] cursor-pointer">Collections</Link></li>
            <li><Link to="/archive" className="hover:text-[#D4AF37] cursor-pointer">Archive</Link></li>
          </ul>
        </div>
        
      </div>
      <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="uppercase tracking-widest">&copy; 2026 LIZZY FASHION STORE. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 uppercase tracking-wider">
          <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;