import type { Metadata } from 'next';
import { WeddingInvitation } from './wedding-invitation';
import './wedding.css';

export const metadata: Metadata = {
  title: '서준과 하은, 우리의 시작 | webay 청첩장 데모',
  description: '2027년 5월 22일, 함께하는 모든 계절. 세이지와 아이보리 컬러의 모바일 청첩장 디자인 데모.',
  openGraph: { title: '서준과 하은, 우리의 시작', description: '함께하는 모든 계절 — webay 모바일 청첩장 데모', type: 'website' },
};

export default function WeddingPage() { return <WeddingInvitation />; }
