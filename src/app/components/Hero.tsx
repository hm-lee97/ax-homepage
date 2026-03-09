import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const NODES = [
  { angle: -90, label: "Strategy",   sub: "Vision · Roadmap" },
  { angle:   0, label: "Experience", sub: "Journey · UX" },
  { angle:  90, label: "Platform",   sub: "Cloud · Stack" },
  { angle: 180, label: "Growth",     sub: "Analytics · Ops" },
];

function OrbitalDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: -8 }}
      animate={{ opacity: 1, scale: 1,    rotate: 0  }}
      transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[460px] aspect-square relative"
    >
      {/* Concentric ring 1 */}
      <div className="absolute inset-0 rounded-full border border-[rgba(153,50,204,0.07)]" />
      {/* Concentric ring 2 */}
      <div className="absolute inset-[11%] rounded-full border border-[rgba(153,50,204,0.11)]" />
      {/* Concentric ring 3 */}
      <div className="absolute inset-[23%] rounded-full border border-[rgba(153,50,204,0.18)]" />

      {/* Outer orbit dot — slow clockwise */}
      <div
        className="absolute inset-[3%] rounded-full"
        style={{ animation: "orbit-cw 22s linear infinite" }}
      >
        <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#9932CC]"
          style={{ boxShadow: "0 0 14px rgba(153,50,204,0.95), 0 0 32px rgba(153,50,204,0.45)" }} />
      </div>

      {/* Mid orbit dot — medium, counter-clockwise */}
      <div
        className="absolute inset-[14%] rounded-full"
        style={{ animation: "orbit-ccw 14s linear infinite" }}
      >
        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFD700]"
          style={{ boxShadow: "0 0 12px rgba(255,215,0,0.9), 0 0 24px rgba(255,215,0,0.4)" }} />
      </div>

      {/* Inner orbit dot — fast clockwise */}
      <div
        className="absolute inset-[26%] rounded-full"
        style={{ animation: "orbit-cw 8s linear infinite" }}
      >
        <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C860F0]"
          style={{ boxShadow: "0 0 10px rgba(200,96,240,0.9)" }} />
      </div>

      {/* Dashed cross-hair lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
        <line x1="230" y1="190" x2="230" y2="62"  stroke="#9932CC" strokeOpacity="0.13" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="270" y1="230" x2="398" y2="230" stroke="#9932CC" strokeOpacity="0.13" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="230" y1="270" x2="230" y2="398" stroke="#9932CC" strokeOpacity="0.13" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="190" y1="230" x2="62"  y2="230" stroke="#9932CC" strokeOpacity="0.13" strokeWidth="1" strokeDasharray="3 6" />
      </svg>

      {/* 4 node labels */}
      {NODES.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const r = 47;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
            className="absolute w-[108px] h-[56px] bg-[#0D0D14] border border-[rgba(255,255,255,0.06)] rounded-xl flex flex-col items-center justify-center hover:border-[rgba(153,50,204,0.45)] hover:bg-[rgba(153,50,204,0.07)] transition-all duration-300 cursor-pointer"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className="text-[11px] font-semibold text-[#D0CDE8]"
              style={{ fontFamily: "'Geist', sans-serif" }}>{node.label}</span>
            <span className="text-[11px] text-[#8888A8] mt-0.5">{node.sub}</span>
          </motion.div>
        );
      })}

      {/* Center AX */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] rounded-full bg-[#9932CC] flex items-center justify-center z-30"
        style={{
          boxShadow:
            "0 0 0 1px rgba(153,50,204,0.35), 0 0 40px rgba(153,50,204,0.55), 0 0 80px rgba(153,50,204,0.22)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      >
        <span className="text-white font-black text-[15px] tracking-[0.06em]"
          style={{ fontFamily: "'Geist', sans-serif" }}>AX</span>
      </div>
    </motion.div>
  );
}

export function Hero({ onNavigate }: { onNavigate?: (idx: number) => void }) {
  const stats = [
    { value: "18년", label: "컨설팅 경험" },
    { value: "200+", label: "성공 사례" },
    { value: "98%",  label: "고객 만족도" },
  ];

  return (
    <section className="relative w-full md:h-screen bg-[#060608] overflow-x-hidden md:overflow-hidden flex items-center pt-[72px]">

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-[0.038]" />

      {/* Purple radial — top-right */}
      <div className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(153,50,204,0.14) 0%, transparent 65%)" }} />

      {/* Purple radial — bottom-left */}
      <div className="absolute -bottom-64 -left-32 w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(153,50,204,0.07) 0%, transparent 65%)" }} />

      {/* Giant ghost "AX" */}
      <div
        className="absolute right-[-2vw] bottom-[-2vw] pointer-events-none select-none leading-none"
        style={{
          fontSize: "42vw",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(255,255,255,0.016)",
          letterSpacing: "-0.07em",
        }}
      >
        AX
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1400px] w-full grid md:grid-cols-12 gap-8 relative z-10 py-10 md:py-0">

        {/* Left */}
        <div className="md:col-span-7 flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-7 h-[1px] bg-[#9932CC]" />
            <span className="text-[12px] font-semibold text-[#9932CC] tracking-[0.30em] uppercase"
              style={{ fontFamily: "'Geist', sans-serif" }}>
              Total Experience Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-black text-white leading-[1.04] tracking-[-0.05em] max-w-[780px]"
            style={{
              fontSize: "clamp(52px, 7.2vw, 96px)",
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            }}
          >
            고객 경험의<br />
            <span style={{
              backgroundImage: "linear-gradient(120deg, #9932CC 0%, #C878F0 50%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              모든 순간을
            </span>
            <br />최적화하다
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.26 }}
            className="text-[15px] text-[#8A8A9E] mt-7 max-w-[420px] leading-[1.72]"
          >
            데이터 기반 전략에서 사용자 중심 설계까지,<br />Total eXperience 컨설팅
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 }}
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={() => onNavigate?.(3)}
              className="group relative h-[50px] px-8 text-white text-[13px] font-semibold rounded-full flex items-center gap-2.5 overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "#9932CC",
                boxShadow: "0 0 28px rgba(153,50,204,0.5), 0 0 60px rgba(153,50,204,0.2)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2.5"
                style={{ fontFamily: "'Geist', sans-serif" }}>
                AX 솔루션 보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-[#B044E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => onNavigate?.(4)}
              className="h-[50px] px-8 border border-[rgba(255,255,255,0.09)] text-[#8A8AA4] text-[13px] font-medium rounded-full hover:border-[rgba(153,50,204,0.45)] hover:text-[#C0C0D8] transition-all duration-300"
            >
              성공 사례
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.52 }}
            className="mt-14 flex items-stretch gap-8 md:gap-12"
          >
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div className="w-[1px] bg-[rgba(255,255,255,0.06)] self-stretch" />
                )}
                <div className="flex flex-col">
                  <span
                    className="font-black text-[#FFD700] leading-none tracking-[-0.03em]"
                    style={{
                      fontSize: "clamp(28px, 2.8vw, 42px)",
                      fontFamily: "'Geist', sans-serif",
                      textShadow: "0 0 20px rgba(255,215,0,0.35)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-[#7070A0] mt-1.5 tracking-[0.14em] uppercase font-medium"
                    style={{ fontFamily: "'Geist', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Right — Orbital diagram */}
        <div className="md:col-span-5 hidden md:flex items-center justify-center relative">
          <OrbitalDiagram />
        </div>

      </div>
    </section>
  );
}
