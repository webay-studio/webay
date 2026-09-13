"use client";

import { useRef, useState } from "react";
import { useScrollProgress } from "../_hook/useScrollProgress.hook";
import { ShieldCheck, GitBranch, Clock } from "lucide-react";
import { HeroCtaAction } from "../_action/HeroCta.action";
import { ShowcaseTabsAction } from "../_action/ShowcaseTabs.action";

export function ScrollyHeroArea() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  const [manualSelection, setManualSelection] = useState<{
    tab: number;
    atComputed: number;
  } | null>(null);

  const heroOpacity = Math.max(0, Math.min(1, 1 - progress * 4.5));
  const heroTranslateY = progress * -80;

  const showcaseOpacity = Math.max(0, Math.min(1, (progress - 0.12) * 8));
  const showcaseTranslateY = Math.max(0, (1 - showcaseOpacity) * 30);

  let computedTab = 0;
  if (progress >= 0.65) {
    computedTab = 2;
  } else if (progress >= 0.35) {
    computedTab = 1;
  } else {
    computedTab = 0;
  }

  const activeTab =
    manualSelection && manualSelection.atComputed === computedTab
      ? manualSelection.tab
      : computedTab;

  return (
    <div
      ref={containerRef}
      id="hero-showcase-scrolly"
      className="relative w-full"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-14 sm:pt-16 bg-gradient-to-b from-white via-violet-50/30 to-white text-zinc-900">
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-violet-200/40 via-purple-100/30 to-transparent blur-[120px] rounded-full pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-300/15 blur-[120px] rounded-full pointer-events-none"
        />

        <div
          id="hero-section"
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 pointer-events-none"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
            pointerEvents: heroOpacity > 0.2 ? "auto" : "none",
          }}
        >
          <div className="max-w-4xl mx-auto text-center w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.28] sm:leading-[1.25] text-zinc-950 text-balance">
              <span>매월 나가는 구독료는 이제 그만.</span>
              <br className="hidden sm:inline" />{" "}
              <span>한 번 제작으로 </span>
              <span className="text-[#7C3AED] relative inline-block">
                평생 내 사이트
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#7C3AED] pointer-events-none"
                >
                  <path
                    d="M 2 6 Q 6 1.5, 10 6 T 18 6 T 26 6 T 34 6 T 42 6 T 50 6 T 58 6 T 66 6 T 74 6 T 82 6 T 90 6 T 98 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-2.5 sm:mt-6 text-xs sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto text-balance font-normal">
              개발을 몰라도 다루기 쉬운 관리자 화면까지 함께 세팅해 드립니다.
            </p>

            <HeroCtaAction />

            <div className="mt-5 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 text-left max-w-3xl mx-auto">
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-violet-100/90 shadow-[0_4px_20px_rgba(124,58,237,0.04)] backdrop-blur-sm hover:border-violet-300/70 transition-all">
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                  <span className="truncate">월 고정 지출 0원 세팅</span>
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-zinc-900 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
                  서버비 0원 (도메인만 별도)
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-violet-100/90 shadow-[0_4px_20px_rgba(124,58,237,0.04)] backdrop-blur-sm hover:border-violet-300/70 transition-all">
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-zinc-500">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                  <span className="truncate">기획서 없어도 OK</span>
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-zinc-900 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
                  링크 하나면 충분
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-violet-100/90 shadow-[0_4px_20px_rgba(124,58,237,0.04)] backdrop-blur-sm hover:border-violet-300/70 transition-all">
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-zinc-500">
                  <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                  <span className="truncate">만든 사이트는 내 것</span>
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-zinc-900 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
                  자유롭게 소유 이전
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="showcase"
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 pointer-events-none"
          style={{
            opacity: showcaseOpacity,
            transform: `translateY(${showcaseTranslateY}px)`,
            pointerEvents: showcaseOpacity > 0.2 ? "auto" : "none",
          }}
        >
          <div className="max-w-6xl w-full mx-auto">
            <div className="max-w-3xl mb-3 sm:mb-8 lg:mb-10 text-center lg:text-left">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 leading-[1.25]">
                왜 다들 webay에서{" "}
                <span className="text-[#7C3AED]">편하게 만드실까요?</span>
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-base text-zinc-600 font-normal line-clamp-1 sm:line-clamp-none">
                복잡한 IT 용어나 부담스러운 약정 없이, 진짜 필요한 것만
                챙겨드립니다.
              </p>
            </div>

            <ShowcaseTabsAction
              activeTab={activeTab}
              onTabChange={(tab: number) =>
                setManualSelection({ tab, atComputed: computedTab })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
