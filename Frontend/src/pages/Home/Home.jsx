import React, { useRef } from 'react'
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
  const heroRef = useRef();
  const aboutRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    // Parallax fade for Hero
    gsap.to(heroRef.current, {
      yPercent: -50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax fade in for About
    gsap.fromTo(aboutRef.current,
      { yPercent: 30, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: heroRef.current, // Start when Hero starts scrolling up
          start: "center top",
          end: "bottom top",
          scrub: true,
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#050505]">
      
      {/* 
        Fixed Video Background 
        This will stay fixed to the screen. 
        It is visible during Hero and About (which have transparent backgrounds).
        When ServicesSection scrolls up (which has a solid background), it will cover this video naturally!
      */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
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
        
        {/* Hero Section */}
        <div id="home" className="h-screen w-full" ref={heroRef}>
          <HeroSection />
        </div>

        {/* About Section */}
        <div id="about" className="h-screen w-full" ref={aboutRef}>
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
