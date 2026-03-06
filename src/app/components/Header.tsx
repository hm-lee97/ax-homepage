import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "AX 소개", slide: 2 },
  { label: "솔루션", slide: 3 },
  { label: "사례", slide: 4 },
];

interface HeaderProps {
  currentSlide: number;
  onNavigate: (idx: number) => void;
}

export function Header({ currentSlide, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = [0, 3].includes(currentSlide);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={`mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-8 md:px-14 transition-all duration-500 ${
          isDark
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate(0)}
          className="flex-shrink-0 text-[18px] font-bold tracking-tight text-[#9932CC]"
        >
          Wylie AX Center
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[40px]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.slide)}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                currentSlide === item.slide
                  ? "text-[#9932CC]"
                  : isDark
                  ? "text-[#8A8A9A] hover:text-white"
                  : "text-[#444] hover:text-[#1A1A1A]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            onClick={() => onNavigate(3)}
            className="h-[40px] px-6 bg-[#9932CC] text-white text-[14px] font-semibold rounded-lg hover:bg-[#B44DE0] transition-colors duration-200"
          >
            AX 솔루션
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isDark ? "text-[#8A8A9A]" : "text-[#555]"} hover:text-[#9932CC]`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col"
          >
            <div className="flex justify-between items-center px-6 h-[72px] border-b border-[rgba(255,255,255,0.06)]">
              <span className="text-[18px] font-bold tracking-tight text-[#9932CC]">
                Wylie AX Center
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#8A8A9A] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-8 gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { onNavigate(item.slide); setMobileMenuOpen(false); }}
                  className="text-[24px] font-bold text-[#E8E4DE] hover:text-white text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { onNavigate(3); setMobileMenuOpen(false); }}
                className="w-full mt-4 h-[52px] bg-[#9932CC] text-white text-[16px] font-semibold rounded-lg hover:bg-[#B44DE0] transition-colors"
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
