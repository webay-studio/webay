'use client';

import { ArrowDown } from 'lucide-react';

export function HeroCtaAction() {
  const handleScrollToShowcase = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollyContainer = document.getElementById('hero-showcase-scrolly');
    if (scrollyContainer) {
      const totalScroll = scrollyContainer.offsetHeight - window.innerHeight;
      const targetY = scrollyContainer.offsetTop + totalScroll * 0.26;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="mt-5 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-3.5 max-w-xs sm:max-w-none mx-auto">
        <a
          href="#process"
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]"
        >
          <span>만드는 과정</span>
          <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-200" />
        </a>
        <a
          href="#showcase"
          onClick={handleScrollToShowcase}
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-zinc-700 bg-white hover:bg-violet-50/50 border border-zinc-200/90 hover:border-violet-300 rounded-xl sm:rounded-2xl transition-all shadow-2xs hover:text-[#7C3AED] active:scale-[0.98] cursor-pointer"
        >
          <span>특징 둘러보기</span>
        </a>
      </div>

      <div className="mt-3.5 sm:mt-6 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-zinc-500 font-medium">
        <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7C3AED] animate-bounce" />
        <span>아래로 내려서 편하게 둘러보세요</span>
      </div>
    </>
  );
}
