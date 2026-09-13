"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Coins,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface FeatureTab {
  id: number;
  title: string;
  description: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

const tabs: FeatureTab[] = [
  {
    id: 0,
    title: "월 고정 지출 0원 세팅",
    description:
      "외주사에 매월 내는 호스팅비·관리비를 0원으로 만들어 드립니다. 클라우드 무료 제공량(월 100GB)이 넉넉해 일반 사이트는 99% 평생 0원입니다. (도메인비 연 1~2만원 실비 별도)",
    badge: "월 고정비 0원",
    ctaText: "비용 기준 자세히 보기",
    ctaLink: "#process",
  },
  {
    id: 1,
    title: "만든 사이트는 온전히 내 것",
    description:
      "나중에 외주 업체와 연락이 끊기거나 다른 곳에 맡기고 싶을 때도 걱정 마세요. 완료 후 구글 아이디만 알려주시면 소스코드와 서버 계정을 대표님 명의로 전부 넘겨드립니다.",
    badge: "100% 내 소유",
    ctaText: "소유권 전달 과정",
    ctaLink: "#process",
  },
  {
    id: 2,
    title: "폰으로 직접 보면서 맞춰가요",
    description:
      "기획서만 보고는 어떻게 나올지 상상이 안 되잖아요. 며칠 만에 폰으로 바로 열어볼 수 있는 주소를 보내드릴 테니, 직접 눌러보면서 편하게 말씀해 주세요.",
    badge: "폰으로 바로 확인",
    ctaText: "실시간 소통 방식",
    ctaLink: "#process",
  },
];

