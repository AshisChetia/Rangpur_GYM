import React, { useRef, useEffect } from 'react';

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll('.sp-animate');
    targets.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          targets.forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
          observer.unobserve(section);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-16 md:py-24 px-6 md:px-12 bg-[#050505] text-white flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        
        {/* Premium Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12">
          <div>
            <h2 className="sp-animate font-display text-4xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
              The <br/>
              <span className="text-[var(--color-brand-smooth)]">Space</span>
            </h2>
          </div>
          <div className="max-w-sm overflow-hidden">
            <p className="sp-animate font-body text-slate-400 text-lg md:text-xl font-light tracking-wide">
              An environment engineered for elite performance. Everything you need to elevate your training.
            </p>
          </div>
        </div>

        {/* Minimalist Service Rows */}
        <div className="flex flex-col">
          
          {/* Row 1: Facilities */}
          <div className="sp-animate group flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-16 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-default">
            <div className="flex items-start gap-6 md:gap-12 mb-6 md:mb-0">
              <span className="font-display text-2xl md:text-3xl font-bold text-slate-700 group-hover:text-white transition-colors duration-500">01</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:tracking-widest transition-all duration-700">
                Facilities &<br/>Equipment
              </h3>
            </div>
            <div className="max-w-md md:text-right">
              <p className="font-body text-slate-400 text-lg font-light leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                Professional fitness service with quality cardio, well-maintained free weights, and dedicated resistance machines in a clean, motivating environment.
              </p>
            </div>
          </div>

          {/* Row 2: Training */}
          <div className="sp-animate group flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-16 border-b border-white/10 hover:border-white/40 transition-colors duration-500 cursor-default">
            <div className="flex items-start gap-6 md:gap-12 mb-6 md:mb-0">
              <span className="font-display text-2xl md:text-3xl font-bold text-slate-700 group-hover:text-white transition-colors duration-500">02</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:tracking-widest transition-all duration-700">
                Classes &<br/>Training
              </h3>
            </div>
            <div className="max-w-md md:text-right">
              <p className="font-body text-slate-400 text-lg font-light leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                Expert fitness guidance focused on helping you reach your goals safely. Experience comprehensive group classes and functional training.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default ServicesPreview;
