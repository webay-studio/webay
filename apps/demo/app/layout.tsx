import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '온유병원 | 당신의 건강에, 온유한 진심을',
  description: '충분히 듣고, 세심하게 살피는 온유병원. 내과, 건강검진, 가정의학과와 웰니스 진료를 소개하는 webay 디자인 데모입니다.',
  openGraph: {
    title: '온유병원 | 당신의 건강에, 온유한 진심을',
    description: '당신의 건강한 일상에 함께하는 온유병원 — webay 병원 홈페이지 디자인 데모.',
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
      <body>
        {children}
      </body>
    </html>
  );
}
