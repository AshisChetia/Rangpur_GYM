import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AccessMembership from './AccessMembership';

gsap.registerPlugin(ScrollTrigger);

const Access = () => {
  const containerRef = useRef();

  // Add a small hero entrance for the Access page
  useGSAP(() => {
    gsap.from('.access-hero-element', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#050505] overflow-x-hidden pt-24 min-h-screen">
      
      {/* Access Hero Section */}
      <div className="container mx-auto max-w-6xl px-6 md:px-12 pt-12 md:pt-20 pb-8 text-center">
        <div className="access-hero-element flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
            Transparent Access
          </span>
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
        </div>

        <h1 className="access-hero-element font-display text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-tight mb-6">
          Pricing &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
            Information
          </span>
        </h1>
        
        <p className="access-hero-element font-body text-base md:text-xl text-slate-300 leading-relaxed tracking-wide max-w-2xl mx-auto">
          No hidden fees. No complicated tiers. Just pure fitness access. 
          What you see is exactly what you get when you join our community.
        </p>
      </div>

      {/* Reusing the highly functional Membership component */}
      <AccessMembership />
      
    </div>
  );
};

export default Access;
