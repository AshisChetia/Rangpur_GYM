import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutHero = () => {
  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.about-hero-tag', {
      y: 30,
      opacity: 0,
      duration: 0.8,
    })
    .from('.about-hero-title span', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
    }, '-=0.4')
    .from('.about-hero-desc', {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from('.about-hero-line', {
      scaleX: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    }, '-=0.6')
    .from('.about-hero-stats > div', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
    }, '-=0.8');

  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about%20image%201.webp"
          alt="Rangpur Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]"></div>
        {/* Subtle animated grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24 pb-16 max-w-6xl">
        {/* Tag */}
        <div className="about-hero-tag flex items-center gap-3 mb-8">
          <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
            Our Story
          </span>
        </div>

        {/* Title */}
        <h1 className="about-hero-title font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-8">
          <span className="block overflow-hidden"><span className="block">More Than</span></span>
          <span className="block overflow-hidden"><span className="block">A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">Gym</span></span></span>
        </h1>

        {/* Description */}
        <p className="about-hero-desc font-body text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed tracking-wide mb-12">
          A comprehensive wellness destination in Simaluguri, Ramu Gaon combining 
          state-of-the-art fitness equipment, group energy, and professional guidance 
          in one welcoming space.
        </p>

        {/* Decorative Line */}
        <div className="about-hero-line w-full h-[1px] bg-gradient-to-r from-[var(--color-brand-smooth)]/50 via-white/20 to-transparent mb-12 origin-left"></div>

        {/* Stats Row */}
        <div className="about-hero-stats flex flex-wrap gap-8 md:gap-16">
          <div className="flex flex-col">
            <span className="font-display text-3xl md:text-4xl font-black text-white">4.2</span>
            <span className="font-body text-xs md:text-sm text-slate-400 tracking-widest uppercase mt-1">Star Rating</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl md:text-4xl font-black text-white">5AM</span>
            <span className="font-body text-xs md:text-sm text-slate-400 tracking-widest uppercase mt-1">Opening Time</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl md:text-4xl font-black text-white">6</span>
            <span className="font-body text-xs md:text-sm text-slate-400 tracking-widest uppercase mt-1">Days / Week</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl md:text-4xl font-black text-white">₹1.5K</span>
            <span className="font-body text-xs md:text-sm text-slate-400 tracking-widest uppercase mt-1">Monthly Fee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
