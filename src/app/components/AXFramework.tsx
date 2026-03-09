import React, { useState } from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Layers, TrendingUp } from "lucide-react";

const NODE_ICONS = [Compass, Sparkles, Layers, TrendingUp];
const NODE_LABELS = ["AI Strategy", "Hyper UX", "Cloud Platform", "Growth Loop"];
const NODE_SUBS   = ["데이터 기반\n명확한 목표 수립", "초개인화\n사용자 경험", "유연하고 확장 가능한\n클라우드", "머신러닝 기반\n실시간 최적화"];

function FrameworkOrbit() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[380px] aspect-square relative mx-auto">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-[rgba(153,50,204,0.10)]" />
      <div className="absolute inset-[13%] rounded-full border border-[rgba(153,50,204,0.15)]" />
      <div className="absolute inset-[27%] rounded-full border border-[rgba(153,50,204,0.22)]" />

      {/* Rotating accent dots */}
      <div className="absolute inset-[5%] rounded-full" style={{ animation: "orbit-cw 28s linear infinite" }}>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9932CC]"
          style={{ boxShadow: "0 0 12px rgba(153,50,204,0.8)" }} />
      </div>
      <div className="absolute inset-[18%] rounded-full" style={{ animation: "orbit-ccw 18s linear infinite" }}>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFD700]"
          style={{ boxShadow: "0 0 8px rgba(255,215,0,0.7)" }} />
      </div>

      {/* Cross hairs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 380">
        <line x1="190" y1="165" x2="190" y2="50"  stroke="#9932CC" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="215" y1="190" x2="330" y2="190" stroke="#9932CC" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="190" y1="215" x2="190" y2="330" stroke="#9932CC" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="165" y1="190" x2="50"  y2="190" stroke="#9932CC" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 6" />
      </svg>

      {/* 4 nodes at compass points */}
      {[
        { angle: -90, label: NODE_LABELS[0], sub: NODE_SUBS[0], Icon: NODE_ICONS[0] },
        { angle:   0, label: NODE_LABELS[1], sub: NODE_SUBS[1], Icon: NODE_ICONS[1] },
        { angle:  90, label: NODE_LABELS[2], sub: NODE_SUBS[2], Icon: NODE_ICONS[2] },
        { angle: 180, label: NODE_LABELS[3], sub: NODE_SUBS[3], Icon: NODE_ICONS[3] },
      ].map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const r = 46;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        const isActive = activeNode === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
            onMouseEnter={() => setActiveNode(i)}
            onMouseLeave={() => setActiveNode(null)}
            className="absolute w-[100px] h-[72px] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-250 gap-1"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              background: isActive ? "#9932CC" : "rgba(255,255,255,0.9)",
              border: isActive ? "1px solid #9932CC" : "1px solid rgba(153,50,204,0.12)",
              boxShadow: isActive ? "0 4px 24px rgba(153,50,204,0.35)" : "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <node.Icon
              size={15}
              strokeWidth={1.5}
              style={{ color: isActive ? "#fff" : "#9932CC" }}
            />
            <span className="text-[11px] font-bold leading-none"
              style={{ color: isActive ? "#fff" : "#1A1A1A", fontFamily: "'Geist', sans-serif" }}>
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-[#9932CC] flex items-center justify-center z-20"
        style={{
          boxShadow: "0 0 0 1px rgba(153,50,204,0.25), 0 0 32px rgba(153,50,204,0.45)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      >
        <span className="text-white font-black text-[12px] tracking-[0.06em]"
          style={{ fontFamily: "'Geist', sans-serif" }}>TX</span>
      </div>
    </div>
  );
}

export function AXFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", label: "Data Insight",   desc: "흩어진 고객 행동 데이터를 수집하여 의미 있는 패턴을 머신러닝으로 분석합니다." },
    { num: "02", label: "UX Redesign",    desc: "도출된 인사이트를 바탕으로 마찰 없는 직관적인 사용자 인터페이스를 재설계합니다." },
    { num: "03", label: "Cloud Platform", desc: "트래픽 스파이크에도 견디는 MSA 기반의 안정적인 클라우드 네이티브 환경을 구축합니다." },
    { num: "04", label: "Growth Ops",     desc: "A/B 테스트와 실시간 데이터 모니터링으로 런칭 이후에도 끝없이 프로덕트를 진화시킵니다." },
  ];

  return (
    <section className="w-full md:h-screen bg-white overflow-x-hidden md:overflow-hidden flex items-center pt-[72px] relative">
      {/* Subtle light grid */}
      <div className="absolute inset-0 pointer-events-none grid-bg-light" />

      {/* Large bg number */}
      <div
        className="absolute bottom-0 left-6 pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(100px, 18vw, 240px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(153,50,204,0.042)",
          letterSpacing: "-0.06em",
        }}
      >
        03
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
              Total Experience Framework
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="font-black text-[#100E18] leading-[1.08] tracking-[-0.045em]"
            style={{
              fontSize: "clamp(38px, 5vw, 66px)",
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            }}
          >
            Total eXperience란?
          </motion.h2>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* Left: Orbital visualization */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
            className="hidden md:block md:col-span-5"
          >
            <FrameworkOrbit />
          </motion.div>

          {/* Right: Interactive steps */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
            className="col-span-full md:col-span-7"
          >
            <div className="relative border-l-[2px] border-[#EBEBEB] ml-5 flex flex-col">
              {/* Active indicator */}
              <div
                className="absolute left-[-2px] w-[2px] bg-[#9932CC] transition-all duration-350 ease-out"
                style={{
                  top: `${activeStep * 25 + 1}%`,
                  height: "23.5%",
                  boxShadow: "0 0 8px rgba(153,50,204,0.6)",
                }}
              />

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className="relative pl-12 py-[22px] cursor-pointer group"
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    {/* Step circle */}
                    <div
                      className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[12px] font-black transition-all duration-250"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        background: isActive ? "#9932CC" : "#F5F5F5",
                        border: isActive ? "none" : "1px solid #E8E8E8",
                        color: isActive ? "#fff" : "#9932CC",
                        boxShadow: isActive ? "0 0 18px rgba(153,50,204,0.45)" : "none",
                      }}
                    >
                      {step.num}
                    </div>

                    <h3
                      className="font-black transition-colors duration-200 tracking-[-0.02em]"
                      style={{
                        fontSize: "clamp(16px, 1.5vw, 20px)",
                        fontFamily: "'Geist', sans-serif",
                        color: isActive ? "#100E18" : "#888888",
                      }}
                    >
                      {step.label}
                    </h3>

                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: isActive ? "72px" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? "8px" : 0 }}
                    >
                      <p className="text-[13px] text-[#666] leading-[1.68]">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
