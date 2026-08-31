import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      
      <section className="relative min-h-[60vh] flex items-center justify-center border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Fashion Concept" 
            className="w-full h-full object-cover grayscale opacity-30 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-3xl px-6 mt-16">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em]">Our Manifesto</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white tracking-tight leading-tight">
            PRESERVING THE <br />
            <span className="text-[#D4AF37] italic">ART OF GARMENT</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            We are a digital destination for architectural fashion and archival pieces. Bridging the gap between the runway and the collector.
          </p>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-zinc-800">
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">The Vision</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">Beyond Seasonal Trends</h2>
          </div>
          <div className="space-y-6 text-sm text-zinc-400 leading-relaxed text-justify">
            <p>
              Founded on the principle that true luxury transcends the traditional fashion calendar, our platform was created to archive, celebrate, and distribute garments that demonstrate exceptional craftsmanship and timeless silhouette.
            </p>
            <p>
              We view clothing not as disposable commodities, but as wearable architecture. By partnering with global boutiques, independent ateliers, and private collectors, we curate a selection of fashion that speaks to the discerning individual who values structure, fabric, and history over fleeting hype.
            </p>
          </div>
          <div className="pt-4">
            <Link to="/shop" className="text-xs uppercase tracking-widest text-white hover:text-[#D4AF37] border-b border-zinc-700 hover:border-[#D4AF37] pb-1 transition">
              Explore The Archive
            </Link>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] bg-zinc-900 border border-zinc-800 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
            alt="Atelier Detail" 
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 hover:scale-105 transition duration-1000"
          />
        </div>
      </section>

      
      <section className="py-24 px-6 md:px-12 bg-zinc-950/50">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em]">Foundation</span>
          <h2 className="text-3xl font-serif text-white mt-2">Our Core Pillars</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          
          <div className="space-y-4 border-t border-[#D4AF37]/30 pt-6">
            <span className="text-4xl font-serif text-zinc-800">01</span>
            <h4 className="text-sm tracking-widest text-white uppercase">Curation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every item is meticulously selected by our editorial team. We filter out the noise to present only garments that possess structural integrity and design significance.
            </p>
          </div>

          
          <div className="space-y-4 border-t border-[#D4AF37]/30 pt-6">
            <span className="text-4xl font-serif text-zinc-800">02</span>
            <h4 className="text-sm tracking-widest text-white uppercase">Authenticity</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Trust is our currency. Our multi-step authentication process, handled by industry veterans, ensures that every seam, tag, and textile is strictly verified.
            </p>
          </div>

          
          <div className="space-y-4 border-t border-[#D4AF37]/30 pt-6">
            <span className="text-4xl font-serif text-zinc-800">03</span>
            <h4 className="text-sm tracking-widest text-white uppercase">Circularity</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We champion the lifespan of luxury goods. By facilitating the consignment and archival preservation of fashion, we actively reduce waste in the luxury sector.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 text-center border-t border-zinc-800 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          JOIN THE <span className="text-[#D4AF37] italic">SYNDICATE</span>
        </h2>
        <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto">
          Whether you are looking to acquire a rare piece or consign your own archives, we invite you to be part of our network.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/sellers" className="px-8 py-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition duration-300">
            Become a Seller
          </Link>
          <Link to="/register" className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold text-xs uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300">
            Create Account
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;