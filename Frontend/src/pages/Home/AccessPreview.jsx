import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccessPreview = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const MAPS_URL = 'https://www.google.com/maps?q=26.921744744859325,94.75445625678603';

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const left  = section.querySelector('.triangle-left');
    const right = section.querySelector('.triangle-right');

    if (left) {
      left.style.opacity = '0';
      left.style.transform = 'translateX(-30px)';
      left.style.transition = 'opacity 0.9s ease 0s, transform 0.9s ease 0s';
    }
    if (right) {
      right.style.opacity = '0';
      right.style.transform = 'translateX(30px)';
      right.style.transition = 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (left)  { left.style.opacity  = '1'; left.style.transform  = 'translateX(0)'; }
          if (right) { right.style.opacity = '1'; right.style.transform = 'translateX(0)'; }
          observer.unobserve(section);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050505] py-16 md:py-24 px-4 md:px-12 flex justify-center overflow-hidden">
      
      {/* The Rectangle split into two polygons */}
      <div className="relative w-full max-w-7xl h-[900px] md:h-[600px] overflow-hidden rounded-xl border border-white/5 shadow-2xl group">
        
        {/* MEMBERSHIPS: Top on Mobile, Left on Desktop */}
        <div 
          className="triangle-left absolute inset-0 bg-[#0B0B13] hover:bg-[#11111a] transition-colors duration-700 max-md:[clip-path:polygon(0_0,100%_0,100%_52%,0_48%)] md:[clip-path:polygon(0_0,65%_0,35%_100%,0_100%)]"
        >
          {/* Content Wrapper */}
          <div className="absolute top-[25%] md:top-1/2 -translate-y-1/2 left-0 w-full p-6 md:p-16 text-left max-w-lg z-10">
            <span className="font-display text-[var(--color-brand-smooth)] text-xs md:text-base uppercase tracking-widest font-bold mb-4 md:mb-6 block">01 / Memberships</span>
            <h3 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-none">
              Join The <br/>Elite
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="text-white font-display font-bold text-2xl md:text-3xl tracking-wide mb-1 md:mb-2">₹1,500 <span className="text-xs md:text-sm text-slate-300 font-body tracking-normal">/ MONTH</span></div>
                <p className="font-body text-slate-300 text-xs md:text-base leading-relaxed max-w-xs md:max-w-sm">
                  Unrestricted access to all fitness zones, elite coaching, and group classes.
                </p>
              </div>
              <div>
                <div className="text-white font-display font-bold text-lg md:text-xl tracking-wide mb-1 md:mb-2">₹1,500 <span className="text-xs md:text-sm text-slate-300 font-body tracking-normal">/ ADMISSION</span></div>
                <p className="font-body text-slate-300 text-xs md:text-base leading-relaxed max-w-xs md:max-w-sm">
                  A one-time setup fee for lifetime enrollment in our ecosystem.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/access')}
              className="mt-8 md:mt-12 px-8 py-3 md:px-10 md:py-4 border border-white/20 text-white font-display text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>

        {/* CONTACT & LOCATION: Bottom on Mobile, Right on Desktop */}
        <div 
          className="triangle-right absolute inset-0 bg-white hover:bg-gray-100 transition-colors duration-700 text-black max-md:[clip-path:polygon(0_48%,100%_52%,100%_100%,0_100%)] md:[clip-path:polygon(65%_0,100%_0,100%_100%,35%_100%)]"
        >
           {/* Content Wrapper */}
           <div className="absolute top-[75%] md:top-1/2 -translate-y-1/2 right-0 w-full p-6 md:p-16 flex flex-col items-end text-right max-w-lg z-10">
            <span className="font-display text-slate-500 text-xs md:text-base uppercase tracking-widest font-bold mb-4 md:mb-6 block">02 / Location</span>
            <h3 className="font-display text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6 md:mb-8 leading-none">
              Find Your <br/>Space
            </h3>
            
            <div className="space-y-5 md:space-y-6 flex flex-col items-end">
              <div>
                <div className="text-black font-display font-bold text-lg md:text-xl tracking-wide mb-1 uppercase">Simaluguri, Ramu Gaon</div>
                <p className="font-body text-slate-700 text-xs md:text-base">Assam 785686</p>
              </div>
              <div>
                <div className="text-black font-display font-bold text-lg md:text-xl tracking-wide mb-1 uppercase">Operations</div>
                <p className="font-body text-slate-700 text-xs md:text-base">Mon - Sat: 5:00 AM - 8:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>

            <button
              onClick={() => window.open(MAPS_URL, '_blank', 'noopener,noreferrer')}
              className="mt-8 md:mt-12 px-8 py-3 md:px-10 md:py-4 border border-black/20 text-black font-display text-[10px] md:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              Get Directions
            </button>
          </div>
        </div>

        {/* Diagonal Separator Line Effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg className="w-full h-full hidden md:block" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="35" y1="100" x2="65" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.2" />
          </svg>
          <svg className="w-full h-full block md:hidden" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="48" x2="100" y2="52" stroke="rgba(255,255,255,0.15)" strokeWidth="0.2" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default AccessPreview;
