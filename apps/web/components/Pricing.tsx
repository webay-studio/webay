import { Check, ShieldAlert, Sparkles, HelpCircle, ExternalLink } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200/80 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>0원 유지보수비의 비밀</span>
          </div>
          <h2
            id="pricing-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight"
          >
            투명한 비용 안내 (숨겨진 추가 비용이 없습니다)
          </h2>
          <p
            id="pricing-subtitle"
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            webay는 낡은 관행처럼 매달 수십만 원의 관리비를 청구하지 않습니다.
          </p>
        </div>

        {/* 3-Column Cost Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            id="pricing-card-domain"
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md">
                  필수 고정비
                </span>
                <span className="text-xs text-zinc-500 font-medium">연 1회</span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                인터넷 주소 (도메인)
              </h3>

              <div className="mt-4 mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  연 약 2만 원
                </span>
                <span className="text-zinc-500 text-sm font-medium ml-1">
                  내외
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                가비아(gabia) 등 공식 등록처에 결제하는 도메인 사용료입니다.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-zinc-100 text-xs text-zinc-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>대표님 명의 직접 결제 (안전한 소유)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>webay 수취 비용 0원 (수수료 없음)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>도메인 DNS 연결 작업 전액 무료 지원</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
              * .com, .co.kr, .kr 기준 공식 기관 기본 수수료
            </div>
          </div>

          {/* Card 2 (Highlighted Core Advantage) */}
          <div
            id="pricing-card-hosting"
            className="rounded-2xl border-2 border-indigo-600/90 bg-white p-6 sm:p-7 shadow-sm transition-all flex flex-col justify-between relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
              webay 핵심 강점
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                  서버 및 호스팅
                </span>
                <span className="text-xs font-semibold text-indigo-600">
                  평생 0원 혜택
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                서버 및 호스팅 비용
              </h3>

              <div className="mt-4 mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  평소 월 0원
                </span>
                <span className="text-emerald-600 text-xs font-bold ml-2 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200/60">
                  고정비 없음
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                최신 글로벌 서버리스 기술로 구축하여, 일반적인 비즈니스 방문자(월 수만 명) 기준 평생 호스팅비가 발생하지 않습니다.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-zinc-100 text-xs text-zinc-700">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>월 수만 명 방문 트래픽 무료 커버</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SSL 보안 인증서 평생 무료 자동 갱신</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>글로벌 엣지 CDN 분산망 자동 적용</span>
                </div>
              </div>
            </div>

            {/* Exception Callout */}
            <div className="mt-6 pt-3 border-t border-zinc-100">
              <div className="bg-zinc-50 rounded-lg p-2.5 text-[11px] text-zinc-600 leading-normal flex items-start gap-1.5 border border-zinc-200/60">
                <HelpCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>
                  <strong>예외 안내:</strong> 방송 출연이나 대규모 광고로 트래픽이 폭증할 때만 월 2~3만 원 수준의 인프라 실비가 발생할 수 있습니다.
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            id="pricing-card-notifications"
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md">
                  선택 옵션
                </span>
                <span className="text-xs text-zinc-500 font-medium">유연한 선택</span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                고객 문의 알림 수신
              </h3>

              <div className="mt-4 mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  완전 무료
                </span>
                <span className="text-zinc-500 text-sm font-medium ml-1">
                  (기본)
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                웹사이트 문의 접수 시 대표님이 즉시 확인하실 수 있도록 원하시는 방식으로 연동해 드립니다.
              </p>

              <div className="mt-5 space-y-3 pt-4 border-t border-zinc-100 text-xs text-zinc-700">
                <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/50">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    이메일 & 구글 시트 저장: 0원
                  </div>
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    문의가 들어오면 대표님 이메일과 구글 시트에 실시간 자동 기록 (평생 완전 무료)
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200/60">
                  <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                    휴대폰 SMS 문자 알림 희망 시
                  </div>
                  <p className="text-zinc-600 text-[11px] leading-relaxed">
                    통신사 문자망 실비 충전식 (건당 약 15~20원 수준의 통신사 실비 정산)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
              * 별도의 고가 CRM 솔루션 강요가 전혀 없습니다.
            </div>
          </div>
        </div>

        {/* Agency Comparison Callout */}
        <div
          id="pricing-agency-comparison"
          className="mt-10 rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  기존 웹 에이전시 vs webay
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                왜 기존 에이전시는 매달 10~30만 원의 유지보수비를 받을까요?
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                워드프레스나 구형 CMS는 무거운 데이터베이스와 주기적인 플러그인 보안 업데이트가 필수적이어서 관리 인건비가 듭니다. 반면 <strong>webay</strong>는 해킹 위협이 없고 서버 관리가 필요 없는 현대적인 <strong>Serverless & Jamstack</strong> 아키텍처로 제작하여 고정 관리비가 발생하지 않습니다.
              </p>
            </div>
            <div className="shrink-0 flex items-center">
              <div className="px-4 py-3 rounded-xl bg-white border border-zinc-200/80 shadow-2xs text-center">
                <span className="block text-xs text-zinc-500 font-medium">
                  연간 절감 고정 지출
                </span>
                <span className="block text-xl sm:text-2xl font-black text-indigo-700 tracking-tight">
                  약 120~360만 원
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
