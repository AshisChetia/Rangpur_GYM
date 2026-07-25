import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: 'Monday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Tuesday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Wednesday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Thursday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Friday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Saturday', time: '5:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

const AccessMembership = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    // Per-element ScrollTrigger for membership elements
    const elements = gsap.utils.toArray('.membership-element');
    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
          },
        }
      );
    });

    // Per-element ScrollTrigger for hours rows
    const rows = gsap.utils.toArray('.hours-row');
    rows.forEach((row, i) => {
      gsap.fromTo(row,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: i * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 95%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#0a0a12] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-brand-primary)]/20 blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="membership-element text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
            <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
              Membership & Hours
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight">
            Join The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
              Movement
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: Pricing */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Monthly */}
            <div className="membership-element p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-[var(--color-brand-smooth)]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-primary)]/20 rounded-bl-full pointer-events-none"></div>
              <span className="font-display text-[10px] tracking-[0.3em] text-[var(--color-brand-smooth)] uppercase font-bold block mb-4">Monthly Plan</span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl md:text-5xl font-black text-white">₹1,500</span>
                <span className="font-body text-sm text-slate-400 tracking-wider">/ month</span>
              </div>
              <p className="font-body text-sm text-slate-400 leading-relaxed tracking-wide mb-6">
                Unrestricted access to all fitness zones, elite coaching, and group classes. 
                Full-service fitness centre experience.
              </p>
              <ul className="space-y-3">
                {['All equipment access', 'Certified trainer guidance', 'Group fitness classes', 'Clean & maintained facilities'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-slate-300 tracking-wide">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-smooth)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Admission */}
            <div className="membership-element p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-[var(--color-brand-smooth)]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-primary)]/20 rounded-bl-full pointer-events-none"></div>
              <span className="font-display text-[10px] tracking-[0.3em] text-[var(--color-brand-smooth)] uppercase font-bold block mb-4">One-Time Admission</span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl md:text-5xl font-black text-white">₹1,500</span>
                <span className="font-body text-sm text-slate-400 tracking-wider">/ one-time</span>
              </div>
              <p className="font-body text-sm text-slate-400 leading-relaxed tracking-wide">
                A one-time setup fee for lifetime enrollment in our ecosystem. This covers registration, 
                body assessment, and initial fitness consultation with our certified trainers.
              </p>
            </div>

            {/* Tip */}
            <div className="membership-element p-6 rounded-xl border border-[var(--color-brand-smooth)]/20 bg-[var(--color-brand-primary)]/10">
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-brand-smooth)] mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </span>
                <p className="font-body text-sm text-slate-300 leading-relaxed tracking-wide">
                  <strong className="text-white">Pro Tip:</strong> Calculate the cost per service you'll actually use. 
                  Our membership includes free classes, diet consultation, and body assessment — excellent total value.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Hours */}
          <div className="w-full lg:w-1/2">
            <div className="membership-element p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-smooth)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                Operating Hours
              </h3>

              <div className="hours-table space-y-0">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`hours-row flex items-center justify-between py-4 border-b border-white/5 last:border-b-0 ${
                      !item.open ? 'opacity-50' : ''
                    }`}
                  >
                    <span className="font-body text-sm text-white tracking-wider uppercase">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.open ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <span className={`font-body text-sm tracking-wider ${item.open ? 'text-slate-300' : 'text-red-400'}`}>
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="membership-element mt-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-smooth)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Our Location
              </h3>
              <p className="font-body text-sm text-slate-300 tracking-wide leading-relaxed mb-4">
                Rangpur Gym, Simaluguri, Ramu Gaon, Assam 785686
              </p>
              <p className="font-body text-sm text-slate-400 tracking-wide leading-relaxed">
                Found near major residential and commercial areas. Well-regarded by the local community 
                for consistent service and facilities. Easily accessible with convenient parking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccessMembership;
