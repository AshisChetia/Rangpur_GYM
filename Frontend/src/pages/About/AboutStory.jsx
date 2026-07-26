import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    // Per-element ScrollTrigger for story elements
    const elements = gsap.utils.toArray('.story-element');
    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
        }
      );
    });

    // Parallax on the image
    gsap.to('.story-image', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div className="story-element relative w-full lg:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden group">
            <img
              src="/about%20image%202.webp"
              alt="Inside Rangpur Gym"
              className="story-image w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            {/* Decorative border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[var(--color-brand-smooth)]/30 transition-colors duration-500"></div>
            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--color-brand-smooth)] animate-pulse"></div>
              <span className="font-display text-xs text-white/80 tracking-widest uppercase">Since 2026</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-7/12">
            <div className="story-element flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
              <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
                Who We Are
              </span>
            </div>

            <h2 className="story-element font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight mb-6">
              Built For The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
                Community
              </span>
            </h2>

            <p className="story-element font-body text-base md:text-lg text-slate-300 leading-relaxed tracking-wide mb-6">
              Rangpur Gym offers Simaluguri and Ramu Gaon a reliable gym experience with 
              well-maintained equipment, trained staff, and transparent membership pricing. 
              We are a comprehensive wellness destination that combines fitness equipment, 
              group energy, and professional guidance in one welcoming space.
            </p>

            <p className="story-element font-body text-base md:text-lg text-slate-400 leading-relaxed tracking-wide mb-8">
              As part of India's growing fitness ecosystem and aligned with the national 
              Fit India Movement, we reflect the increasing health-consciousness of our 
              community. Assam's fitness market is growing rapidly as urbanisation increases 
              and health awareness rises among the young population — and we are proud to 
              lead that charge in our region.
            </p>

            {/* Signature detail */}
            <div className="story-element flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center">
                <span className="font-display text-lg text-white font-bold">RG</span>
              </div>
              <div>
                <span className="font-display text-sm text-white tracking-widest uppercase block">Rangpur Gym</span>
                <span className="font-body text-xs text-slate-500 tracking-wider">Simaluguri, Ramu Gaon, Assam 785686</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
