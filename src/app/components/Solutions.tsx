import React, { useState } from "react";
import { motion } from "motion/react";
import { BarChart3, LayoutGrid, PenTool, Cloud, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    num: "01",
    title: "데이터 &\n인사이트",
    desc: "고객 행동 데이터를 실시간으로 분석하고 실행 가능한 비즈니스 인사이트를 대시보드로 제공합니다.",
    tags: ["Fromto[X]", "NEP", "Analytics"],
    wide: true,
  },
  {
    icon: LayoutGrid,
    num: "02",
    title: "플랫폼 구축",
    desc: "마이크로서비스 아키텍처(MSA) 기반의 확장 가능한 프론트엔드 및 백엔드 개발.",
    tags: ["Cloud", "SaaS"],
    wide: false,
  },
  {
    icon: PenTool,
    num: "03",
    title: "UX/UI 설계",
    desc: "데이터를 기반으로 사용자 경험을 근본적으로 개선하는 하이퍼 개인화 인터페이스 설계.",
    tags: ["Research", "Design"],
    wide: false,
  },
  {
    icon: Cloud,
    num: "04",
    title: "클라우드 &\nSaaS",
    desc: "온프레미스 인프라를 클라우드로 마이그레이션하고 무중단 배포(CI/CD) 파이프라인을 구축합니다.",
    tags: ["우리가잇다", "Migration", "Ops"],
    wide: true,
  },
];

export function Solutions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full md:h-screen bg-[#080810] overflow-x-hidden md:overflow-hidden flex items-center pt-[72px] relative">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-[0.032]" />

      {/* Purple glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(153,50,204,0.08) 0%, transparent 65%)" }}
      />

      {/* Large bg number */}
      <div
        className="absolute bottom-0 right-8 pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(100px, 18vw, 240px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(153,50,204,0.03)",
          letterSpacing: "-0.06em",
        }}
      >
        04
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1400px] w-full relative z-10 py-10 md:py-0">

        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-7 h-[1px] bg-[#9932CC]" />
            <span className="text-[12px] font-semibold text-[#9932CC] tracking-[0.28em] uppercase"
              style={{ fontFamily: "'Geist', sans-serif" }}>
              Core Services
            </span>
          </motion.div>

          <div className="flex items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
              className="font-black text-white leading-[1.05] tracking-[-0.045em]"
              style={{
                fontSize: "clamp(38px, 5vw, 66px)",
                fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              }}
            >
              Wylie AX의<br />4가지 핵심 서비스
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="hidden md:block text-[13px] text-[#8888A8] text-right pb-2 max-w-[240px] leading-[1.6]"
            >
              전략 → 설계 → 구축 → 운영/최적화까지<br />One-Stop
            </motion.p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.22 + i * 0.07 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`${card.wide ? "md:col-span-2" : "md:col-span-1"} relative rounded-[18px] p-7 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300`}
                style={{
                  background: isHovered
                    ? "linear-gradient(135deg, #130818 0%, #1A0D24 100%)"
                    : "#0E0E18",
                  border: isHovered
                    ? "1px solid rgba(153,50,204,0.45)"
                    : "1px solid rgba(255,255,255,0.05)",
                  boxShadow: isHovered
                    ? "0 0 32px rgba(153,50,204,0.18), inset 0 0 32px rgba(153,50,204,0.04)"
                    : "none",
                  minHeight: "186px",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                {/* Large ghost number */}
                <div
                  className="absolute -bottom-3 -right-2 pointer-events-none select-none leading-none transition-all duration-500"
                  style={{
                    fontSize: "100px",
                    fontWeight: 900,
                    fontFamily: "'Geist', sans-serif",
                    color: isHovered ? "rgba(153,50,204,0.10)" : "rgba(255,255,255,0.025)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {card.num}
                </div>

                {/* Top: icon + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-[46px] h-[46px] rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? "#9932CC" : "rgba(153,50,204,0.10)",
                      border: isHovered ? "1px solid #9932CC" : "1px solid rgba(153,50,204,0.18)",
                    }}
                  >
                    <card.icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: isHovered ? "#fff" : "#9932CC" }}
                    />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-300"
                    style={{
                      color: isHovered ? "#9932CC" : "rgba(255,255,255,0.12)",
                      transform: isHovered ? "translate(1px, -1px)" : "none",
                    }}
                  />
                </div>

                {/* Title + desc */}
                <div className="flex-1 relative z-10">
                  <h3
                    className="font-black text-white leading-[1.2] whitespace-pre-line mb-2 tracking-[-0.02em]"
                    style={{
                      fontSize: "clamp(16px, 1.4vw, 19px)",
                      fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#8888A8] leading-[1.65]">{card.desc}</p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5 relative z-10">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300"
                      style={{
                        background: isHovered ? "rgba(153,50,204,0.15)" : "rgba(255,255,255,0.04)",
                        border: isHovered ? "1px solid rgba(153,50,204,0.30)" : "1px solid rgba(255,255,255,0.07)",
                        color: isHovered ? "#C878F0" : "#8888A8",
                        fontFamily: "'Geist', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
