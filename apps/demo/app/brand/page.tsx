import type { Metadata } from 'next';
import { StaySlow } from './stay-slow';
import './stay-slow.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3001')),
  title: 'STAY, SLOW. | 온전히 나의 속도로',
  description: '일상에서 한 걸음 떨어져, 온전히 나의 속도로. 공간과 느린 여행을 제안하는 STAY, SLOW. 브랜드 웹사이트 데모.',
  openGraph: {
    title: 'STAY, SLOW. | 온전히 나의 속도로',
    description: '공간에 머물고, 나에게 돌아오는 시간. webay의 공간 브랜드 웹사이트 콘셉트.',
    images: [{ url: '/brand/living.jpg', width: 1800, height: 1350, alt: '햇살이 드는 따뜻한 라운지' }],
    type: 'website',
  },
};

export default function BrandPage() {
  return <StaySlow />;
}
