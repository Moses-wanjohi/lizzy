import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    navigate('/')

    
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="w-full max-w-md p-8 md:p-12 border border-zinc-800 bg-zinc-950/50 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-white tracking-wide">WELCOME BACK</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mt-3">Access Your Account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center space-x-2 text-zinc-400 cursor-pointer hover:text-white transition">
              <input type="checkbox" className="accent-[#D4AF37]" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-[#D4AF37] hover:text-white transition border-b border-transparent hover:border-white">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Don't have an account?{' '}
          <Link to="/register" className="text-white hover:text-[#D4AF37] uppercase tracking-wider border-b border-zinc-700 hover:border-[#D4AF37] transition pb-0.5 ml-1">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;