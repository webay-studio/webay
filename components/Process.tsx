import { MessageSquare, Smartphone, Globe, Shield, Sparkles, Check, Server, GitPullRequest } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      id: 'process-step-1',
      number: 'Step 01',
      title: '간단한 내용 전달 및 상담 신청',
      icon: MessageSquare,
      description:
        '만들고자 하는 사이트 참고 링크나 간단한 문구만 남겨주세요. 복잡한 기획서 없이도 방향성을 함께 잡아드립니다.',
      highlightLabel: '포인트',
      highlightText: '어려운 개발 용어 없이 편안한 언어로 소통합니다.',
      tag: '기획서 불필요',
    },
    {
      id: 'process-step-2',
      number: 'Step 02',
      title: "스마트폰으로 '테스트 주소' 받아보고 검수",
      icon: Smartphone,
      description:
        '제작이 시작되면 PC와 모바일에서 직접 눌러볼 수 있는 실시간 임시 테스트 링크를 보내드립니다.',
      highlightLabel: '포인트',
      highlightText:
        '글자 오타, 이미지 배치, 문의 버튼이 잘 동작하는지 눈으로 직접 확인하시고 수정 피드백을 주시면 됩니다.',
      tag: '실시간 확인',
    },
    {
      id: 'process-step-3',
      number: 'Step 03',
      title: '원하는 도메인(인터넷 주소) 직접 결제',
      icon: Globe,
      description:
        'brand.co.kr 같은 주소는 안전한 명의 소유를 위해 가비아(gabia) 등에서 대표님 명의로 직접 결제(연 약 2만 원 내외)하시는 것이 가장 안전합니다.',
      highlightLabel: '지원',
      highlightText:
        '결제 후 알려주시면 복잡한 주소 연결 작업은 webay가 완벽히 대행해 드립니다.',
      tag: '대표님 100% 명의',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-zinc-50/70 border-y border-zinc-200/80 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-200/80 text-zinc-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>투명한 4단계 워크플로우</span>
          </div>
          <h2
            id="process-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight"
          >
            대표님이 하실 일은 딱 4가지 순서가 전부입니다
          </h2>
          <p
            id="process-subtitle"
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            복잡한 컴퓨터 용어나 가입 절차는 필요 없습니다. 완성된 사이트를 직접 눈으로 확인하신 뒤 가져가세요.
          </p>
        </div>

        {/* Steps 1, 2, 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                id={step.id}
                className="bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top bar with Step badge & tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-zinc-900 text-white">
                      {step.number}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlight callout inside card */}
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200/60 p-3 text-xs leading-relaxed">
                    <span className="font-semibold text-zinc-900 mr-1.5 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
                      {step.highlightLabel}:
                    </span>
                    <span className="text-zinc-700">{step.highlightText}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 04 Full Width Feature Card */}
        <div
          id="process-step-4"
          className="mt-6 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs hover:border-zinc-300 transition-all"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="lg:max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-zinc-900 text-white">
                  Step 04
                </span>
                <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-2.5 py-0.5 rounded-full">
                  최종 수령 단계
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                100% 내 사이트로 최종 수령 (선택 가능)
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                작업물에 만족하시면 사이트 운영 방식을 대표님 상황에 맞게 선택하실 수 있습니다. 대표님의 기술적 선호도와 운영 역량에 맞춰 언제든 유연하게 결정하세요.
              </p>
            </div>

            {/* Options A and B Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A */}
              <div
                id="process-option-a"
                className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-5 hover:bg-white hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-zinc-900 bg-zinc-200/80 px-2 py-0.5 rounded">
                      옵션 A. 관리 대행
                    </span>
                    <Server className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="text-base font-bold text-zinc-900 mt-1">
                    &ldquo;알아서 띄워주세요&rdquo;
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    webay 인프라에 평생 무료로 안전하게 유지 관리됩니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>서버 관리 스트레스 0%</span>
                </div>
              </div>

              {/* Option B */}
              <div
                id="process-option-b"
                className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-5 hover:bg-white hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-zinc-900 bg-zinc-200/80 px-2 py-0.5 rounded">
                      옵션 B. 소유권 이전
                    </span>
                    <GitPullRequest className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="text-base font-bold text-zinc-900 mt-1">
                    &ldquo;직접 코드를 쥐고 싶어요&rdquo;
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    새 구글 계정 1개로 소스코드(GitHub)와 서버(Vercel)를 통째로 복사·이관해 드립니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                  <Shield className="w-3.5 h-3.5" />
                  <span>100% 디지털 자산 소유</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
