import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '' 
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
    navigate('/')

    
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="w-full max-w-lg p-8 md:p-12 border border-zinc-800 bg-zinc-950/50 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-white tracking-wide">CLIENT REGISTRY</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mt-3">Join The Collective</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

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

          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Already a member?{' '}
          <Link to="/login" className="text-white hover:text-[#D4AF37] uppercase tracking-wider border-b border-zinc-700 hover:border-[#D4AF37] transition pb-0.5 ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;