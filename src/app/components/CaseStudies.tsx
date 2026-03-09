import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

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
    <section className="w-full md:h-screen bg-[#F0EDF8] overflow-x-hidden md:overflow-hidden flex flex-col pt-[72px] relative" id="사례">
      {/* Subtle light grid */}
      <div className="absolute inset-0 pointer-events-none grid-bg-light" />

      {/* Large bg number */}
      <div
        className="absolute bottom-0 right-6 pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(100px, 17vw, 220px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(153,50,204,0.048)",
          letterSpacing: "-0.06em",
        }}
      >
        05
      </div>

      <div className="mx-auto px-6 md:px-14 max-w-[1400px] w-full py-8 flex flex-col md:h-full relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 flex-shrink-0 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-[1px] bg-[#9932CC]" />
              <span className="text-[12px] font-semibold text-[#9932CC] tracking-[0.28em] uppercase"
                style={{ fontFamily: "'Geist', sans-serif" }}>
                Success Stories
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-[#100E18] tracking-[-0.045em] leading-[1.08]"
              style={{
                fontSize: "clamp(36px, 4.8vw, 62px)",
                fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              }}
            >
              Wylie AX의 성공 사례
            </motion.h2>
          </div>

          {/* Tab filter */}
          <div className="flex gap-1.5 p-1 bg-[rgba(153,50,204,0.07)] rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-3 text-[12px] font-semibold rounded-full transition-all duration-200"
                style={{
                  background: activeTab === tab ? "#9932CC" : "transparent",
                  color: activeTab === tab ? "#fff" : "#666",
                  boxShadow: activeTab === tab ? "0 2px 12px rgba(153,50,204,0.35)" : "none",
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-1 md:min-h-0">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="relative rounded-[18px] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCase(item)}
                style={{ minHeight: "260px" }}
              >
                {/* Full-bleed image */}
                <div className="absolute inset-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(8,6,16,0.92) 0%, rgba(8,6,16,0.5) 50%, rgba(8,6,16,0.1) 100%)",
                    }}
                  />
                </div>

                {/* Case number — top left */}
                <div
                  className="absolute top-5 left-6 font-black leading-none pointer-events-none select-none"
                  style={{
                    fontSize: "52px",
                    fontFamily: "'Geist', sans-serif",
                    color: "rgba(255,255,255,0.08)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {String(item.id).padStart(2, "0")}
                </div>

                {/* Category badge — top right */}
                <div className="absolute top-5 right-5">
                  <span
                    className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                    style={{
                      background: "rgba(153,50,204,0.25)",
                      border: "1px solid rgba(153,50,204,0.45)",
                      color: "#D09EF0",
                      fontFamily: "'Geist', sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {item.cat}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.55)",
                          fontFamily: "'Geist', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-black text-white leading-tight mb-1 tracking-[-0.02em]"
                    style={{
                      fontSize: "clamp(16px, 1.5vw, 20px)",
                      fontFamily: "'Geist', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[rgba(255,255,255,0.5)]">{item.summary}</p>
                    <ArrowUpRight
                      size={18}
                      className="text-[#9932CC] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 ml-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[rgba(4,2,12,0.82)] backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              className="relative w-full max-w-[880px] max-h-[90vh] overflow-y-auto bg-white rounded-[24px]"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
            >
              <div className="sticky top-0 z-20 flex justify-end p-4">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[#999] hover:text-[#1A1A1A] hover:bg-[#F0F0F0] transition-all"
                  aria-label="닫기"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-8 md:px-14 pb-14 -mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCase.tags.map((tag: string) => (
                    <span key={tag}
                      className="px-3 py-1 border border-[rgba(153,50,204,0.25)] text-[#9932CC] rounded-full text-[12px] font-semibold uppercase tracking-wide"
                      style={{ fontFamily: "'Geist', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="font-black text-[#100E18] leading-tight mb-2 tracking-[-0.03em]"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)", fontFamily: "'Geist', sans-serif" }}
                >
                  {selectedCase.title}
                </h3>
                <p className="text-[15px] text-[#555] mb-7">{selectedCase.summary}</p>
                <div className="w-full rounded-[16px] overflow-hidden mb-10" style={{ aspectRatio: "21/9" }}>
                  <img src={selectedCase.img} alt="hero" className="w-full h-full object-cover" />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <div className="text-[12px] font-semibold text-[#9932CC] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Geist', sans-serif" }}>Overview</div>
                      <p className="text-[14px] text-[#333] leading-relaxed">기존 레거시 시스템의 한계로 인해 사용자 이탈률이 증가하고 있었습니다. 모바일 환경에서의 최적화된 경험 제공이 시급한 과제였습니다.</p>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-[#9932CC] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "'Geist', sans-serif" }}>Approach</div>
                      <p className="text-[14px] text-[#333] leading-relaxed">마이크로서비스 아키텍처 도입과 함께 사용자 심층 리서치를 통한 전면적인 UX 개편. AI 기반 개인화 추천 로직을 도입하여 전환율을 극대화했습니다.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[{ val: "+45%", label: "MAU Growth" }, { val: "-30%", label: "Server Cost" }, { val: "98%", label: "Client Satisfaction" }].map((kpi) => (
                      <div key={kpi.label} className="rounded-[12px] p-5"
                        style={{ background: "linear-gradient(135deg, #F8F5FF 0%, #F0E8FF 100%)", border: "1px solid rgba(153,50,204,0.12)" }}>
                        <div
                          className="font-black text-[#9932CC] leading-none mb-1"
                          style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontFamily: "'Geist', sans-serif" }}
                        >
                          {kpi.val}
                        </div>
                        <div className="text-[13px] text-[#666] mt-0.5"
                          style={{ fontFamily: "'Geist', sans-serif" }}>{kpi.label}</div>
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
