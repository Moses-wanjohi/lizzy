import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerDashboardPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: 'Tailoring',
    department: 'women',
    img: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // or update your global Context/Redux state here so it renders on the HomePage.
    console.log('New Product Listed:', productData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setProductData({ name: '', price: '', category: 'Tailoring', department: 'women', img: '', description: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col pt-12 px-6 md:px-12">
      
      <div className="max-w-7xl mx-auto w-full mb-8 flex justify-between items-end border-b border-zinc-800 pb-6">
        <div>
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em]">Seller Portal</span>
          <h1 className="text-4xl font-serif font-light text-white mt-2">List a Garment</h1>
        </div>
        <Link to="/" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-[#D4AF37] transition pb-2">
          ← Back to Store
        </Link>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
        
        
        <div className="lg:col-span-7 bg-zinc-950/50 p-8 border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Garment Name</label>
                <input type="text" name="name" value={productData.name} onChange={handleChange} required placeholder="e.g. Structured Blazer"
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Price (KSH)</label>
                <input type="text" name="price" value={productData.price} onChange={handleChange} required placeholder="e.g. ksh890"
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Department</label>
                <select name="department" value={productData.department} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors cursor-pointer appearance-none">
                  <option value="women" className="bg-zinc-900">Women</option>
                  <option value="men" className="bg-zinc-900">Men</option>
                  <option value="children" className="bg-zinc-900">Children</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 block">Category</label>
                <select name="category" value={productData.category} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors cursor-pointer appearance-none">
                  <option value="Tailoring" className="bg-zinc-900">Tailoring</option>
                  <option value="Outerwear" className="bg-zinc-900">Outerwear</option>
                  <option value="Dresses" className="bg-zinc-900">Dresses</option>
                  <option value="Knitwear" className="bg-zinc-900">Knitwear</option>
                  <option value="Trousers" className="bg-zinc-900">Trousers</option>
                  <option value="Footwear" className="bg-zinc-900">Footwear</option>
                  <option value="Accessories" className="bg-zinc-900">Accessories</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 block">Image URL</label>
              <input type="url" name="img" value={productData.img} onChange={handleChange} required placeholder="https://images.unsplash.com/..."
                className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 block">Description / Condition</label>
              <textarea name="description" value={productData.description} onChange={handleChange} required rows="3" placeholder="Describe the fabric, condition, and origin..."
                className="w-full bg-transparent border-b border-zinc-700 pb-2 text-white text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-zinc-700 resize-none"></textarea>
            </div>

            <button type="submit" disabled={isSubmitted} className={`w-full py-4 font-semibold text-xs uppercase tracking-widest transition duration-300 ${isSubmitted ? 'bg-green-800 text-white cursor-default' : 'bg-[#D4AF37] text-black hover:bg-white'}`}>
              {isSubmitted ? 'Listing Published ✓' : 'Publish Listing'}
            </button>
          </form>
        </div>

        
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 block">Storefront Preview</span>
          
          <div className="group cursor-default w-full max-w-sm mx-auto">
            <div className="relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden mb-4">
              {productData.img ? (
                <img src={productData.img} alt="Preview" className="w-full h-full object-cover opacity-90 transition duration-500" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm font-serif">Image Preview</div>
              )}
              <button className="absolute bottom-4 left-4 right-4 py-3 bg-black/80 backdrop-blur text-white text-xs uppercase tracking-widest opacity-50 cursor-not-allowed">
                Quick Add
              </button>
            </div>
            <p className="text-xs text-[#D4AF37] uppercase tracking-wider mb-1">
              {productData.category || 'Category'}
            </p>
            <h4 className="text-sm font-medium text-white transition">
              {productData.name || 'Garment Name'}
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              {productData.price || 'ksh000'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SellerDashboardPage;