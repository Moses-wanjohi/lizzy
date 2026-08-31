import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SellersPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    password: '',
    category: 'Archive',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Seller Registration Data:', formData);
    navigate('/dashboard')
  };

  return (
  
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        
        <div className="relative flex flex-col justify-between p-8 md:p-16 bg-zinc-900 overflow-hidden border-r border-zinc-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000" 
              alt="Tailoring atelier" 
              className="w-full h-full object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          </div>

          <div className="relative z-10">
            <Link to="/" className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] hover:text-white transition">
              ← Back to Home
            </Link>
          </div>

          <div className="relative z-10 mt-20 lg:mt-0 my-auto space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight leading-tight">
              CURATE. <br />
              CONSIGN. <br />
              <span className="text-[#D4AF37] italic">CULTIVATE.</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Join our exclusive network of global archivists and boutiques. We provide the platform, the authentication, and the discerning clientele for your luxury garments.
            </p>

            <div className="pt-8 space-y-6 border-t border-zinc-800 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-semibold">Global Audience</h5>
                  <p className="text-xs text-zinc-500 mt-1">Reach collectors and fashion enthusiasts worldwide.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2"></div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-white font-semibold">Zero-Friction Logistics</h5>
                  <p className="text-xs text-zinc-500 mt-1">We handle the authentication, shipping, and insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col justify-center p-8 md:p-16 bg-zinc-950/50">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-10">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em]">Partner With Us</span>
              <h2 className="text-3xl font-serif text-white mt-2 mb-2">Create Seller Account</h2>
              <p className="text-sm text-zinc-400">Apply to become a verified seller on our platform.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Brand / Boutique Name</label>
                <input 
                  type="text" 
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                  placeholder="Atelier Studio"
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700"
                />
              </div>

              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="contact@atelier.com"
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700"
                />
              </div>

          
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700"
                />
              </div>

              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Primary Focus</label>
                <div className="relative">
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Archive" className="bg-zinc-900 text-white">Archival / Vintage Luxury</option>
                    <option value="Tailoring" className="bg-zinc-900 text-white">Bespoke / Tailoring</option>
                    <option value="Streetwear" className="bg-zinc-900 text-white">High-End Streetwear</option>
                    <option value="Accessories" className="bg-zinc-900 text-white">Leather Goods & Accessories</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D4AF37]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              
              <div className="flex items-center space-x-3 pt-2">
                <input 
                  type="checkbox" 
                  required
                  className="appearance-none w-4 h-4 border border-zinc-700 bg-transparent checked:bg-[#D4AF37] checked:border-[#D4AF37] cursor-pointer transition rounded-sm"
                />
                <span className="text-xs text-zinc-500">
                  I agree to the <a href="#" className="text-[#D4AF37] hover:underline">Seller Terms & Conditions</a> and <a href="#" className="text-[#D4AF37] hover:underline">Authenticity Policy</a>.
                </span>
              </div>

              
              <button 
                type="submit" 
                 className="w-full py-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300 mt-6"
              >
                Submit Application 
                </button>
              
            </form>
            
            <p className="text-center text-xs text-zinc-500 mt-8">
              Already have a seller account? <a href="#" className="text-white hover:text-[#D4AF37] transition border-b border-zinc-700 hover:border-[#D4AF37] pb-0.5">Sign In</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellersPage;