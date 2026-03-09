import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "AX 소개", slide: 2 },
  { label: "솔루션", slide: 3 },
  { label: "사례",   slide: 4 },
];

interface HeaderProps {
  currentSlide: number;
  onNavigate: (idx: number) => void;
}

export function Header({ currentSlide, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Dark slides: Hero (0), Solutions (3), WhyWylie+Footer (5)
  const isDark = [0, 3, 5].includes(currentSlide);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className="mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-8 md:px-14 transition-all duration-500"
        style={{
          background: isDark
            ? "transparent"
            : "rgba(244,242,239,0.85)",
          backdropFilter: isDark ? "none" : "blur(16px)",
          WebkitBackdropFilter: isDark ? "none" : "blur(16px)",
          borderBottom: isDark ? "none" : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate(0)}
          className="flex-shrink-0 font-black tracking-tight text-[#9932CC] transition-all duration-200 hover:opacity-80"
          style={{
            fontSize: "17px",
            fontFamily: "'Geist', sans-serif",
            textShadow: isDark ? "0 0 16px rgba(153,50,204,0.4)" : "none",
          }}
        >
          Wylie AX Center
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.slide)}
              className="text-[13px] font-semibold transition-all duration-200 relative group"
              style={{
                fontFamily: "'Geist', sans-serif",
                color: currentSlide === item.slide
                  ? "#9932CC"
                  : isDark
                  ? "rgba(255,255,255,0.35)"
                  : "rgba(0,0,0,0.45)",
              }}
              onMouseEnter={(e) => {
                if (currentSlide !== item.slide)
                  (e.currentTarget as HTMLButtonElement).style.color = isDark ? "#fff" : "#1A1A1A";
              }}
              onMouseLeave={(e) => {
                if (currentSlide !== item.slide)
                  (e.currentTarget as HTMLButtonElement).style.color = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.45)";
              }}
            >
              {item.label}
              {currentSlide === item.slide && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#9932CC] rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            onClick={() => onNavigate(3)}
            className="h-[38px] px-6 text-white text-[13px] font-bold rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{
              fontFamily: "'Geist', sans-serif",
              background: "#9932CC",
              boxShadow: isDark ? "0 0 16px rgba(153,50,204,0.45)" : "none",
            }}
          >
            AX 솔루션
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 -mr-1 transition-colors"
          style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.45)" }}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-[#060608] text-white flex flex-col"
          >
            <div
              className="absolute inset-0 pointer-events-none grid-bg"
              style={{ opacity: 1 }}
            />
            <div className="relative z-10 flex justify-between items-center px-6 h-[72px]"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span
                className="font-black tracking-tight text-[#9932CC]"
                style={{ fontSize: "17px", fontFamily: "'Geist', sans-serif" }}
              >
                Wylie AX Center
              </span>
              <button onClick={() => setMobileMenuOpen(false)}
                className="p-3 -mr-1 text-[rgba(255,255,255,0.35)] hover:text-white transition-colors"
                aria-label="메뉴 닫기">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative z-10 flex flex-col p-8 gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { onNavigate(item.slide); setMobileMenuOpen(false); }}
                  className="font-black text-[#E8E4EE] hover:text-white text-left tracking-[-0.02em]"
                  style={{ fontSize: "28px", fontFamily: "'Geist', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { onNavigate(3); setMobileMenuOpen(false); }}
                className="w-full mt-2 h-[52px] text-white text-[15px] font-bold rounded-full transition-all duration-300"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  background: "#9932CC",
                  boxShadow: "0 0 24px rgba(153,50,204,0.45)",
                }}
              >
                AX 솔루션
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
