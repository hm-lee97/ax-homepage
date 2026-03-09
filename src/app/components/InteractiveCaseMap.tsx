import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function InteractiveCaseMap() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, init: "FN", x: 20, y: 30, client: "A Financial",  cat: "Finance",  prob: "Legacy App UI",      app: "React Native Rewrite", res: "MAU +45%" },
    { id: 2, init: "CM", x: 45, y: 15, client: "B Commerce",   cat: "Commerce", prob: "High Bounce Rate",   app: "AI Recommendation",   res: "Conv. +22%" },
    { id: 3, init: "PL", x: 75, y: 25, client: "C Platform",   cat: "Platform", prob: "Server Overload",    app: "K8s Migration",        res: "Cost -30%" },
    { id: 4, init: "BN", x: 25, y: 65, client: "D Bank",       cat: "Finance",  prob: "Complex Onboarding", app: "UX Optimization",      res: "Drop-off -50%" },
    { id: 5, init: "AV", x: 55, y: 55, client: "E Aviation",   cat: "Platform", prob: "Data Silos",         app: "Unified Data Lake",    res: "Speed +2x" },
    { id: 6, init: "BT", x: 85, y: 50, client: "F Beauty",     cat: "Commerce", prob: "Offline Gap",        app: "AR Try-on App",        res: "Sales +15%" },
  ];

  const visibleNodes = nodes.filter((n) => activeFilter === "All" || n.cat === activeFilter);

  return (
    <section className="w-full h-screen bg-[#F5F5F5] overflow-hidden flex items-center pt-[72px]">
      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full">

        <div className="flex items-end justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-[48px] md:text-[60px] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.0]">
              Case Map
            </h2>
            <p className="text-[14px] text-[#555] mt-2">산업과 기술 역량이 교차하는 지점에서의 성공 사례를 탐색하세요.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            className="flex flex-wrap gap-2"
          >
            {["All", "Finance", "Commerce", "Platform"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`h-[34px] px-4 rounded-full text-[13px] font-medium transition-all duration-150 ${
                  activeFilter === f
                    ? "bg-[#9932CC] text-white"
                    : "bg-white text-[#555] border border-[#E0E0E0] hover:border-[#9932CC] hover:text-[#9932CC]"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="w-full bg-white rounded-[16px] border border-[#E8E8E8] relative overflow-hidden" style={{ height: 'calc(100vh - 280px)' }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-[1px] bg-[#EEEEEE]" />
            <div className="absolute h-full w-[1px] bg-[#EEEEEE]" />
          </div>
          <div className="absolute bottom-4 w-full text-center text-[12px] font-medium text-[#CCC] uppercase tracking-widest">
            Experience ←——————→ Platform
          </div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[12px] font-medium text-[#CCC] uppercase tracking-widest whitespace-nowrap">
            Strategy | Execution
          </div>

          <AnimatePresence>
            {visibleNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute"
                style={{ top: `${node.y}%`, left: `${node.x}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[12px] cursor-pointer transition-all duration-200 ${
                  hoveredNode === node.id
                    ? "bg-[#9932CC] text-white shadow-[0_4px_16px_rgba(153,50,204,0.35)] scale-125 z-20"
                    : "bg-[rgba(153,50,204,0.10)] border-2 border-[#9932CC] text-[#9932CC] z-10"
                }`}>
                  {node.init}
                </div>
                <AnimatePresence>
                  {hoveredNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-50 bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[210px] bg-[#1A1A1A] rounded-[10px] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] pointer-events-none"
                    >
                      <div className="text-[13px] font-semibold text-white mb-2">{node.client}</div>
                      <div className="text-[12px] text-[#999] mb-0.5">Problem: <span className="text-[#CCC]">{node.prob}</span></div>
                      <div className="text-[12px] text-[#999] mb-0.5">Approach: <span className="text-[#CCC]">{node.app}</span></div>
                      <div className="text-[12px] text-[#999] mt-2 pt-2 border-t border-[rgba(255,255,255,0.07)]">
                        Result: <span className="text-[#9932CC] font-semibold">{node.res}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
