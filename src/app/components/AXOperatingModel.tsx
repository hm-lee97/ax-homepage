import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Layers, TrendingUp } from "lucide-react";

export function AXOperatingModel() {
  const nodes = [
    { icon: Compass,    title: "AI Strategy",    desc: "데이터 사이언스 기반의\n명확한 목표 수립" },
    { icon: Sparkles,   title: "Hyper UX",       desc: "개인화된 초연결\n사용자 경험 설계" },
    { icon: Layers,     title: "Cloud Platform", desc: "유연하고 확장 가능한\n네이티브 클라우드" },
    { icon: TrendingUp, title: "Growth Loop",    desc: "머신러닝 기반의\n실시간 성과 최적화" },
  ];

  return (
    <section className="w-full h-screen bg-white overflow-hidden flex items-center pt-[72px]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E8E8]" />
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[12px] font-semibold text-[#9932CC] tracking-[0.22em] uppercase mb-4"
          >
            AX Operating Model
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] tracking-[-0.03em]"
          >
            AX Operating Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            className="text-[16px] text-[#555] leading-[1.65] max-w-[560px] mt-5"
          >
            전략·경험·플랫폼·성장을 하나의 실행 체계로 연결합니다.
            단계별 개선이 아닌 통합된 피드백 루프로 지속적 혁신을 구현합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.28 + i * 0.07 }}
              className="bg-white border border-[#E8E8E8] rounded-[12px] p-7 group hover:border-[#9932CC] hover:shadow-[0_8px_32px_rgba(153,50,204,0.08)] transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-[rgba(153,50,204,0.08)] flex items-center justify-center mb-5 group-hover:bg-[#9932CC] transition-colors duration-200">
                <node.icon size={22} className="text-[#9932CC] group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-2">{node.title}</h3>
              <p className="text-[13px] text-[#555] leading-relaxed whitespace-pre-line">{node.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
