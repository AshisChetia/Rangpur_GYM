import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const AboutPreview = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const textElements = section.querySelectorAll('.about-text-element');
    const visualElement = section.querySelector('.about-visual-element');

    textElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
    });

    if (visualElement) {
      visualElement.style.opacity = '0';
      visualElement.style.transform = 'translateX(30px) scale(0.95)';
      visualElement.style.transition = 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          textElements.forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
          if (visualElement) {
            visualElement.style.opacity = '1';
            visualElement.style.transform = 'translateX(0) scale(1)';
          }
          observer.unobserve(section);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-transparent">
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 mt-16 md:mt-0">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left">
          <div className="about-text-element flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]"></div>
            <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
              The Experience
            </span>
          </div>
          
          <h2 className="about-text-element font-display text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-wider leading-tight">
            Elevate Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
              Physical Form
            </span>
          </h2>
          
          <p className="about-text-element font-body text-sm md:text-lg text-slate-300 mb-6 md:mb-8 max-w-xl leading-relaxed tracking-wide font-light">
            Welcome to Rangpur Gym in Simaluguri, Ramu Gaon. We provide a reliable fitness experience with state-of-the-art equipment, elite coaching staff, and transparent pricing. Experience a comprehensive wellness destination combining advanced technology, group energy, and professional guidance.
          </p>

          <button
            onClick={() => navigate('/about')}
            className="about-text-element relative group px-10 py-4 bg-transparent text-white font-display text-xs uppercase tracking-widest overflow-hidden border border-white/20 hover:border-white/50 transition-colors cursor-pointer backdrop-blur-sm"
          >
            <div className="absolute inset-0 w-0 bg-[var(--color-brand-primary)] group-hover:w-full transition-all duration-300 ease-out -z-10"></div>
            <span className="relative z-10">Discover More</span>
          </button>
        </div>

        {/* Right Side: Futuristic Swiper with Images */}
        <div className="about-visual-element flex-1 w-full max-w-[260px] md:max-w-md relative flex justify-center mt-6 md:mt-0">
          
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full aspect-square md:aspect-[4/5] rounded-xl"
          >
            <SwiperSlide className="rounded-xl overflow-hidden border border-white/20 bg-slate-900">
              <img src="/about%20image%201.webp" alt="Gym preview 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-display text-sm text-white tracking-widest uppercase font-bold">
                Premium Space
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden border border-white/20 bg-slate-900">
              <img src="/about%20image%202.webp" alt="Gym preview 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-display text-sm text-white tracking-widest uppercase font-bold">
                Elite Equipment
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl overflow-hidden border border-white/20 bg-slate-900">
              <img src="/about%20image%203.webp" alt="Gym preview 3" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-display text-sm text-white tracking-widest uppercase font-bold">
                Expert Guidance
              </div>
            </SwiperSlide>
          </Swiper>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
