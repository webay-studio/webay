'use client';

import { useState } from 'react';
import { Server, GitPullRequest, Check, Shield } from 'lucide-react';

export function ProcessOptionAction() {
  const [activeOption, setActiveOption] = useState<'a' | 'b'>('b');

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        id="process-option-a"
        onClick={() => setActiveOption('a')}
        className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
          activeOption === 'a'
            ? 'bg-white border-[#7C3AED] shadow-[0_8px_30px_rgba(124,58,237,0.12)] ring-1 ring-[#7C3AED]'
            : 'bg-zinc-50/80 border-zinc-200/90 hover:bg-white'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-zinc-900 bg-zinc-200/80 px-2.5 py-1 rounded-md">
              옵션 A. 알아서 띄워주세요 (간편형)
            </span>
            <Server className={`w-4 h-4 ${activeOption === 'a' ? 'text-[#7C3AED]' : 'text-zinc-500'}`} />
          </div>
          <div className="text-base font-bold text-zinc-900 mt-2">
            골치 아픈 거 없이 바로 띄우기
          </div>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
            복잡한 기술 계정 만들 필요 없이, 제가 알아서 무료 서버에 띄워두고 잘 돌아가게 해드려요.
          </p>
        </div>
        <div className="mt-5 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED]">
          <Check className="w-3.5 h-3.5" />
          <span>신경 쓸 것 없이 가장 편해요</span>
        </div>
      </div>

      <div
        id="process-option-b"
        onClick={() => setActiveOption('b')}
        className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
          activeOption === 'b'
            ? 'bg-white border-[#7C3AED] shadow-[0_8px_30px_rgba(124,58,237,0.12)] ring-1 ring-[#7C3AED]'
            : 'bg-zinc-50/80 border-zinc-200/90 hover:bg-white'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200/60 px-2.5 py-1 rounded-md">
              옵션 B. 직접 다 챙겨주세요 (소유형)
            </span>
            <GitPullRequest className={`w-4 h-4 ${activeOption === 'b' ? 'text-[#7C3AED]' : 'text-zinc-500'}`} />
          </div>
          <div className="text-base font-bold text-zinc-900 mt-2">
            코드와 계정을 전부 내 것으로
          </div>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
            나중에 다른 사람에게 맡기거나 직접 관리하고 싶으실 때. 완료 후 구글 아이디만 주시면 코드와 서버 권한을 전부 넘겨드려요.
          </p>
        </div>
        <div className="mt-5 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
          <Shield className="w-3.5 h-3.5" />
          <span>언제든 100% 자유롭게 관리 가능</span>
        </div>
      </div>
    </div>
  );
}
