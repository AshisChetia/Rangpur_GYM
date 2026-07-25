import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgVideo from '../../assets/promoVideo2.mp4';

const ServicesHero = () => {
  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.services-hero-tag', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })
    .from('.services-hero-title span', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    }, '-=0.4')
    .from('.services-hero-desc', {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from('.services-hero-glow', {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    }, '-=1.0');

    // Subtle continuous floating for the glow
    gsap.to('.services-hero-glow', {
      y: 20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[70vh] flex flex-col justify-center items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-30"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/90 to-[#050505]"></div>
        
        {/* Animated Glow Element (Reduced intensity) */}
        <div className="services-hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] rounded-full bg-[var(--color-brand-primary)]/10 blur-[150px] pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24 max-w-5xl text-center">
        {/* Tag */}
        <div className="services-hero-tag flex items-center justify-center gap-3 mb-6 md:mb-8">
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs md:text-sm uppercase font-bold">
            Elite Equipment & Training
          </span>
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
        </div>

        {/* Title */}
        <h1 className="services-hero-title font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-8">
          <span className="block overflow-hidden"><span className="block">Elevate Your</span></span>
          <span className="block overflow-hidden"><span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">Performance</span></span>
        </h1>

        {/* Description */}
        <p className="services-hero-desc font-body text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed tracking-wide mb-12 drop-shadow-lg">
          Discover a comprehensive fitness ecosystem engineered for results. 
          From world-class free weights to functional training zones and expert coaching.
        </p>

      </div>
    </section>
  );
};

export default ServicesHero;
