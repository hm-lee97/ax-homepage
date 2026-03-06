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
    <footer className="w-full bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)] flex-shrink-0">
      <div className="container mx-auto px-6 md:px-10 max-w-[1200px] py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="text-[16px] font-bold tracking-tight text-[#9932CC] mb-1">
              Wylie AX Center
            </div>
            <p className="text-[12px] text-[#555]">Total eXperience Consulting</p>
            <div className="flex gap-2 mt-3">
              {[Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-[28px] h-[28px] rounded-full bg-[#222] flex items-center justify-center text-[#666] hover:bg-[#9932CC] hover:text-white transition-all duration-200">
                  <Icon size={13} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Groups */}
          <div className="grid grid-cols-3 gap-8 md:gap-14">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="text-[10px] font-semibold text-[#9932CC] tracking-[0.15em] uppercase mb-3">
                  {group.label}
                </div>
                <div className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <a key={link} href="#" className="text-[12px] text-[#555] hover:text-white transition-colors duration-150">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.05)] flex justify-between items-center">
          <p className="text-[11px] text-[#777777]">© 2024 Wylie AX Center. All rights reserved.</p>
          <p className="text-[11px] text-[#777777]">Seoul, South Korea</p>
        </div>
      </div>
    </footer>
  );
}
