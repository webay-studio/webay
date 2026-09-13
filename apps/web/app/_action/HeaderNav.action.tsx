"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export function HeaderNavAction() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToShowcase = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const scrollyContainer = document.getElementById("hero-showcase-scrolly");
    if (scrollyContainer) {
      const totalScroll = scrollyContainer.offsetHeight - window.innerHeight;
      const targetY = scrollyContainer.offsetTop + totalScroll * 0.26;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const processEl = document.getElementById("process");
    if (processEl) {
      const headerOffset = 64;
      const targetY = processEl.offsetTop - headerOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="desktop-nav"
        className="hidden md:flex items-center gap-7"
        aria-label="주요 메뉴"
      >
        <a
          href="#showcase"
          id="nav-link-showcase"
          onClick={handleScrollToShowcase}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors py-1 cursor-pointer"
        >
          특징
        </a>
        <a
          href="#process"
          id="nav-link-process"
          onClick={handleScrollToProcess}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors py-1 cursor-pointer"
        >
          만드는 과정
        </a>
      </nav>

      <div className="flex md:hidden items-center">
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-700 hover:text-zinc-950 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden absolute top-16 left-0 right-0 border-t border-zinc-200/80 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <a
            href="#showcase"
            id="mobile-link-showcase"
            onClick={handleScrollToShowcase}
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-lg px-3 py-2 transition-colors cursor-pointer"
          >
            특징
          </a>
          <a
            href="#process"
            id="mobile-link-process"
            onClick={handleScrollToProcess}
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-lg px-3 py-2 transition-colors cursor-pointer"
          >
            만드는 과정
          </a>
        </div>
      )}
    </>
  );
}
