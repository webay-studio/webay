import {
  Sparkles,
  Clock,
  CheckCircle2,
  MessageSquare,
  CreditCard,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";

interface ProcessStep {
  stepNum: string;
  stageName: string;
  timeTag: string;
  highlightBadge: string;
  icon: typeof MessageSquare;
  title: string;
  desc: string;
  clientAction: string;
  accentColor: "violet" | "emerald";
}

const steps: ProcessStep[] = [
  {
    stepNum: "01",
    stageName: "상담 요청",
    timeTag: "소요 3분",
    highlightBadge: "기획서 0장",
    icon: MessageSquare,
    title: "마음에 드는 링크 전달",
    desc: "평소 '이 사이트처럼 만들고 싶다' 생각하셨던 사이트 링크 1개(경쟁사, 롤모델)와 상호명을 크몽 메시지로 남겨주시면 끝납니다.",
    clientAction: "링크 1개 전달",
    accentColor: "violet",
  },
  {
    stepNum: "02",
    stageName: "안전결제 & 착수",
    timeTag: "D-Day 시작",
    highlightBadge: "크몽 에스크로",
    icon: CreditCard,
    title: "맞춤 결제 & 당일 코딩",
    desc: "맞춤 결제창을 크몽 안전결제로 결제하시면 대금이 안전하게 보호되며, 결제 즉시 3일 스프린트 개발이 당일 바로 시작됩니다.",
    clientAction: "안전결제 완료",
    accentColor: "violet",
  },
  {
    stepNum: "03",
    stageName: "실시간 검수",
    timeTag: "13:00 / 20:00",
    highlightBadge: "하루 2회 배포",
    icon: Smartphone,
    title: "폰으로 보고 피드백",
    desc: "점심 1시, 저녁 8시 크몽 메시지로 발송되는 실시간 모바일 주소를 열어보시고, 수정할 부분을 크몽 메시지로 편하게 남겨주시면 바로 반영합니다.",
    clientAction: "크몽 메시지로 피드백",
    accentColor: "violet",
  },
  {
    stepNum: "04",
    stageName: "소유권 이전",
    timeTag: "저녁 8시 칼마감",
    highlightBadge: "월 관리비 0원",
    icon: ShieldCheck,
    title: "100% 내 명의로 인수",
    desc: "도메인 연결 후 구글 계정으로 서버·코드를 100% 이전받고 크몽 구매확정! 외주사 묶임 없이 매월 관리비 0원으로 자유롭게 운영하세요.",
    clientAction: "계정 이전 & 구매확정",
    accentColor: "emerald",
  },
];

export function ProcessArea() {
  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-80 h-80 bg-violet-400/8 blur-[100px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 -right-32 w-80 h-80 bg-emerald-400/8 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id="process-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight"
          >
            상담부터 최종 이관까지,
            <br />
            <span className="text-[#7C3AED]">
              대표님은 딱 4가지만 하시면 됩니다
            </span>
          </h2>
          <p
            id="process-subtitle"
            className="mt-3 text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed font-normal"
          >
            기획서 작성이나 기술 걱정 없이, 크몽 안전결제부터 3일 차 저녁 8시
            최종 인수까지의 흐름입니다.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-between mb-8 px-5 py-3.5 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 shadow-2xs">
          {steps.map((step, idx) => (
            <div key={step.stepNum} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-extrabold text-white ${
                    step.accentColor === "emerald"
                      ? "bg-emerald-600"
                      : "bg-[#7C3AED]"
                  }`}
                >
                  {step.stepNum}
                </span>
                <span className="text-xs font-bold text-zinc-800">
                  {step.stageName}
                </span>
                <span className="text-[11px] font-semibold text-zinc-400">
                  ({step.timeTag})
                </span>
              </div>
              {idx < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-zinc-300 ml-4" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step) => {
            const isEmerald = step.accentColor === "emerald";

            return (
              <div
                key={step.stepNum}
                id={step.stepNum}
                className={`relative p-5 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg ${
                  isEmerald
                    ? "border-emerald-200/90 hover:border-emerald-400 hover:shadow-emerald-500/5 ring-1 ring-emerald-500/10"
                    : "border-zinc-200/90 hover:border-violet-300 hover:shadow-violet-500/5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                      className={`text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-md shrink-0 ${
                        isEmerald
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-violet-100 text-violet-800"
                      }`}
                    >
                      STEP {step.stepNum}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                        isEmerald
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/70"
                          : "bg-violet-50 text-violet-700 border-violet-200/70"
                      }`}
                    >
                      {step.highlightBadge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${
                    isEmerald
                      ? "border-emerald-100 text-emerald-700"
                      : "border-zinc-100 text-[#7C3AED]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{step.clientAction}</span>
                  </div>
                  <span className="text-zinc-400 font-normal shrink-0 ml-1">
                    {step.timeTag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
