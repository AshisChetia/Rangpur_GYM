import React, { useRef, useEffect } from 'react';

// ─── Social link data ──────────────────────────────────────────────────────────
const PHONE  = '+919706820603';
const WA_MSG = encodeURIComponent("Hi! I found you on your website and I'd like to know more about Rangpur Gym.");
const SOCIALS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Message Us',
    description: 'Chat with us instantly',
    href: `https://wa.me/${PHONE}?text=${WA_MSG}`,
    color: '#25D366',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@rangpurgym',
    description: 'Follow our journey',
    href: 'https://www.instagram.com/rangpurgym',
    color: '#E1306C',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Rangpur Gym',
    description: 'Join our community',
    href: 'https://www.facebook.com/rangpurgym',
    color: '#1877F2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const AccessContact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Grab all animatable elements
    const heading = section.querySelector('.contact-heading');
    const cards   = section.querySelectorAll('.contact-card');

    // Set initial hidden state via inline style (safe — no GSAP involved)
    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(30px)';
      heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Animate heading
          if (heading) {
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
          }
          // Animate cards
          cards.forEach((card) => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });

          // Stop observing after first trigger
          observer.unobserve(section);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#050505]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-primary)]/15 blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="contact-heading text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]" />
            <span className="font-display tracking-[0.3em] text-[var(--color-brand-smooth)] text-xs uppercase font-bold">
              Get In Touch
            </span>
            <div className="w-12 h-[2px] bg-[var(--color-brand-smooth)]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider leading-tight mb-4">
            Connect With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-smooth)] to-white">
              Us
            </span>
          </h2>
          <p className="font-body text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed tracking-wide">
            Have a question or ready to start your journey? Reach out through any of our channels — we respond fast.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors duration-500 overflow-hidden cursor-pointer no-underline"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.color}18 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative mb-5 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${s.color}18`, color: s.color }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <span className="font-display text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: s.color }}>
                {s.label}
              </span>
              <p className="font-body text-white font-semibold text-base tracking-wide mb-1">
                {s.handle}
              </p>
              <p className="font-body text-slate-500 text-sm tracking-wide">
                {s.description}
              </p>

              {/* Arrow indicator */}
              <div
                className="mt-6 flex items-center gap-2 font-display text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                style={{ color: s.color }}
              >
                Open
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.015] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-white text-sm uppercase tracking-widest font-bold mb-1">Prefer to call?</p>
            <p className="font-body text-slate-400 text-sm tracking-wide">We're available Mon–Sat, 5:00 AM – 8:00 PM</p>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex-shrink-0 flex items-center gap-3 px-8 py-3 border border-white/20 text-white font-display text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-pointer no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default AccessContact;
