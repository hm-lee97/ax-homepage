import React, { useState } from "react";
import { motion } from "motion/react";
import { SplitSquareHorizontal, Hourglass, RotateCcw } from "lucide-react";

export function Problem() {
  const [hovered, setHovered] = useState<number | null>(null);

  const problems = [
    {
      num: "01",
      icon: SplitSquareHorizontal,
      title: "채널은 늘었지만\n경험은 단절됩니다",
      desc: "여러 서비스와 플랫폼이 분리되어 운영되며, 데이터 사일로 현상으로 인해 일관된 여정을 제공하지 못합니다.",
      accent: "#9932CC",
    },
    {
      num: "02",
      icon: Hourglass,
      title: "데이터는 있지만\n의사결정이 느립니다",
      desc: "수집된 데이터는 많지만, 이를 AI와 결합하여 실시간 비즈니스 임팩트로 변환하는 파이프라인이 부재합니다.",
      accent: "#7A28B0",
    },
    {
      num: "03",
      icon: RotateCcw,
      title: "개선이\n반복되지 않습니다",
      desc: "구축 후 방치되는 시스템. 사용자 피드백이 제품 개선으로 이어지는 자동화된 사이클이 없습니다.",
      accent: "#5E1E8A",
    },
  ];

  return (
    <section className="w-full md:h-screen bg-[#F4F2EF] overflow-x-hidden md:overflow-hidden flex items-center pt-[72px] relative">
      {/* Light grid bg */}
      <div className="absolute inset-0 pointer-events-none grid-bg-light" />

      {/* Large decorative section label */}
      <div
        className="absolute top-[72px] right-10 pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(100px, 16vw, 220px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(0,0,0,0.028)",
          letterSpacing: "-0.06em",
        }}
      >
        02
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1400px] w-full relative z-10 py-10 md:py-0">

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
              The Challenge
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="font-black text-[#100E18] leading-[1.08] tracking-[-0.045em] max-w-[640px]"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            }}
          >
            디지털 경험은<br />여전히 단절되어<br />있습니다
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-[14px] text-[#666] mt-4 max-w-[400px] leading-[1.7]"
          >
            채널·데이터·UX·운영이 따로 움직이면 개선이 누적되지 않습니다.
          </motion.p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((prob, i) => {
            const isHovered = hovered === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.18 + i * 0.1 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative bg-white rounded-[20px] p-8 overflow-hidden cursor-default group border border-[rgba(0,0,0,0.05)] transition-all duration-300"
                style={{
                  boxShadow: isHovered
                    ? "0 16px 48px rgba(153,50,204,0.16), 0 4px 16px rgba(0,0,0,0.06)"
                    : "0 2px 16px rgba(0,0,0,0.04)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                {/* Large background number */}
                <div
                  className="absolute -bottom-4 -right-2 pointer-events-none select-none leading-none transition-all duration-500"
                  style={{
                    fontSize: "120px",
                    fontWeight: 900,
                    fontFamily: "'Geist', sans-serif",
                    color: isHovered ? "rgba(153,50,204,0.07)" : "rgba(0,0,0,0.035)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {prob.num}
                </div>

                {/* Purple accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] rounded-t-[20px] transition-all duration-300"
                  style={{
                    background: isHovered
                      ? `linear-gradient(90deg, ${prob.accent}, #C878F0)`
                      : "transparent",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-[48px] h-[48px] rounded-2xl flex items-center justify-center mb-7 transition-all duration-300"
                  style={{
                    background: isHovered ? "#9932CC" : "rgba(153,50,204,0.08)",
                    border: isHovered ? "1px solid #9932CC" : "1px solid rgba(153,50,204,0.15)",
                  }}
                >
                  <prob.icon
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: isHovered ? "#fff" : "#9932CC" }}
                  />
                </div>

                <h3
                  className="font-black text-[#100E18] leading-[1.28] whitespace-pre-line mb-3 tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(18px, 1.6vw, 22px)",
                    fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  }}
                >
                  {prob.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-[1.7] relative z-10">{prob.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
