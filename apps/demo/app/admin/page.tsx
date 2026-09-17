import type { Metadata } from 'next';
import { AdminDashboard } from './dashboard';
import './dashboard.css';

export const metadata: Metadata = {
  title: 'STAY, SLOW. Admin | 운영 대시보드',
  description: '예약 관리, 매출 분석, 객실 현황을 한눈에 확인하는 webay 관리자 페이지 데모.',
  robots: { index: false, follow: false },
  openGraph: { title: 'STAY, SLOW. Admin', description: 'webay 스테이 운영 관리자 데모' },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
