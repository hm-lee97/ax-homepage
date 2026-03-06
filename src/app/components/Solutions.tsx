import React from "react";
import { motion } from "motion/react";
import { BarChart3, LayoutGrid, PenTool, Cloud, ArrowUpRight } from "lucide-react";

export function Solutions() {
  const cards = [
    {
      icon: BarChart3,
      title: "데이터 & 인사이트",
      desc: "고객 행동 데이터를 실시간으로 분석하고 실행 가능한 비즈니스 인사이트를 대시보드로 제공합니다.",
      tags: ["Fromto[X]", "NEP", "Analytics"],
      colSpan: "md:col-span-2",
    },
    {
      icon: LayoutGrid,
      title: "플랫폼 구축",
      desc: "마이크로서비스 아키텍처(MSA) 기반의 확장 가능한 프론트엔드 및 백엔드 개발.",
      tags: ["Cloud", "SaaS"],
      colSpan: "md:col-span-1",
    },
    {
      icon: PenTool,
      title: "UX/UI 설계",
      desc: "데이터를 기반으로 사용자 경험을 근본적으로 개선하는 하이퍼 개인화 인터페이스 설계.",
      tags: ["Research", "Design"],
      colSpan: "md:col-span-1",
    },
    {
      icon: Cloud,
      title: "클라우드 & SaaS",
      desc: "온프레미스 인프라를 클라우드로 마이그레이션하고 무중단 배포(CI/CD) 파이프라인을 구축합니다.",
      tags: ["우리가잇다", "Migration", "Ops"],
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#1A1A1A] overflow-hidden flex items-center pt-[72px]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(255,255,255,0.06)]" />
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[11px] font-semibold text-[#C060E0] tracking-[0.22em] uppercase mb-4"
          >
            Core Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="text-[48px] md:text-[64px] font-bold text-white leading-[1.2] tracking-[-0.03em] mb-3"
          >
            Wylie AX의 4가지<br />핵심 서비스
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.18 }}
            className="text-[15px] text-[#888]"
          >
            전략 → 설계 → 구축 → 운영/최적화까지 One-Stop
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.28 + i * 0.07 }}
              className={`${card.colSpan} bg-[#242424] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-7 flex flex-col justify-between group hover:border-[rgba(153,50,204,0.3)] hover:shadow-[0_0_24px_rgba(153,50,204,0.10)] transition-all duration-200 min-h-[190px] cursor-pointer`}
            >
              <div>
                <div className="w-[44px] h-[44px] bg-[rgba(153,50,204,0.10)] border border-[rgba(153,50,204,0.18)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#9932CC] group-hover:border-[#9932CC] transition-all duration-200">
                  <card.icon size={20} strokeWidth={1.5} className="text-[#9932CC] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-[18px] font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-[13px] text-[#AAAAAA] leading-[1.65]">{card.desc}</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#2A2A2A] border border-[#444] rounded-full text-[11px] text-[#BBB]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[12px] text-[#9932CC] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  자세히 보기 <ArrowUpRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
