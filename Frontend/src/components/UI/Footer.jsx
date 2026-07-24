import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
          <div className="md:max-w-md">
            <h4 className="font-display text-2xl font-bold uppercase tracking-widest mb-6">Rangpur Gym</h4>
            <p className="font-body text-slate-400 font-light leading-relaxed">
              An elite fitness ecosystem in Simaluguri, Assam. We are dedicated to elevating your performance and transforming your life through discipline and community.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[var(--color-brand-smooth)] mb-8">Connect</h4>
            <ul className="space-y-4 font-body text-sm font-light text-slate-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-mono text-slate-500 tracking-[0.2em] uppercase">
          <span>&copy; {new Date().getFullYear()} Rangpur Gym</span>
          <span>Simaluguri, Assam // Elite Training Facility</span>
        </div>
      </div>
      
      {/* Massive Background Text */}
      <h1 className="font-display text-[18vw] leading-none font-black text-white/[0.02] uppercase tracking-tighter w-full text-center select-none pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        RANGPUR
      </h1>
    </footer>
  );
};

export default Footer;
