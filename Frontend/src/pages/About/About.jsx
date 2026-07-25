import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutValues from './AboutValues';
import AboutCTA from './AboutCTA';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();

  // Kill stale ScrollTrigger instances on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#050505]">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </div>
  );
};

export default About;
