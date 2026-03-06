import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Insights() {
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1760931969401-9bd6ee902798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZ2xvd2luZ3xlbnwxfHx8fDE3NzI2OTQ3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      cat: "AI & Experience",
      title: "Generative AI가 바꾸는\n엔터프라이즈 UX의 미래",
      summary: "대형 언어 모델이 엔터프라이즈 소프트웨어의 인터페이스 패러다임을 어떻게 재정의하고 있는지 분석합니다.",
    },
    {
      img: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNjY1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      cat: "Engineering",
      title: "Zero-Downtime 마이그레이션을\n위한 클라우드 아키텍처 전략",
      summary: "무중단 배포와 블루-그린 전략으로 레거시 시스템을 클라우드 네이티브로 전환하는 실전 가이드.",
    },
    {
      img: "https://images.unsplash.com/photo-1771930629966-3c6fb074bded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9kZXJuJTIwdWl8ZW58MXx8fHwxNzcyNjk1NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      cat: "Design System",
      title: "데이터에 기반한\n컴포넌트 설계 가이드",
      summary: "사용자 행동 데이터를 설계 의사결정에 연결하는 체계적인 컴포넌트 시스템 구축 방법론.",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#F5F5F5] overflow-hidden flex items-center pt-[72px]" id="인사이트">
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-[48px] md:text-[60px] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.0]">AX Insights</h2>
            <p className="text-[15px] text-[#555] mt-3">AI와 경험 설계가 만드는 디지털 전환 인사이트</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-[#9932CC] text-[14px] font-medium hover:underline"
          >
            전체 보기 <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.08 }}
              className="group cursor-pointer flex flex-col bg-white rounded-[14px] overflow-hidden border border-[rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-full overflow-hidden" style={{ height: '190px' }}>
                <img src={item.img} alt={item.cat} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-semibold text-[#9932CC] tracking-[0.15em] uppercase mb-2">{item.cat}</div>
                <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-[1.35] mb-2 whitespace-pre-line">{item.title}</h3>
                <p className="text-[13px] text-[#555] leading-[1.6] mb-4 flex-grow">{item.summary}</p>
                <span className="text-[12px] font-medium text-[#9932CC] flex items-center gap-1">
                  Read insight <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
