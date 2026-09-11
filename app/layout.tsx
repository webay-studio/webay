import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'webay | 1인 모던 웹 개발 스튜디오',
  description: '매달 나가는 유지보수비 0원, 완성도 높은 코드로 100% 소유하는 모던 웹. 비개발자 창업가와 소상공인을 위한 투명한 1인 개발 스튜디오 webay입니다.',
  openGraph: {
    title: 'webay | 1인 모던 웹 개발 스튜디오',
    description: '매달 나가는 유지보수비 0원, 완성도 높은 코드로 100% 소유하는 모던 웹. 비개발자 창업가와 소상공인을 위한 투명한 1인 개발 스튜디오 webay입니다.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'webay | 1인 모던 웹 개발 스튜디오',
    description: '매달 나가는 유지보수비 0원, 완성도 높은 코드로 100% 소유하는 모던 웹. 비개발자 창업가와 소상공인을 위한 투명한 1인 개발 스튜디오 webay입니다.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-[#fcfdfd] text-zinc-900 antialiased selection:bg-indigo-500/15 selection:text-indigo-950 min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

