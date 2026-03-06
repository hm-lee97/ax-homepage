import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero({ onNavigate }: { onNavigate?: (idx: number) => void }) {
  const stats = [
    { value: "18년", label: "컨설팅 경험" },
    { value: "200+", label: "성공 사례" },
    { value: "98%", label: "고객 만족도" },
  ];

  return (
    <section className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden flex items-center pt-[72px]">
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(153,50,204,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="mx-auto px-8 md:px-14 max-w-[1400px] w-full grid md:grid-cols-12 gap-10 relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <div className="text-[11px] font-semibold text-[#C060E0] tracking-[0.22em] uppercase mb-6">
            Total Experience Consulting
          </div>

          <h1 className="text-[56px] md:text-[80px] font-bold text-white leading-[1.18] tracking-[-0.04em] max-w-[820px]">
            Wylie AX Center —<br />
            고객 경험의 모든<br />
            순간을 최적화하다
          </h1>

          <p className="text-[18px] font-medium text-[#9932CC] mt-7">
            세상에 없던 새로운 판을 만듭니다
          </p>
          <p className="text-[15px] text-[#8A8A9A] mt-2 max-w-[480px] leading-[1.65]">
            데이터 기반 전략에서 사용자 중심 설계까지, Total eXperience 컨설팅
          </p>

          <div className="mt-10">
            <button
              onClick={() => onNavigate?.(3)}
              className="h-[52px] px-8 bg-[#9932CC] text-white text-[15px] font-semibold rounded-lg hover:bg-[#B44DE0] transition-colors duration-200 flex items-center gap-2"
            >
              AX 솔루션 보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-14 flex items-center gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="w-[1px] h-[40px] bg-[#2A2A2A]" />}
                <div className="flex flex-col">
                  <span className="text-[36px] font-bold text-[#FFD700] leading-none mb-1">{stat.value}</span>
                  <span className="text-[12px] text-[#8A8A9A]">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right — AX Architecture Diagram */}
        <div className="md:col-span-5 hidden md:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[420px] aspect-square relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-[#9932CC] rounded-full flex items-center justify-center z-20 shadow-[0_0_32px_rgba(153,50,204,0.4)]">
              <span className="text-white font-bold text-[12px] tracking-wide">AX Core</span>
            </div>
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 420 420">
              <line x1="210" y1="175" x2="210" y2="70"  stroke="#9932CC" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="245" y1="210" x2="350" y2="210" stroke="#9932CC" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="245" x2="210" y2="350" stroke="#9932CC" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="175" y1="210" x2="70"  y2="210" stroke="#9932CC" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            {[
              { top: "5%",  left: "50%", title: "Strategy",   sub: "Vision · Roadmap" },
              { top: "50%", left: "95%", title: "Experience", sub: "Journey · UX" },
              { top: "95%", left: "50%", title: "Platform",   sub: "Cloud · Integration" },
              { top: "50%", left: "5%",  title: "Growth",     sub: "Analytics · Ops" },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="absolute w-[124px] h-[68px] bg-[#111] border border-[rgba(255,255,255,0.07)] rounded-xl flex flex-col items-center justify-center hover:border-[rgba(153,50,204,0.35)] transition-colors duration-200 cursor-pointer z-30"
                style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
              >
                <span className="text-[12px] font-semibold text-[#E8E4DE]">{node.title}</span>
                <span className="text-[10px] text-[#8A8A9A] mt-0.5">{node.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
