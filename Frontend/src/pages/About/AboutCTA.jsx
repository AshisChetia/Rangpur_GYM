import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const elements = gsap.utils.toArray('.cta-element');
    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-brand-primary)]/30 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="cta-element flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
            Get Started
          </span>
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
        </div>

        <h2 className="cta-element font-display text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-6">
          Ready To{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
            Transform?
          </span>
        </h2>

        <p className="cta-element font-body text-base md:text-lg text-slate-300 leading-relaxed tracking-wide max-w-2xl mx-auto mb-10">
          Join the growing fitness community at Rangpur Gym. Whether you're a beginner or 
          an experienced athlete, our certified trainers and premium facilities are here to 
          support your journey toward a healthier, stronger you.
        </p>

        <div className="cta-element flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-[var(--color-brand-primary)] text-white font-display text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_var(--color-brand-primary)] border border-[var(--color-brand-smooth)]/30 rounded-lg">
            Join Now — ₹1,500/mo
          </button>
          <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-display text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all cursor-pointer rounded-lg">
            Book A Free Trial
          </button>
        </div>

        {/* Trust badges */}
        <div className="cta-element flex flex-wrap items-center justify-center gap-8 mt-16 text-slate-500">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">4.2 Star Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">10+ Member Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">Certified Trainers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
