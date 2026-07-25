import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: '01',
    title: 'Quality Equipment',
    description: 'Well-maintained equipment with regular servicing, ensuring safe and effective workouts every session.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11v11h-11z" /><path d="M3 3l3.5 3.5" /><path d="M17.5 17.5L21 21" /><path d="M21 3l-3.5 3.5" /><path d="M6.5 17.5L3 21" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Certified Trainers',
    description: 'Expert fitness guidance from trained, certified professionals focused on helping members reach their goals safely.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Transparent Pricing',
    description: 'Clear membership fee structure in INR with no hidden charges. What you see is what you pay.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Welcoming Space',
    description: 'Reviewers frequently mention feeling welcomed regardless of their experience level. We train everyone.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Group Classes',
    description: 'Comprehensive group fitness delivered by trained professionals. Build discipline with community energy.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Community Focused',
    description: 'Part of Assam\'s growing fitness movement. Serving the local Simaluguri and Ramu Gaon community with pride.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const AboutValues = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from('.values-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
    });

    // Per-element ScrollTrigger — each card triggers its own animation when it enters the viewport
    const cards = gsap.utils.toArray('.value-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#0a0a12] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="values-header text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
            <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
              Why Choose Us
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight">
            What Sets Us{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
              Apart
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[var(--color-brand-smooth)]/30 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-display text-6xl font-black text-white/[0.03] group-hover:text-[var(--color-brand-smooth)]/10 transition-colors duration-500 select-none">
                {value.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-primary)]/40 border border-[var(--color-brand-smooth)]/20 flex items-center justify-center mb-6 text-[var(--color-brand-smooth)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-all duration-500">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-base md:text-lg font-bold text-white uppercase tracking-widest mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm md:text-base text-slate-400 leading-relaxed tracking-wide">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
