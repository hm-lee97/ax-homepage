import React from "react";
import { motion } from "motion/react";
import { Clock, Cpu, Puzzle, ShieldCheck, Target } from "lucide-react";

export function WhyWylie() {
  const features = [
    { icon: Clock,       num: "18",  unit: "년",  title: "18년의 경험",          desc: "금융·이커머스·플랫폼 등 다양한 산업에서 검증된 컨설팅 이력" },
    { icon: Cpu,         num: "AI",  unit: "",    title: "AI 기술 리더십",        desc: "GenAI부터 데이터 파이프라인까지 최신 기술을 현업에 적용" },
    { icon: Puzzle,      num: "1",   unit: "팀",  title: "One-Stop 통합 솔루션",  desc: "전략 수립부터 구축·운영까지 단일 팀이 end-to-end로 담당" },
    { icon: ShieldCheck, num: "A+",  unit: "",    title: "기업 신뢰도",           desc: "국내 주요 대기업과 금융사로부터 검증된 파트너십" },
    { icon: Target,      num: "ROI", unit: "",    title: "성과 중심",             desc: "모든 프로젝트에 측정 가능한 비즈니스 임팩트 목표를 설정" },
  ];

  return (
    <section className="w-full bg-[#060608] md:flex-1 flex items-center pt-[72px] overflow-x-hidden md:overflow-hidden relative">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-[0.034]" />

      {/* Purple glow — bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(153,50,204,0.10) 0%, transparent 65%)" }}
      />

      {/* Large bg number */}
      <div
        className="absolute top-[72px] left-6 pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(100px, 16vw, 200px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(153,50,204,0.04)",
          letterSpacing: "-0.06em",
        }}
      >
        06
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1400px] w-full py-10 relative z-10">

        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-7 h-[1px] bg-[#9932CC]" />
            <span className="text-[12px] font-semibold text-[#9932CC] tracking-[0.28em] uppercase"
              style={{ fontFamily: "'Geist', sans-serif" }}>
              Our Differentiators
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="font-black text-white leading-[1.04] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(48px, 6.5vw, 88px)",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            Why Wylie
          </motion.h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.14 + i * 0.08 }}
              className="group relative rounded-[18px] p-6 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#0E0E18",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(145deg, #130818 0%, #1A0D24 100%)";
                e.currentTarget.style.border = "1px solid rgba(153,50,204,0.40)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(153,50,204,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0E0E18";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-[40px] h-[40px] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#9932CC] transition-all duration-300"
                style={{
                  background: "rgba(153,50,204,0.10)",
                  border: "1px solid rgba(153,50,204,0.18)",
                }}
              >
                <feat.icon size={18} strokeWidth={1.5}
                  className="text-[#9932CC] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Large number */}
              <div
                className="font-black leading-none mb-1"
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontFamily: "'Geist', sans-serif",
                  color: "#9932CC",
                  textShadow: "0 0 20px rgba(153,50,204,0.35)",
                }}
              >
                {feat.num}
                {feat.unit && (
                  <span className="text-[60%] ml-0.5">{feat.unit}</span>
                )}
              </div>

              <h3
                className="text-[13px] font-bold text-white mb-1.5 leading-tight"
                style={{ fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-[13px] text-[#8888A8] leading-[1.55]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
