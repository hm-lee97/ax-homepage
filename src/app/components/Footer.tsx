import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const navGroups = [
    {
      label: "서비스",
      links: ["AX 컨설팅", "데이터 & 인사이트", "UX/UI 설계", "플랫폼 구축"],
    },
    {
      label: "회사",
      links: ["소개", "사례", "인사이트", "채용"],
    },
    {
      label: "지원",
      links: ["개인정보처리방침", "이용약관"],
    },
  ];

  return (
    <footer className="w-full bg-[#04040A] border-t border-[rgba(255,255,255,0.04)] flex-shrink-0 relative overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(153,50,204,0.5), transparent)" }}
      />

      {/* Large ghost brand name */}
      <div
        className="absolute -bottom-2 left-0 pointer-events-none select-none leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(40px, 9vw, 110px)",
          fontWeight: 900,
          fontFamily: "'Geist', sans-serif",
          color: "rgba(153,50,204,0.045)",
          letterSpacing: "-0.05em",
        }}
      >
        Wylie AX Center
      </div>

      <div className="container mx-auto px-6 md:px-10 max-w-[1200px] py-10 md:py-7 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6">

          {/* Brand */}
          <div className="flex-shrink-0">
            <div
              className="text-[17px] font-black tracking-tight text-[#9932CC] mb-1"
              style={{ fontFamily: "'Geist', sans-serif" }}
            >
              Wylie AX Center
            </div>
            <p className="text-[12px] text-[#8A8A9E]"
              style={{ fontFamily: "'Geist', sans-serif" }}>
              Total eXperience Consulting
            </p>
            <div className="flex gap-2 mt-4">
              {[Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#7A7A90",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#9932CC";
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid #9932CC";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#7A7A90";
                  }}
                >
                  <Icon size={13} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Groups */}
          <div className="grid grid-cols-3 gap-8 md:gap-14">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div
                  className="text-[11px] font-bold text-[#9932CC] tracking-[0.18em] uppercase mb-3"
                  style={{ fontFamily: "'Geist', sans-serif" }}
                >
                  {group.label}
                </div>
                <div className="flex flex-col gap-0.5">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block py-2 text-[12px] text-[#7A7A90] hover:text-[#C878F0] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.04)] flex justify-between items-center">
          <p className="text-[12px] text-[#6A6A80]"
            style={{ fontFamily: "'Geist', sans-serif" }}>
            © 2024 Wylie AX Center. All rights reserved.
          </p>
          <p className="text-[12px] text-[#6A6A80]"
            style={{ fontFamily: "'Geist', sans-serif" }}>
            Seoul, South Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