interface ShowcaseTabsActionProps {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

export function ShowcaseTabsAction({
  activeTab: controlledActiveTab,
  onTabChange,
}: ShowcaseTabsActionProps = {}) {
  const [internalTab, setInternalTab] = useState(0);

  const activeTab =
    controlledActiveTab !== undefined ? controlledActiveTab : internalTab;

  const currentTab = tabs[activeTab] ?? tabs[0];

  const handleSelectTab = (id: number) => {
    if (onTabChange) {
      onTabChange(id);
    } else {
      setInternalTab(id);
    }
  };

  return (
    <div className="w-full">
      <div className="lg:hidden mb-3 space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectTab(tab.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-xs"
                    : "bg-white/90 text-zinc-600 border border-zinc-200/90 hover:bg-violet-50"
                }`}
              >
                <span>{tab.badge}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-zinc-900 truncate">
            {currentTab.title}
          </span>
          <a
            href={currentTab.ctaLink}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7C3AED] shrink-0 ml-2"
          >
            <span>{currentTab.ctaText}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
        <div className="hidden lg:block lg:col-span-6 space-y-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 border ${
                  isActive
                    ? "bg-white border-violet-200/90 shadow-[0_8px_28px_rgba(124,58,237,0.08)] ring-1 ring-[#7C3AED]/30"
                    : "bg-transparent border-transparent hover:bg-white/40 opacity-60 hover:opacity-90"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isActive ? "text-zinc-900" : "text-zinc-700"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full transition-all ${
                      isActive
                        ? "bg-violet-50 text-[#7C3AED] border border-violet-200/70"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-2.5 pt-2.5 border-t border-zinc-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {tab.description}
                    </p>
                    <a
                      href={tab.ctaLink}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors group"
                    >
                      <span>{tab.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-lg min-h-[340px] sm:min-h-[420px] lg:min-h-[470px] rounded-2xl sm:rounded-3xl bg-white border border-violet-100/80 shadow-[0_16px_40px_rgba(124,58,237,0.06)] p-4 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-violet-100/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-violet-50/25 rounded-full blur-3xl pointer-events-none" />

            {activeTab === 0 && (
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 animate-in fade-in zoom-in-95 duration-300 relative z-10">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      투명한 비용 기준 안내
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#7C3AED] bg-violet-50 border border-violet-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    솔직한 비용 공개
                  </span>
                </div>

                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-violet-50/40 border border-violet-100/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium text-zinc-500">
                      외주사 월 정기 관리비
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] mt-0.5 tracking-tight">
                      ₩0{" "}
                      <span className="text-xs sm:text-sm font-semibold text-zinc-500">
                        / 월
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] sm:text-xs font-medium text-zinc-400 line-through">
                      타사 월 10~15만원
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-[#7C3AED] bg-white border border-violet-200/80 px-2 py-0.5 rounded-md mt-1 inline-block shadow-2xs">
                      의무 계약 0원
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>서버 호스팅 (월 100GB 무료 대역폭)</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      평생 0원 (충분)
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>보안 인증서 (HTTPS 자물쇠)</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      평생 자동 갱신
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>인터넷 도메인 주소 (가비아 등)</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      연 1~2만 원 (본인 명의)
                    </span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-50/80 border border-zinc-200/60 text-[11px] sm:text-xs text-zinc-600 flex items-start gap-2">
                  <Coins className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-zinc-900">솔직한 기준:</strong> 대기업급 초대형 트래픽이
                    발생하지 않는 한 서버비는 0원이며, 도메인만 1년에 1번 본인
                    명의로 직접 결제해 유지하시면 됩니다.
                  </span>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 animate-in fade-in zoom-in-95 duration-300 relative z-10">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      소유권 완전 이전 보증
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#7C3AED] bg-violet-50 border border-violet-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    100% 대표님 소유
                  </span>
                </div>

                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-violet-50/40 border border-violet-100/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium text-zinc-500">
                      제작된 사이트 소유권
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] mt-0.5 tracking-tight">
                      100%{" "}
                      <span className="text-xs sm:text-sm font-semibold text-zinc-700">
                        대표님 명의
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] sm:text-xs font-medium text-zinc-400 line-through">
                      외주사 종속 계약
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-[#7C3AED] bg-white border border-violet-200/80 px-2 py-0.5 rounded-md mt-1 inline-block shadow-2xs">
                      영구 소장 보장
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>전체 소스코드 소유권</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      100% 이전
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>무료 클라우드 서버 권한</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      대표님 명의 등록
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>타 개발사 인계 및 유지보수</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      언제든 자유
                    </span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-50/80 border border-zinc-200/60 text-[11px] sm:text-xs text-zinc-600 flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>
                    완료 후 모든 권한을 넘겨받아 외주사에 종속되지 않고 평생
                    독립적으로 운영하실 수 있습니다.
                  </span>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 animate-in fade-in zoom-in-95 duration-300 relative z-10">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      실시간 라이브 확인
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#7C3AED] bg-violet-50 border border-violet-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    기획서 0장 착수
                  </span>
                </div>

                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-violet-50/40 border border-violet-100/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium text-zinc-500">
                      화면 피드백 방식
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] mt-0.5 tracking-tight">
                      실시간 링크{" "}
                      <span className="text-xs sm:text-sm font-semibold text-zinc-700">
                        폰으로 즉시 확인
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] sm:text-xs font-medium text-zinc-400 line-through">
                      두꺼운 기획서 검토
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-[#7C3AED] bg-white border border-violet-200/80 px-2 py-0.5 rounded-md mt-1 inline-block shadow-2xs">
                      내 폰으로 직접 터치
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>스마트폰 터치 테스트</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      링크 하나로 즉시 접속
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>수정 사항 피드백 반영</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      실시간 즉시 수정
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <div className="flex items-center gap-2 font-medium text-zinc-700 text-[11px] sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C3AED] shrink-0" />
                      <span>모바일 · PC 반응형 화면</span>
                    </div>
                    <span className="font-bold text-zinc-900 text-[11px] sm:text-sm">
                      모든 기기 100% 호환
                    </span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-zinc-50/80 border border-zinc-200/60 text-[11px] sm:text-xs text-zinc-600 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>
                    기획서 대신 실제 폰으로 열어보고 눌러보며 직관적으로 완성합니다.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
