import Image from 'next/image';
import { FooterScrollTopAction } from '../_action/FooterScrollTop.action';

export function FooterArea() {
  return (
    <footer id="main-footer" className="bg-white border-t border-zinc-200/90 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-zinc-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/webay-logo.png"
                alt="webay"
                width={120}
                height={26}
                className="h-6.5 w-auto object-contain"
              />
              <span className="text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                Studio
              </span>
            </div>
            <p className="text-sm text-zinc-600">
              개발 몰라도 편하게 시작하는 1인 웹 개발 스튜디오
            </p>
          </div>

          <div className="flex items-center">
            <FooterScrollTopAction />
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p id="footer-copyright">
            &copy; 2026 webay. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#hero-showcase-scrolly" className="hover:text-zinc-800 transition-colors">
              특징
            </a>
            <a href="#process" className="hover:text-zinc-800 transition-colors">
              만드는 과정
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
