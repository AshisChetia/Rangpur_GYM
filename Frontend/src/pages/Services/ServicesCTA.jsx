import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.services-cta-element');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = `opacity 0.8s ease ${i * 0.12}s, transform 0.8s ease ${i * 0.12}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          elements.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
          observer.unobserve(section);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-primary)]/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="services-cta-element flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
            Experience The Standard
          </span>
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
        </div>

        <h2 className="services-cta-element font-display text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-6">
          Start Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
            Training
          </span>
        </h2>

        <p className="services-cta-element font-body text-base md:text-lg text-slate-300 leading-relaxed tracking-wide max-w-2xl mx-auto mb-10">
          The cheapest membership is rarely the best value. Invest in certified trainers, maintained equipment, and a motivating atmosphere that delivers long-term results.
        </p>

        <div className="services-cta-element flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/access#contact"
            className="px-10 py-4 bg-[var(--color-brand-primary)] text-white font-display text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_var(--color-brand-primary)] border border-[var(--color-brand-smooth)]/30 rounded-lg no-underline text-center"
          >
            Schedule Trial Session
          </Link>
          <Link
            to="/access#schedule"
            className="px-10 py-4 bg-transparent border border-white/20 text-white font-display text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all cursor-pointer rounded-lg no-underline text-center"
          >
            View Class Schedule
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
