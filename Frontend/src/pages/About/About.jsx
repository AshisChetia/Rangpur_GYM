import React, { useRef } from 'react';
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
