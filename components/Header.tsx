'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2 group"
          aria-label="webay 홈으로 이동"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm tracking-tight group-hover:bg-zinc-800 transition-colors shadow-xs">
            w
          </span>
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            webay
          </span>
          <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/70 ml-0.5">
            Studio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-8"
          aria-label="주요 메뉴"
        >
          <a
            href="#process"
            id="nav-link-process"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors py-1"
          >
            진행 절차
          </a>
          <a
            href="#pricing"
            id="nav-link-pricing"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors py-1"
          >
            비용 안내
          </a>
          <a
            href="#contact"
            id="nav-cta-button"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all shadow-xs active:scale-[0.98]"
          >
            <span>상담 신청하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            id="nav-mobile-cta"
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            상담 신청
          </a>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-t border-zinc-200/80 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-3"
        >
          <a
            href="#process"
            id="mobile-link-process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-md px-3 py-2 transition-colors"
          >
            진행 절차
          </a>
          <a
            href="#pricing"
            id="mobile-link-pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-md px-3 py-2 transition-colors"
          >
            비용 안내
          </a>
          <a
            href="#contact"
            id="mobile-link-contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-sm font-medium text-zinc-900 bg-zinc-100/80 hover:bg-zinc-100 rounded-md px-3 py-2.5 transition-colors"
          >
            <span>상담 신청하기</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      )}
    </header>
  );
}
