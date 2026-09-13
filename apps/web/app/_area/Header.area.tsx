"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeaderNavAction } from "../_action/HeaderNav.action";

export function HeaderArea() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-zinc-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 group py-1"
          aria-label="webay 홈으로 이동"
        >
          <Image
            src="/webay-logo.png"
            alt="webay"
            width={130}
            height={28}
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-zinc-100/90 text-zinc-600 border border-zinc-200/70 group-hover:border-violet-200 group-hover:bg-violet-50/60 group-hover:text-[#7C3AED] transition-all">
            Studio
          </span>
        </a>

        <HeaderNavAction />
      </div>
    </header>
  );
}
