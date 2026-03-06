import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const tabs = ["All", "Finance", "Commerce", "Platform"];

  const cases = [
    { id: 1, title: "A Financial App",       cat: "Finance",  summary: "차세대 디지털 뱅킹 플랫폼 구축",   tags: ["App", "Fintech", "UX"],    img: "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MjY5NTYyNnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, title: "Global Commerce",       cat: "Commerce", summary: "글로벌 이커머스 통합 UX 개선",      tags: ["Web", "Global", "Data"],   img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcyNjk0ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, title: "Telecom Data Platform", cat: "Platform", summary: "마이데이터 기반 초개인화 서비스",   tags: ["Data", "AI", "Cloud"],     img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMHNvZnR3YXJlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjY5NTYyNnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, title: "Smart Trading MTS",     cat: "Finance",  summary: "MTS(모바일 트레이딩) 3.0 리뉴얼", tags: ["App", "Trading", "Design"], img: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MjY5NTYyNnww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  const filteredCases = cases.filter((c) => activeTab === "All" || c.cat === activeTab);

  return (
    <section className="w-full h-screen bg-[#F5F3FF] overflow-hidden flex flex-col pt-[72px]" id="사례">
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full py-10 flex flex-col h-full">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 flex-shrink-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[48px] md:text-[60px] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.2]"
          >
            Wylie AX의 성공 사례
          </motion.h2>
          <div className="mt-4 md:mt-0 flex gap-0 border-b border-[#E8E8E8]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-[14px] font-medium transition-all duration-150 border-b-2 -mb-[2px] ${
                  activeTab === tab
                    ? "border-[#9932CC] text-[#9932CC]"
                    : "border-transparent text-[#666] hover:text-[#333]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[12px] overflow-hidden group cursor-pointer border border-[rgba(153,50,204,0.08)] hover:shadow-[0_8px_24px_rgba(153,50,204,0.12)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                onClick={() => setSelectedCase(item)}
              >
                <div className="overflow-hidden flex-shrink-0" style={{ height: '150px' }}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-white text-[#9932CC] border border-[rgba(153,50,204,0.20)] rounded-full text-[11px] font-medium uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold text-[#9932CC] mb-1">{item.cat}</p>
                  <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#555] mb-auto">{item.summary}</p>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#9932CC] transition-colors mt-4">
                    사례 보기 <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[rgba(0,0,0,0.72)] backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[880px] max-h-[90vh] overflow-y-auto bg-white rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.32)]"
            >
              <div className="sticky top-0 z-20 flex justify-end p-5">
                <button onClick={() => setSelectedCase(null)} className="p-2 text-[#999] hover:text-[#1A1A1A] transition-colors">
                  <X size={22} />
                </button>
              </div>
              <div className="px-8 md:px-14 pb-14 -mt-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCase.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 border border-[rgba(153,50,204,0.25)] text-[#9932CC] rounded-full text-[11px] font-medium uppercase">{tag}</span>
                  ))}
                </div>
                <h3 className="text-[32px] font-bold text-[#1A1A1A] leading-tight mb-2">{selectedCase.title}</h3>
                <p className="text-[16px] text-[#555] mb-7">{selectedCase.summary}</p>
                <div className="w-full rounded-[14px] overflow-hidden mb-10" style={{ aspectRatio: '21/9' }}>
                  <img src={selectedCase.img} alt="hero" className="w-full h-full object-cover" />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <div className="text-[10px] font-semibold text-[#9932CC] tracking-[0.18em] uppercase mb-2">Overview</div>
                      <p className="text-[15px] text-[#333] leading-relaxed">기존 레거시 시스템의 한계로 인해 사용자 이탈률이 증가하고 있었습니다. 모바일 환경에서의 최적화된 경험 제공이 시급한 과제였습니다.</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#9932CC] tracking-[0.18em] uppercase mb-2">Approach</div>
                      <p className="text-[15px] text-[#333] leading-relaxed">마이크로서비스 아키텍처 도입과 함께 사용자 심층 리서치를 통한 전면적인 UX 개편. AI 기반 개인화 추천 로직을 도입하여 전환율을 극대화했습니다.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[{ val: "+45%", label: "MAU Growth" }, { val: "-30%", label: "Server Cost" }, { val: "98%", label: "Client Satisfaction" }].map((kpi) => (
                      <div key={kpi.label} className="bg-[#F5F5F5] rounded-[10px] p-5 border border-[#E8E8E8]">
                        <div className="text-[28px] font-bold text-[#9932CC]">{kpi.val}</div>
                        <div className="text-[13px] text-[#555] mt-0.5">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
