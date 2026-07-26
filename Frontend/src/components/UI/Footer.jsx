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
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[var(--color-brand-smooth)] mb-8">
              Developer Connect
            </h4>
            <ul className="space-y-4 font-body text-sm font-light text-slate-400 uppercase tracking-widest">
              <li>
                <a
                  href="https://github.com/AshisChetia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 group-hover:text-[var(--color-brand-smooth)] transition-colors duration-300 shrink-0">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashis-chetia-a981b1351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 group-hover:text-[var(--color-brand-smooth)] transition-colors duration-300 shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_ashischetia_?igsh=MW1nZWFvczM1cXZvbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 group-hover:text-[var(--color-brand-smooth)] transition-colors duration-300 shrink-0">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://ashischetia-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-[var(--color-brand-smooth)] transition-colors duration-300 shrink-0">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  Portfolio
                </a>
              </li>
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
