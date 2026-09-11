'use client';

import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-zinc-200/90 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-zinc-100">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">
                w
              </span>
              <span className="font-bold text-lg tracking-tight text-zinc-900">
                webay studio
              </span>
            </div>
            <p className="text-sm text-zinc-600">
              비개발자 창업가와 소상공인을 위한 모던 웹 개발 스튜디오
            </p>
          </div>

          {/* Contact Email & Quick Nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-zinc-700">
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>이메일 문의:</span>
              <a
                href="mailto:contact@webay.co.kr"
                id="footer-email-link"
                className="font-medium text-zinc-900 hover:text-indigo-600 transition-colors underline underline-offset-4 decoration-zinc-300"
              >
                contact@webay.co.kr
              </a>
            </div>

            <button
              type="button"
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors"
              aria-label="페이지 맨 위로 이동"
            >
              <span>맨 위로</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & policy note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p id="footer-copyright">
            &copy; 2026 webay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#process" className="hover:text-zinc-800 transition-colors">
              진행 절차
            </a>
            <a href="#pricing" className="hover:text-zinc-800 transition-colors">
              비용 안내
            </a>
            <a href="#contact" className="hover:text-zinc-800 transition-colors">
              상담 신청
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
