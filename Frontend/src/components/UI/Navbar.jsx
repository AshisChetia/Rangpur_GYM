import React, { useState, useEffect, useRef } from 'react';

// --- Icons ---
const HomeIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const AboutIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const ServicesIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const AccessIcon = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(400); 
  const containerRef = useRef(null);

  // 1. ADD OR REMOVE LINKS HERE
  // The layout will automatically recalculate to fit any number of items.
  const links = [
    { name: 'Home', icon: HomeIcon, target: 'home' },
    { name: 'About', icon: AboutIcon, target: 'about' },
    { name: 'Services', icon: ServicesIcon, target: 'services' },
    { name: 'Access', icon: AccessIcon, target: 'access' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => setWidth(containerRef.current.offsetWidth);
    
    updateWidth(); 
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // --- Adjusted Mathematical Variables for both PC and Mobile (Original Geometry) ---
  const H = 72;             // Total height of the capsule (Original large size)
  const R = 36;             // Border radius (H/2 creates a perfect pill)
  const dipWidth = 52;      // Width of the curve on each side (Widened to perfectly clear the 56px circle)
  const dipDepth = 44;      // Depth of the cutout
  
  // Bezier curve control points strictly engineered to hug the 56px circle without touching it
  const c1X = 34; 
  const c2X = 22; 

  // We must guarantee the cutout curve never hits the rounded corners!
  // The first tab's center (activeX) must be at least R + dipWidth away from the edge.
  const minActiveX = R + dipWidth + 2; // 36 + 52 + 2 = 90px
  
  // Mathematical formula to dynamically calculate the perfect padding for any screen width:
  // safeZonePadding = (2 * links.length * minActiveX - width) / (2 * (links.length - 1))
  let safeZonePadding = (2 * links.length * minActiveX - width) / (2 * (links.length - 1));
  
  // Ensure a minimum padding on very wide screens
  if (safeZonePadding < 32) safeZonePadding = 32;

  const availableWidth = width - (safeZonePadding * 2);
  const tabWidth = availableWidth / links.length;
  
  // Center point of the currently active tab
  const activeX = safeZonePadding + (activeIndex * tabWidth) + (tabWidth / 2);

  // Dynamic SVG Path
  const svgPath = `
    M ${R},0
    L ${activeX - dipWidth},0
    C ${activeX - c1X},0 ${activeX - c2X},${dipDepth} ${activeX},${dipDepth}
    C ${activeX + c2X},${dipDepth} ${activeX + c1X},0 ${activeX + dipWidth},0
    L ${width - R},0
    A ${R},${R} 0 0,1 ${width},${R}
    L ${width},${H - R}
    A ${R},${R} 0 0,1 ${width - R},${H}
    L ${R},${H}
    A ${R},${R} 0 0,1 0,${H - R}
    L 0,${R}
    A ${R},${R} 0 0,1 ${R},0
    Z
  `;

  const ActiveIcon = links[activeIndex].icon;

  const handleNavClick = (index, targetId) => {
    setActiveIndex(index);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[420px] h-[72px] z-50 drop-shadow-2xl">
      <div ref={containerRef} className="relative w-full h-full">
        
        {/* Dynamic SVG Background */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox={`0 0 ${width} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d={svgPath} 
            fill="var(--color-brand-secondary)" 
            className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" 
          />
        </svg>

        {/* Floating Active Circle (Restored to original size) */}
        <div
          className="absolute top-[-24px] w-[56px] h-[56px] bg-[var(--color-brand-primary)] rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-20"
          style={{ 
            left: `${activeX - 28}px` 
          }}
        >
          <ActiveIcon className="text-white drop-shadow-md" />
        </div>

        {/* Navigation Links container */}
        <ul 
          className="relative flex w-full h-full z-10"
          style={{ padding: `0 ${safeZonePadding}px` }} // Applies the safe zone padding dynamically
        >
          {links.map((link, index) => {
            const isActive = activeIndex === index;
            const Icon = link.icon;

            return (
              <li key={index} className="flex-1 h-full">
                <button
                  onClick={() => handleNavClick(index, link.target)}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-transparent border-none outline-none group"
                >
                  {/* Inactive Icon (Perfectly aligned in flex container) */}
                  <span
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive 
                        ? 'opacity-0 translate-y-4 scale-50' 
                        : 'opacity-100 translate-y-0 text-[var(--color-brand-smooth)] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </span>

                  {/* Text Label (Hidden on mobile, perfectly small on desktop) */}
                  <span
                    className={`hidden md:block absolute bottom-3 font-semibold text-[10px] uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive 
                        ? 'opacity-100 translate-y-0 text-white' 
                        : 'opacity-0 translate-y-3 text-transparent'
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;