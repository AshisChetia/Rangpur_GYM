import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import bgVideo from '../../assets/promoVideo2.mp4'
import HeroSection from './Hero'
import AboutPreview from './AboutPreview'
import ServicesPreview from './ServicesPreview'
import AccessPreview from './AccessPreview'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroInnerRef = useRef();   // Animates the INNER content, NOT the wrapper div
  const aboutRef = useRef();
  const containerRef = useRef();

  // ─── FIX 1: Kill ALL stale ScrollTrigger instances on unmount ──────────────
  // When the user navigates away from Home and comes back, old ScrollTrigger
  // instances from other pages corrupt scroll calculations. Killing them on
  // cleanup guarantees a clean slate on every visit.
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    // Force scroll to top before GSAP calculates positions
    window.scrollTo(0, 0);
    ScrollTrigger.clearScrollMemory("manual");

    // ─── FIX 2: Animate the INNER content div, NOT the heroRef wrapper ────────
    // The original code animated heroRef.current (the `h-[100dvh]` wrapper) with
    // yPercent:-50. GSAP achieves this by applying a CSS transform to that element.
    // Any element with a CSS transform creates a new stacking context, which causes
    // ALL `position: fixed` children (including the navbar) to be positioned
    // relative to THAT element instead of the viewport — breaking the navbar on mobile.
    //
    // Solution: we animate heroInnerRef (a child div) so the transform is applied
    // only to the visual content, never to a layout/stacking ancestor.
    if (heroInnerRef.current) {
      gsap.to(heroInnerRef.current, {
        yPercent: -20,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: heroInnerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    // Parallax fade in for About
    if (aboutRef.current) {
      gsap.fromTo(aboutRef.current,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroInnerRef.current,
            start: "center top",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }

    // Refresh ScrollTrigger after a short delay to account for layout paint
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(refreshTimer);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#050505]">
      
      {/* 
        Fixed Video Background 
        This will stay fixed to the screen. 
        It is visible during Hero and About (which have transparent backgrounds).
        When ServicesSection scrolls up (which has a solid background), it will cover this video naturally!
      */}
      <div className="fixed top-0 left-0 w-full h-[100dvh] z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Subtle vignette/overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
      </div>

      {/* Transparent Foreground for Hero & About */}
      <div className="relative w-full z-10">
        
        {/* Hero Section — wrapper has NO transform applied to it */}
        <div id="home" className="h-[100dvh] w-full">
          {/* heroInnerRef wraps the visual content so GSAP transform never touches the layout wrapper */}
          <div ref={heroInnerRef} className="w-full h-full">
            <HeroSection />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="h-[100dvh] w-full" ref={aboutRef}>
          <AboutPreview />
        </div>

      </div>

      {/* Solid Background Section - Covers the fixed video as you scroll */}
      <div className="relative w-full z-20 bg-[#050505]">
        <div id="services">
          <ServicesPreview />
        </div>
        <div id="access">
          <AccessPreview />
        </div>
      </div>

    </div>
  )
}

export default Home
