'use client';

import { useState } from 'react';
import { Button } from '@webay/ui';
import {
  Sparkles,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Palette
} from 'lucide-react';

export default function DemoPage() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'features' | 'performance' | 'components'>('features');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Top Demo Bar */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              webay
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
              DEMO
            </span>
          </div>
          <span className="hidden sm:inline text-xs text-zinc-500 font-mono">
            subdomain: demo.*
          </span>
        </div>

        {/* Viewport Switcher & Main Site Link */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-zinc-800/60 p-1 rounded-lg border border-zinc-700/50">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                device === 'desktop'
                  ? 'bg-zinc-700 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                device === 'mobile'
                  ? 'bg-zinc-700 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </button>
          </div>

          <a
            href="/"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex items-center gap-1.5 border border-zinc-700"
          >
            메인 사이트로 이동
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Vercel 서브도메인 데모 배포 환경
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            webay 인터랙티브 데모
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            모노레포의 <code className="text-indigo-300 bg-indigo-950/40 px-1.5 py-0.5 rounded">apps/demo</code>에서 독립적으로 빌드 및 실행되며,
            Vercel 서브도메인(<code className="text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded">demo.도메인</code>)으로 즉시 연결되는 데모 페이지입니다.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-zinc-800">
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'features'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              모노레포 특징
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'performance'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              Vercel 최적화
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'components'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Palette className="w-4 h-4" />
              공유 UI (@webay/ui)
            </button>
          </div>
        </div>

        {/* Dynamic Content by Tab */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-3 hover:border-zinc-700 transition">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white">독립적인 Next.js 앱</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <code className="text-zinc-200">apps/web</code>과 <code className="text-zinc-200">apps/demo</code>가 분리되어 있어 독립적으로 개발, 테스트, 빌드가 가능합니다.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                독립적 배포 파이프라인
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-3 hover:border-zinc-700 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white">공유 패키지 시스템</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                <code className="text-zinc-200">packages/ui</code>, <code className="text-zinc-200">typescript-config</code> 등 공통 코드를 한 곳에서 관리하여 중복을 제거합니다.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Zero-config TypeScript HMR
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-3 hover:border-zinc-700 transition">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white">도메인 분리 아키텍처</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                루트 도메인과 서브도메인을 Vercel 프로젝트 Root Directory 설정만으로 완벽하게 격리 배포합니다.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Vercel 네이티브 서브도메인 지원
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-6">
            <h2 className="text-xl font-bold text-white">Vercel 배포 세팅 안내</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-indigo-400">프로젝트 1: 메인 웹</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">기본 도메인</span>
                </div>
                <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                  <li>• Framework: Next.js</li>
                  <li>• Root Directory: <strong className="text-white">apps/web</strong></li>
                  <li>• Domain: yourdomain.com</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-400">프로젝트 2: 데모 앱</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">서브 도메인</span>
                </div>
                <ul className="text-xs text-zinc-400 space-y-2 font-mono">
                  <li>• Framework: Next.js</li>
                  <li>• Root Directory: <strong className="text-white">apps/demo</strong></li>
                  <li>• Domain: demo.yourdomain.com</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">@webay/ui 공유 컴포넌트 실시간 테스트</h2>
              <p className="text-xs text-zinc-400 mt-1">모든 패키지에서 공통으로 재사용되는 Button 컴포넌트입니다.</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center p-6 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <Button variant="default" className="bg-indigo-600 hover:bg-indigo-500 text-white">
                Default Button
              </Button>
              <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                Secondary Button
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-200 hover:bg-zinc-800">
                Outline Button
              </Button>
              <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                Ghost Button
              </Button>
            </div>
          </div>
        )}

        {/* Interactive Device Preview Container */}
        <div className="pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              실시간 렌더링 프리뷰 ({device})
            </h2>
            <span className="text-xs text-zinc-500">
              Next.js 15 App Router · Tailwind CSS v4
            </span>
          </div>

          <div className="flex justify-center">
            <div
              className={`transition-all duration-300 w-full rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl bg-zinc-900 ${
                device === 'mobile' ? 'max-w-sm' : 'max-w-full'
              }`}
            >
              {/* Fake Browser Top Bar */}
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4 bg-zinc-950 px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 text-center truncate border border-zinc-800/80">
                  https://demo.webay.dev
                </div>
              </div>

              {/* Mock Screen Content */}
              <div className="p-6 sm:p-8 space-y-6 bg-zinc-950">
                <div className="space-y-2">
                  <div className="inline-block text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    LIVE PREVIEW
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    웹 제작 데모 포트폴리오
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    실제 고객에게 제공될 인터랙티브 위젯, 반응형 뷰포트, 빠른 로딩 속도를 직접 체감할 수 있습니다.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">Lighthouse Score</div>
                    <div className="text-lg font-bold text-emerald-400">100 / 100</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">First Load JS</div>
                    <div className="text-lg font-bold text-indigo-400">&lt; 100 KB</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Monthly Cost</div>
                    <div className="text-lg font-bold text-white">0 KRW</div>
                  </div>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2">
                  <span>데모 상담 신청하기</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
        © 2026 webay. Monorepo Turborepo Architecture. All rights reserved.
      </footer>
    </div>
  );
}
