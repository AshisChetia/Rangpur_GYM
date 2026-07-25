import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  // Responsive width: cap at 420px, but shrink to 92% of viewport on small screens.
  // We use state + resize listener instead of a CSS scale() transform.
  // REASON: applying transform:scale() to a position:fixed element causes Chrome mobile
  // to miscalculate the `bottom` value, pushing the navbar partially off-screen.
  const [width, setWidth] = useState(() => Math.min(420, window.innerWidth * 0.92));
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Keep width in sync when the viewport resizes (e.g. orientation change)
  useEffect(() => {
    const onResize = () => setWidth(Math.min(420, window.innerWidth * 0.92));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Links config
  const links = [
    { name: 'Home',     icon: HomeIcon,     target: '/',         type: 'route' },
    { name: 'About',    icon: AboutIcon,    target: '/about',    type: 'route' },
    { name: 'Services', icon: ServicesIcon, target: '/services', type: 'route' },
    { name: 'Access',   icon: AccessIcon,   target: '/access',   type: 'route' },
  ];

  // Sync active index with the current route
  useEffect(() => {
    if (location.pathname === '/about')         setActiveIndex(1);
    else if (location.pathname === '/services') setActiveIndex(2);
    else if (location.pathname === '/access')   setActiveIndex(3);
    else if (location.pathname === '/')         setActiveIndex(0);
  }, [location.pathname]);

  // --- SVG Geometry ---
  const H        = 72;
  const R        = 36;
  const dipWidth = 52;
  const dipDepth = 44;
  const c1X      = 34;
  const c2X      = 22;

  const minActiveX = R + dipWidth + 2; // 90px

  let safeZonePadding = (2 * links.length * minActiveX - width) / (2 * (links.length - 1));
  if (safeZonePadding < 24) safeZonePadding = 24;

  const availableWidth = width - safeZonePadding * 2;
  const tabWidth       = availableWidth / links.length;
  const activeX        = safeZonePadding + activeIndex * tabWidth + tabWidth / 2;

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

  const handleNavClick = (index, link) => {
    setActiveIndex(index);
    if (link.type === 'route') {
      navigate(link.target);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    // NO scale() transform on this element — that is what broke position:fixed on mobile Chrome.
    // Width is now a real pixel value calculated from window.innerWidth.
    <div
      style={{ width: `${width}px` }}
      className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 h-[72px] z-50 drop-shadow-2xl"
    >
      <div ref={containerRef} className="relative w-full h-full">

        {/* Dynamic SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${width} ${H}`}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={svgPath}
            fill="var(--color-brand-secondary)"
            className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          />
        </svg>

        {/* Floating Active Circle */}
        <div
          className="absolute top-[-24px] w-[56px] h-[56px] bg-[var(--color-brand-primary)] rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-20"
          style={{ left: `${activeX - 28}px` }}
        >
          <ActiveIcon className="text-white drop-shadow-md" />
        </div>

        {/* Navigation Links */}
        <ul
          className="relative flex w-full h-full z-10"
          style={{ padding: `0 ${safeZonePadding}px` }}
        >
          {links.map((link, index) => {
            const isActive = activeIndex === index;
            const Icon = link.icon;
            return (
              <li key={index} className="flex-1 h-full">
                <button
                  onClick={() => handleNavClick(index, link)}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-transparent border-none outline-none group"
                >
                  <span
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive
                        ? 'opacity-0 translate-y-4 scale-50'
                        : 'opacity-100 translate-y-0 text-[var(--color-brand-smooth)] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>

                  <span
                    className={`absolute bottom-3 font-semibold text-[10px] uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
