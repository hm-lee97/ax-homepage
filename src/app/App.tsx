import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { AXFramework } from './components/AXFramework';
import { Solutions } from './components/Solutions';
import { CaseStudies } from './components/CaseStudies';
import { Insights } from './components/Insights';
import { WhyWylie } from './components/WhyWylie';
import { Footer } from './components/Footer';

const SLIDE_LABELS = [
  'Home', 'Problem', 'AX Framework', 'Solutions', 'Case Studies', 'Insights', 'Why Wylie',
];

const THROTTLE_MS = 900;

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100vw' : '-100vw',
  }),
  center: (_dir: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  }),
  exit: (dir: number) => ({
    x: dir > 0 ? '-100vw' : '100vw',
    transition: { duration: 0.8, ease: EASE },
  }),
};

function AnimatedCounter({ value, total, isDark }: { value: number; total: number; isDark: boolean }) {
  const color = isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(0,0,0,0.3)]';
  return (
    <div className={`flex items-center gap-1 tabular-nums text-[11px] font-medium ${color}`}>
      <div className="overflow-hidden h-[16px] relative w-[14px]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {String(value + 1).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span>/</span>
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const isDarkSlide = [0, 3, 6].includes(current);
  const total = SLIDE_LABELS.length;
  const isAnimating = useRef(false);
  const lastTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (isAnimating.current) return;
    if (idx < 0 || idx >= total) return;
    setDirection(idx > current ? 1 : -1);
    isAnimating.current = true;
    setCurrent(idx);
    setTimeout(() => { isAnimating.current = false; }, THROTTLE_MS);
  }, [current, total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isMobile) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastTime.current < THROTTLE_MS) return;
      lastTime.current = now;
      if (e.deltaY > 0 || e.deltaX > 0) next(); else prev();
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [next, prev, isMobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    if (isMobile) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const startX = touchStartX.current;
      if (startX < 30 || startX > window.innerWidth - 30) return;
      const dx = startX - e.changedTouches[0].clientX;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        dx > 0 ? next() : prev();
      }
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev, isMobile]);

  /* ── Mobile: normal vertical scroll ── */
  if (isMobile) {
    const scrollTo = (idx: number) => {
      document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <div className="w-full bg-[#0A0A0A]">
        <Header currentSlide={-1} onNavigate={scrollTo} />
        <div id="section-0"><Hero onNavigate={scrollTo} /></div>
        <div id="section-1"><Problem /></div>
        <div id="section-2"><AXFramework /></div>
        <div id="section-3"><Solutions /></div>
        <div id="section-4"><CaseStudies /></div>
        <div id="section-5"><Insights /></div>
        <div id="section-6" className="flex flex-col">
          <WhyWylie />
          <Footer />
        </div>
      </div>
    );
  }

  /* ── Desktop: fullpage slide ── */
  const SLIDES = [
    <Hero key="hero" onNavigate={goTo} />,
    <Problem key="problem" />,
    <AXFramework key="framework" />,
    <Solutions key="solutions" />,
    <CaseStudies key="cases" />,
    <Insights key="insights" />,
    <div key="last" className="w-screen h-screen flex flex-col overflow-hidden">
      <WhyWylie />
      <Footer />
    </div>,
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0A0A0A] relative">
      <Header currentSlide={current} onNavigate={goTo} />

      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-screen h-screen"
        >
          {SLIDES[current]}
        </motion.div>
      </AnimatePresence>

      {/* Right-side dot navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-3">
        {SLIDE_LABELS.map((label, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className="text-[11px] font-medium text-white bg-[#1A1A1A] px-2.5 py-1 rounded-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150 ease-out whitespace-nowrap pointer-events-none shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              {label}
            </span>
            <div className="relative flex items-center justify-center w-4 h-4">
              {current === i && (
                <motion.span
                  className="absolute w-4 h-4 rounded-full border border-[#9932CC]"
                  initial={{ scale: 0.6, opacity: 0.8 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <motion.span
                animate={current === i
                  ? { width: 8, height: 8, backgroundColor: '#9932CC' }
                  : { width: 6, height: 6, backgroundColor: isDarkSlide ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }
                }
                whileHover={{ backgroundColor: isDarkSlide ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)' }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="block rounded-full"
              />
            </div>
          </button>
        ))}
      </nav>

      {/* Bottom progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[1px] bg-[rgba(128,128,128,0.15)] z-[150]">
        <motion.div
          className="h-full bg-[#9932CC]"
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>

      {/* Bottom right: prev / counter / next */}
      <div className="fixed bottom-5 right-8 md:right-14 z-[150] flex items-center gap-3">
        <motion.button
          onClick={prev}
          animate={{ opacity: current > 0 ? 1 : 0.2, pointerEvents: current > 0 ? 'auto' : 'none' }}
          whileTap={{ scale: 0.97 }}
          className={isDarkSlide ? 'text-[rgba(255,255,255,0.35)] hover:text-white transition-colors' : 'text-[rgba(0,0,0,0.25)] hover:text-[#1A1A1A] transition-colors'}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M16 10H4M9 5L4 10l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        <AnimatedCounter value={current} total={total} isDark={isDarkSlide} />

        <motion.button
          onClick={next}
          animate={{ opacity: current < total - 1 ? 1 : 0.2, pointerEvents: current < total - 1 ? 'auto' : 'none' }}
          whileTap={{ scale: 0.97 }}
          className={isDarkSlide ? 'text-[rgba(255,255,255,0.35)] hover:text-white transition-colors' : 'text-[rgba(0,0,0,0.25)] hover:text-[#1A1A1A] transition-colors'}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
