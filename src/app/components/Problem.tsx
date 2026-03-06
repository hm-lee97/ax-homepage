import React from "react";
import { motion } from "motion/react";
import { SplitSquareHorizontal, Hourglass, RotateCcw } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: SplitSquareHorizontal,
      title: "채널은 늘었지만\n경험은 단절됩니다",
      desc: "여러 서비스와 플랫폼이 분리되어 운영되며, 데이터 사일로 현상으로 인해 일관된 여정을 제공하지 못합니다.",
    },
    {
      icon: Hourglass,
      title: "데이터는 있지만\n의사결정이 느립니다",
      desc: "수집된 데이터는 많지만, 이를 AI와 결합하여 실시간 비즈니스 임팩트로 변환하는 파이프라인이 부재합니다.",
    },
    {
      icon: RotateCcw,
      title: "개선이\n반복되지 않습니다",
      desc: "구축 후 방치되는 시스템. 사용자 피드백이 제품 개선으로 이어지는 자동화된 사이클이 없습니다.",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#F5F5F5] overflow-hidden flex items-center pt-[72px]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E8E8]" />
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.03em] mb-5"
          >
            디지털 경험은 여전히<br />단절되어 있습니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            className="text-[16px] text-[#555] max-w-[480px]"
          >
            채널·데이터·UX·운영이 따로 움직이면 개선이 누적되지 않습니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.22 + i * 0.08 }}
              className="bg-white border border-[rgba(0,0,0,0.06)] rounded-[16px] p-8 group hover:shadow-[0_8px_32px_rgba(153,50,204,0.10)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-[44px] h-[44px] rounded-xl border border-[#E8E8E8] flex items-center justify-center text-[#9932CC] mb-7 group-hover:bg-[#9932CC] group-hover:border-[#9932CC] group-hover:text-white transition-all duration-200">
                <prob.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-semibold text-[#1A1A1A] leading-[1.35] whitespace-pre-line mb-3">
                {prob.title}
              </h3>
              <p className="text-[14px] text-[#555] leading-[1.65]">{prob.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
