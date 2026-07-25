import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
  const heroRef = useRef();
  const navigate = useNavigate();
  
  useGSAP(() => {
    // Stagger animation for main content
    gsap.from(".hero-content > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    // HUD Elements animation
    gsap.from(".hud-element", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.8
    });
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="relative w-full h-full">
      
      {/* =========================================
          FUTURISTIC HUD ELEMENTS (CORNERS & SIDES)
          ========================================= */}
          
      {/* Top Left: Location Status */}
      <div className="hud-element absolute top-12 left-6 md:left-12 text-xs text-white/60 font-body tracking-[0.2em] flex flex-col gap-2 z-20 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-smooth)]"></span>
          RANGPUR GYM
        </span>
        <span className="text-white/40">OPEN: 5AM - 8PM</span>
      </div>

      {/* Top Right: Brand Info */}
      <div className="hud-element absolute top-12 right-6 md:right-12 text-right text-xs text-white/60 font-body tracking-[0.2em] flex flex-col gap-2 z-20 uppercase">
        <span>EST. 2026</span>
        <span className="text-white/40">ASSAM, INDIA</span>
      </div>

      {/* Left Side: Rotated Text (Hidden on very small mobile screens) */}
      <div className="hud-element hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs text-white/20 font-display tracking-[0.4em] z-20 whitespace-nowrap uppercase">
        Premium Fitness Facility
      </div>

      {/* Right Side: Rotated Text */}
      <div className="hud-element hidden md:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right text-xs text-[var(--color-brand-smooth)]/40 font-display tracking-[0.4em] z-20 whitespace-nowrap uppercase">
        Elevate Your Performance
      </div>

      {/* Bottom Left: Scroll Hint */}
      <div className="hud-element absolute bottom-16 left-6 md:left-12 text-xs text-white/40 font-body tracking-[0.2em] z-20 uppercase">
        Discover More — Scroll
      </div>

      {/* =========================================
          MAIN CENTER CONTENT
          ========================================= */}
      <div className="hero-content relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 pt-10">
        
        {/* Premium Subheading */}
        <span className="text-[var(--color-brand-smooth)] text-xs md:text-sm font-display tracking-[0.3em] mb-6 uppercase">
          Welcome to Rangpur Gym
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-4 md:mb-6 tracking-tight uppercase">
          Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">Your Life</span>
        </h1>
        
        <p className="text-xs md:text-base text-slate-300 mb-8 md:mb-10 max-w-2xl font-body font-light tracking-wider leading-relaxed">
          Experience premium fitness in Simaluguri, Ramu Gaon with state-of-the-art equipment, certified trainers, and a highly motivating atmosphere tailored for your goals.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate('/access')}
            className="px-8 py-3 bg-[var(--color-brand-primary)] text-white text-sm font-display tracking-widest uppercase hover:scale-105 transition-transform cursor-pointer shadow-[0_0_15px_var(--color-brand-primary)] border border-transparent"
          >
            View Membership Plans
          </button>
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 bg-transparent border border-white/30 text-white text-sm font-display tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Explore Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;