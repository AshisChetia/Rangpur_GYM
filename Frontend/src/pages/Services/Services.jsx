import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServicesHero from './ServicesHero';
import ServicesOverview from './ServicesOverview';
import ServicesCTA from './ServicesCTA';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef();

  return (
    <div ref={containerRef} className="w-full bg-[#050505] overflow-x-hidden">
      <ServicesHero />
      <ServicesOverview />
      <ServicesCTA />
    </div>
  );
};

export default Services;
