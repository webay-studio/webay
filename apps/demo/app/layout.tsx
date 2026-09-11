import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'webay Demo | 인터랙티브 체험 및 포트폴리오 데모',
  description: 'webay 스튜디오의 제작 컴포넌트, 성능, UI/UX를 직접 확인해보실 수 있는 실시간 인터랙티브 데모 사이트입니다.',
  openGraph: {
    title: 'webay Demo | 인터랙티브 체험 및 포트폴리오 데모',
    description: 'webay 스튜디오의 제작 컴포넌트, 성능, UI/UX를 직접 확인해보실 수 있는 실시간 인터랙티브 데모 사이트입니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
