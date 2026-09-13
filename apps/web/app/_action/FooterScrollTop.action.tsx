'use client';

import { ArrowUp } from 'lucide-react';

export function FooterScrollTopAction() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      id="footer-scroll-top-btn"
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer"
      aria-label="페이지 맨 위로 이동"
    >
      <span>맨 위로</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
