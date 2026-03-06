import React from "react";
import { motion } from "motion/react";
import { Clock, Cpu, Puzzle, ShieldCheck, Target } from "lucide-react";

export function WhyWylie() {
  const features = [
    { icon: Clock,       num: "18년", title: "18년의 경험",          desc: "금융·이커머스·플랫폼 등 다양한 산업에서 검증된 컨설팅 이력" },
    { icon: Cpu,         num: "AI",   title: "AI 기술 리더십",       desc: "GenAI부터 데이터 파이프라인까지 최신 기술을 현업에 적용" },
    { icon: Puzzle,      num: "1",    title: "통합 솔루션 One-Stop", desc: "전략 수립부터 구축·운영까지 단일 팀이 end-to-end로 담당" },
    { icon: ShieldCheck, num: "A+",   title: "기업 신뢰도",          desc: "국내 주요 대기업과 금융사로부터 검증된 파트너십" },
    { icon: Target,      num: "ROI",  title: "성과 중심",            desc: "모든 프로젝트에 측정 가능한 비즈니스 임팩트 목표를 설정" },
  ];

  return (
    <section className="w-full bg-white flex-1 flex items-center pt-[72px] overflow-hidden">
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.15] mb-12"
        >
          Why Wylie
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 + i * 0.07 }}
              className="bg-[#F5F5F5] border border-[rgba(0,0,0,0.04)] rounded-[14px] p-6 group hover:bg-[rgba(153,50,204,0.04)] hover:border-[rgba(153,50,204,0.20)] transition-all duration-200 cursor-default"
            >
              <div className="w-[44px] h-[44px] rounded-full bg-[rgba(153,50,204,0.10)] flex items-center justify-center mb-4 group-hover:bg-[#9932CC] transition-colors duration-200">
                <feat.icon size={20} className="text-[#9932CC] group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
              </div>
              <div className="text-[36px] font-bold text-[#9932CC] leading-none mb-2">{feat.num}</div>
              <h3 className="text-[13px] font-semibold text-[#1A1A1A] mb-1.5">{feat.title}</h3>
              <p className="text-[11px] text-[#555] leading-[1.5]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
