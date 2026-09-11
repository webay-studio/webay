import { ArrowDown, Zap, GitBranch, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden"
    >
      {/* Background subtle grid pattern for modern developer aesthetic */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e733_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e733_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <div
            id="hero-top-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-100/90 text-zinc-700 border border-zinc-200 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            <Layers className="w-3.5 h-3.5 text-zinc-500" />
            <span>Next.js & Serverless Architecture</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-main-headline"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-zinc-900 leading-[1.2] text-balance max-w-4xl mx-auto"
        >
          매달 나가는 유지보수비 0원,
          <br />
          <span className="text-zinc-950">
            완성도 높은 코드로 100% 소유하는 모던 웹
          </span>
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto text-balance font-normal"
        >
          워드프레스 인질극과 불필요한 고정 지출에 지치셨나요?
          <br className="hidden sm:inline" />
          webay는 복잡한 가입 없이 완성된 결과물을 확인하신 후, 도메인 연결부터 소스코드까지 투명하게 인계해 드립니다.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#process"
            id="hero-cta-primary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>진행 순서 확인하기</span>
            <ArrowDown className="w-4 h-4 text-zinc-300" />
          </a>
          <a
            href="#pricing"
            id="hero-cta-secondary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200/90 rounded-xl transition-all shadow-2xs hover:text-zinc-900"
          >
            <span>투명한 비용 안내</span>
          </a>
        </div>

        {/* Trust Indicators (3-column mini cards below CTA) */}
        <div
          id="hero-trust-indicators"
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          {/* Card 1 */}
          <div
            id="trust-card-hosting"
            className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-zinc-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 tracking-tight">
              월 호스팅/유지보수비 0원
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 leading-normal">
              글로벌 엣지 인프라로 불필요한 고정비 제거
            </p>
            <div className="mt-3.5 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>숨은 월납 요금 없음</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            id="trust-card-ownership"
            className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-zinc-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <GitBranch className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 tracking-tight">
              소스코드 100% 소유권 인계
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 leading-normal">
              원하실 경우 깃허브 저장소 통째로 이전
            </p>
            <div className="mt-3.5 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>에이전시 종속 탈피</span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            id="trust-card-responsive"
            className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-zinc-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <Smartphone className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 tracking-tight">
              초고속 반응형 웹
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 leading-normal">
              스마트폰·PC 최적화 모던 클린 코드
            </p>
            <div className="mt-3.5 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>모바일 퍼스트 최적화</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
