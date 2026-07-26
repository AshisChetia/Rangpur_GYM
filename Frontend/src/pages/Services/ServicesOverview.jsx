import React, { useRef, useEffect, useState } from 'react';

const servicesData = [
  {
    id: '01',
    title: 'Free Weights',
    description: 'Dependable service backed by experienced coaching and well-maintained equipment.',
    image: '/about%20image%203.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11v11h-11z" /><path d="M3 3l3.5 3.5" /><path d="M17.5 17.5L21 21" /><path d="M21 3l-3.5 3.5" /><path d="M6.5 17.5L3 21" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Cardio Equipment',
    description: 'Professional fitness service with quality equipment and a clean training environment.',
    image: '/about%20image%201.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Resistance Machines',
    description: 'Reliable access with certified coaching support and a motivating workout space.',
    image: '/about%20image%202.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Functional Training',
    description: 'Member-focused fitness solutions with clear communication and personalised support.',
    image: '/about%20image%203.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'Personal Training',
    description: 'Expert fitness guidance focused on helping members reach their goals safely.',
    image: '/about%20image%202.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: '06',
    title: 'Group Classes',
    description: 'Comprehensive service delivered by trained and dedicated fitness professionals.',
    image: '/about%20image%201.webp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="23 11 20 14 17 11"/>
      </svg>
    )
  }
];

const ServicesOverview = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const header = section.querySelector('.service-header');
    const cards  = section.querySelectorAll('.service-card-wrapper');

    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(40px)';
      header.style.transition = 'opacity 0.8s ease 0s, transform 0.8s ease 0s';
    }
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px)';
      card.style.transition = `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (header) { header.style.opacity = '1'; header.style.transform = 'translateY(0)'; }
          cards.forEach((card) => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; });
          observer.unobserve(section);
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      
      {/* Background tracking gradient */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] bg-[var(--color-brand-primary)]/5 pointer-events-none transition-all duration-1000 ease-out hidden md:block"
        style={{
          left: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? '10%' : '60%') : '50%',
          top: hoveredIndex !== null ? (Math.floor(hoveredIndex / 2) * 30 + '%') : '50%',
          transform: 'translate(-50%, -50%)',
          opacity: hoveredIndex !== null ? 0.8 : 0.2
        }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="service-header mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-brand-smooth)]"></div>
              <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
                Our Offerings
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider leading-tight">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
                Fitness Matrix
              </span>
            </h2>
          </div>
          <div className="max-w-xs text-center md:text-right">
            <p className="font-body text-slate-400 text-sm md:text-base leading-relaxed tracking-wide">
              Designed for optimal training. Proper ventilation, dynamic lighting, and intelligent equipment spacing.
            </p>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className="service-card-wrapper relative min-h-[380px] h-auto md:min-h-[450px] rounded-2xl overflow-hidden group cursor-crosshair border border-white/5 hover:border-[var(--color-brand-smooth)]/50 transition-colors duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover md:scale-110 md:group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-20 md:group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60 md:via-[#050505]/80 md:to-[#050505]/40 md:group-hover:via-[#050505]/60 transition-all duration-700"></div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-[var(--color-brand-smooth)] transition-colors duration-500"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-[var(--color-brand-smooth)] transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-[var(--color-brand-smooth)] transition-colors duration-500"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-[var(--color-brand-smooth)] transition-colors duration-500"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">
                
                {/* Top: Number & Icon */}
                <div className="flex justify-between items-start">
                  <span className="font-display text-4xl md:text-5xl font-black text-white/10 group-hover:text-white/30 transition-colors duration-700 select-none">
                    {service.id}
                  </span>
                  
                  <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-[var(--color-brand-smooth)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Bottom: Text Content */}
                <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out mt-12 md:mt-0">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4 md:group-hover:text-[var(--color-brand-smooth)] transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <div className="overflow-visible md:overflow-hidden">
                    <p className="font-body text-slate-300 md:text-slate-400 text-base leading-relaxed tracking-wide opacity-100 md:opacity-70 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 md:delay-100 drop-shadow-md md:drop-shadow-none">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Interactive Button */}
                  <div className="mt-8 overflow-visible h-12 md:overflow-hidden md:h-0 md:group-hover:h-12 transition-all duration-500">
                    <button className="flex items-center gap-3 font-display text-xs text-[var(--color-brand-smooth)] md:text-white uppercase tracking-[0.2em] md:hover:text-[var(--color-brand-smooth)] transition-colors">
                      <span className="w-12 md:w-8 h-[1px] bg-[var(--color-brand-smooth)] md:bg-white md:group-hover:w-12 md:group-hover:bg-[var(--color-brand-smooth)] transition-all duration-500"></span>
                      Explore Module
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
