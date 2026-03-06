import React, { useState } from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Layers, TrendingUp } from "lucide-react";

export function AXFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", label: "Data Insight",   desc: "흩어진 고객 행동 데이터를 수집하여 의미 있는 패턴을 머신러닝으로 분석합니다." },
    { num: "02", label: "UX Redesign",    desc: "도출된 인사이트를 바탕으로 마찰 없는 직관적인 사용자 인터페이스를 재설계합니다." },
    { num: "03", label: "Cloud Platform", desc: "트래픽 스파이크에도 견디는 MSA 기반의 안정적인 클라우드 네이티브 환경을 구축합니다." },
    { num: "04", label: "Growth Ops",     desc: "A/B 테스트와 실시간 데이터 모니터링으로 런칭 이후에도 끝없이 프로덕트를 진화시킵니다." },
  ];

  const nodes = [
    { icon: Compass,    title: "AI Strategy",    desc: "데이터 기반\n명확한 목표 수립" },
    { icon: Sparkles,   title: "Hyper UX",       desc: "초개인화\n사용자 경험" },
    { icon: Layers,     title: "Cloud Platform", desc: "유연하고 확장 가능한\n클라우드" },
    { icon: TrendingUp, title: "Growth Loop",    desc: "머신러닝 기반\n실시간 최적화" },
  ];

  return (
    <section className="w-full h-screen bg-white overflow-hidden flex items-center pt-[72px]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E8E8]" />
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[11px] font-semibold text-[#9932CC] tracking-[0.22em] uppercase mb-4"
          >
            Total Experience Framework
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="text-[48px] md:text-[60px] font-bold text-[#1A1A1A] leading-[1.18] tracking-[-0.03em]"
          >
            Total eXperience란?
          </motion.h2>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-12 gap-10">

          {/* Left: Operating Model 카드 2×2 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
            className="md:col-span-5 grid grid-cols-2 gap-3 content-start"
          >
            {nodes.map((node, i) => (
              <div
                key={i}
                className="bg-[#F8F8F8] border border-[#EEEEEE] rounded-[12px] p-4 group hover:border-[#9932CC] hover:shadow-[0_4px_16px_rgba(153,50,204,0.08)] transition-all duration-200"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[rgba(153,50,204,0.08)] flex items-center justify-center mb-3 group-hover:bg-[#9932CC] transition-colors duration-200">
                  <node.icon size={17} className="text-[#9932CC] group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-[13px] font-semibold text-[#1A1A1A] mb-1">{node.title}</h3>
                <p className="text-[11px] text-[#666] leading-[1.5] whitespace-pre-line">{node.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Right: 인터랙티브 스텝 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
            className="md:col-span-7"
          >
            <div className="relative border-l-[2px] border-[#E8E8E8] ml-5 flex flex-col">
              <div
                className="absolute left-[-2px] w-[2px] bg-[#9932CC] transition-all duration-400 ease-out"
                style={{ top: `${activeStep * 25 + 1}%`, height: '24%' }}
              />
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className="relative pl-12 py-6 cursor-pointer group"
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    <div className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-250 ${
                      isActive
                        ? 'bg-[#9932CC] text-white shadow-[0_0_16px_rgba(153,50,204,0.35)]'
                        : 'bg-[#F5F5F5] border border-[#E8E8E8] text-[#9932CC]'
                    }`}>
                      {step.num}
                    </div>
                    <h3 className={`text-[20px] font-semibold transition-colors duration-200 ${isActive ? 'text-[#1A1A1A]' : 'text-[#BBB] group-hover:text-[#888]'}`}>
                      {step.label}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[14px] text-[#555] leading-[1.65]">{step.desc}</p>
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
