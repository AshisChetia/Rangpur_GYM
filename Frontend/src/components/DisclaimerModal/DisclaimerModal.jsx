import React, { useState, useEffect } from 'react';

const DisclaimerModal = () => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const handleAccept = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Backdrop: blurs entire page behind modal ── */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/70 transition-opacity duration-400
          ${closing ? 'opacity-0' : 'opacity-100'}
        `}
        style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      />

      {/* ── Modal wrapper: centres the card ── */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-4
          transition-all duration-400
          ${closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        {/* ── Card ── */}
        <div className="relative w-full max-w-lg bg-[#0d0d18] border border-white/8 rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6),0_0_80px_rgba(75,60,255,0.08)] flex flex-col items-center text-center px-6 py-10 md:px-10 md:py-12">

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-brand-smooth)] to-transparent" />

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-smooth)]/25 flex items-center justify-center text-[var(--color-brand-smooth)] mb-5 shrink-0">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          {/* Label */}
          <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase font-bold text-[var(--color-brand-smooth)] mb-2">
            Important Notice
          </p>

          {/* Title */}
          <h1
            id="disclaimer-title"
            className="font-display text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4 leading-none"
          >
            Portfolio Project
          </h1>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-white/10 rounded-full mb-6" />

          {/* Body text */}
          <div className="flex flex-col gap-3 mb-5">
            <p className="font-body text-sm md:text-[0.9rem] text-slate-400 leading-relaxed tracking-wide">
              This website is a{' '}
              <span className="text-slate-200 font-semibold">personal portfolio project</span>{' '}
              created solely to demonstrate my web development skills. It is not affiliated with,
              endorsed by, or representative of{' '}
              <span className="text-slate-200 font-semibold">Rangpur Gym</span>{' '}
              or its owners in any way.
            </p>
            <p className="font-body text-sm md:text-[0.9rem] text-slate-400 leading-relaxed tracking-wide">
              No permission has been obtained from the gym owner or any associated party.
              All content, branding, and information displayed here are used purely for{' '}
              <span className="text-slate-200 font-semibold">showcase and educational purposes</span>{' '}
              only.
            </p>
            <p className="font-body text-sm md:text-[0.9rem] text-slate-400 leading-relaxed tracking-wide">
              If you are the owner of Rangpur Gym and have any concerns, please feel free
              to reach out to me directly.
            </p>
          </div>

          {/* Footer note */}
          <p className="font-body text-[0.72rem] text-slate-600 leading-relaxed tracking-wide mb-7 px-2">
            By clicking{' '}
            <span className="text-slate-500 font-semibold">I Understand</span>,
            you acknowledge that this is a non-commercial portfolio demonstration.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleAccept}
            autoFocus
            className="w-full py-4 px-6 bg-[var(--color-brand-primary)] border border-[var(--color-brand-smooth)]/30 rounded-xl text-white font-display text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_24px_rgba(75,60,255,0.3)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(75,60,255,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brand-smooth)] focus-visible:outline-offset-2"
          >
            I Understand — Continue
          </button>

        </div>
      </div>
    </>
  );
};

export default DisclaimerModal;
