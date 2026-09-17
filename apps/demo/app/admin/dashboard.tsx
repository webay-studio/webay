'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowDownToLine, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronLeft, ChevronRight, CircleHelp, Clock3, DoorOpen, LayoutDashboard, Menu, Plus, Search, SlidersHorizontal, Sparkles, Users, Wallet, X } from 'lucide-react';

type Status = '예약 확정' | '입금 대기' | '체크인' | '이용 완료' | '취소';
type Booking = { id: string; name: string; room: number; start: string; end: string; guests: number; amount: number; status: Status; memo: string };
type View = 'overview' | 'bookings' | 'rooms';
const TODAY = '2026-09-17';
const rooms = [
  { name: 'The Light House', label: '빛이 머무는 집', guests: 2, price: 240000, image: '/brand/living.jpg', size: '62㎡' },
  { name: 'The Courtyard', label: '바깥을 품은 집', guests: 4, price: 380000, image: '/brand/exterior.jpg', size: '118㎡' },
  { name: 'The Quiet Room', label: '고요를 닮은 방', guests: 2, price: 190000, image: '/brand/bedroom.jpg', size: '48㎡' },
];
const seed: Booking[] = [
  { id: 'SS-1028', name: '김서연', room: 0, start: '2026-09-17', end: '2026-09-19', guests: 2, amount: 480000, status: '예약 확정', memo: '오후 4시 방문 예정' },
  { id: 'SS-1027', name: '이도윤', room: 1, start: '2026-09-17', end: '2026-09-20', guests: 4, amount: 1140000, status: '체크인', memo: '웰컴 티 준비 완료' },
  { id: 'SS-1026', name: '박지우', room: 2, start: '2026-09-18', end: '2026-09-20', guests: 2, amount: 380000, status: '입금 대기', memo: '' },
  { id: 'SS-1025', name: '최하준', room: 0, start: '2026-09-21', end: '2026-09-23', guests: 2, amount: 480000, status: '예약 확정', memo: '기념일 방문' },
  { id: 'SS-1024', name: '정수빈', room: 2, start: '2026-09-15', end: '2026-09-17', guests: 1, amount: 380000, status: '이용 완료', memo: '객실 점검 완료' },
  { id: 'SS-1023', name: '한유진', room: 1, start: '2026-09-13', end: '2026-09-15', guests: 3, amount: 760000, status: '이용 완료', memo: '' },
  { id: 'SS-1022', name: '윤서준', room: 0, start: '2026-09-11', end: '2026-09-13', guests: 2, amount: 480000, status: '이용 완료', memo: '' },
  { id: 'SS-1021', name: '임다은', room: 2, start: '2026-09-08', end: '2026-09-10', guests: 2, amount: 380000, status: '이용 완료', memo: '' },
  { id: 'SS-1020', name: '강민준', room: 1, start: '2026-09-05', end: '2026-09-08', guests: 4, amount: 1140000, status: '이용 완료', memo: '' },
  { id: 'SS-1019', name: '송하린', room: 0, start: '2026-09-03', end: '2026-09-05', guests: 2, amount: 480000, status: '취소', memo: '일정 변경' },
  { id: 'SS-1018', name: '오지호', room: 2, start: '2026-09-01', end: '2026-09-03', guests: 2, amount: 380000, status: '이용 완료', memo: '' },
];
const statuses: Status[] = ['예약 확정', '입금 대기', '체크인', '이용 완료', '취소'];
const statusClass: Record<Status, string> = { '예약 확정': 'confirmed', '입금 대기': 'pending', '체크인': 'checked-in', '이용 완료': 'completed', '취소': 'cancelled' };
const won = (value: number) => `₩${value.toLocaleString('ko-KR')}`;
const nights = (start: string, end: string) => Math.round((Date.parse(end) - Date.parse(start)) / 86400000);
const paid = (booking: Booking) => !['입금 대기', '취소'].includes(booking.status);
const shortDate = (value: string) => value.slice(5).replace('-', '.');

export function AdminDashboard() {
  const [view, setView] = useState<View>('overview');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [bookings, setBookings] = useState(seed);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('전체');
  const [roomFilter, setRoomFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [period, setPeriod] = useState('month');
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [newRoom, setNewRoom] = useState(0);
  const [tasks, setTasks] = useState([false, true, false]);
  const dialog = useRef<HTMLDialogElement>(null);
  const helpDialog = useRef<HTMLDialogElement>(null);
  const current = bookings.find(item => item.id === selected);
  const title = view === 'overview' ? '대시보드' : view === 'bookings' ? '예약 관리' : '공간 관리';
  const monthly = bookings.filter(item => item.start.startsWith('2026-09') && item.status !== '취소');
  const revenue = monthly.filter(paid).reduce((sum, item) => sum + item.amount, 0);
  const arrivals = bookings.filter(item => item.start === TODAY && !['취소', '입금 대기'].includes(item.status));
  const departures = bookings.filter(item => item.end === TODAY && item.status !== '취소');
  const pending = bookings.filter(item => item.status === '입금 대기');
  const filtered = bookings.filter(item =>
    `${item.name} ${item.id} ${rooms[item.room].name}`.toLowerCase().includes(query.toLowerCase()) &&
    (status === '전체' || item.status === status) && (roomFilter === 'all' || item.room === Number(roomFilter))
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / 5));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * 5, currentPage * 5);
  const chartBookings = monthly.filter(item => paid(item) && (period === 'month' || (item.start >= '2026-09-11' && item.start <= TODAY)));
  const chartTotal = chartBookings.reduce((sum, item) => sum + item.amount, 0);
  const chartStart = period === 'month' ? 1 : 11;
  const chartLength = period === 'month' ? 30 : 7;
  const chartValues = Array.from({ length: chartLength }, (_, index) => chartBookings.filter(item => Number(item.start.slice(-2)) === index + chartStart).reduce((sum, item) => sum + item.amount, 0));
  const chartMax = Math.max(1000000, ...chartValues);
  const points = chartValues.map((amount, index) => `${25 + index * 625 / (chartLength - 1)},${165 - amount / chartMax * 130}`);

  function changeView(next: View) { setView(next); setMobileMenu(false); setPage(1); }
  function openBooking(id: string | null) { setSelected(id); setError(''); setNewRoom(0); dialog.current?.showModal(); }
  function exportCsv() {
    const escape = (value: string | number) => `"${String(value).replace(/^[=+@-]/, "'$&").replaceAll('"', '""')}"`;
    const rows = [['예약번호', '이름', '공간', '체크인', '체크아웃', '인원', '금액', '상태'], ...filtered.map(item => [item.id, item.name, rooms[item.room].name, item.start, item.end, item.guests, item.amount, item.status])];
    const url = URL.createObjectURL(new Blob(['\uFEFF' + rows.map(row => row.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8;' }));
    const link = document.createElement('a'); link.href = url; link.download = 'stay-slow-reservations.csv'; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(`현재 검색 조건의 예약 ${filtered.length}건을 CSV로 내보냈습니다.`);
  }

  return (
    <div className="ad-app">
      <a className="ad-skip" href="#ad-main">본문 바로가기</a>
      {mobileMenu && <button className="ad-scrim" aria-label="메뉴 닫기" onClick={() => setMobileMenu(false)} />}
      <aside className={`ad-sidebar ${mobileMenu ? 'is-open' : ''}`}>
        <a className="ad-logo" href="/brand">stay, slow<span>ADMIN</span></a>
        <div className="ad-workspace"><span className="ad-workspace-icon"><DoorOpen size={20} /></span><div><strong>스테이 슬로우</strong><small>브랜드 운영 워크스페이스</small></div><span className="ad-online" /></div>
        <p className="ad-nav-label">WORKSPACE</p>
        <nav aria-label="관리자 메뉴">{[{ key: 'overview' as const, label: '대시보드', icon: LayoutDashboard }, { key: 'bookings' as const, label: '예약 관리', icon: CalendarDays }, { key: 'rooms' as const, label: '공간 관리', icon: DoorOpen }].map(item => <button key={item.key} className={view === item.key ? 'active' : ''} aria-current={view === item.key ? 'page' : undefined} onClick={() => changeView(item.key)}><item.icon size={18} />{item.label}{item.key === 'bookings' && <span>{bookings.filter(booking => booking.status !== '취소').length}</span>}</button>)}</nav>
        <div className="ad-sidebar-bottom"><div className="ad-tip"><Sparkles size={20} /><strong>좋은 머무름의 시작,<br />더 가벼운 운영.</strong><p>예약부터 공간 관리까지<br />한곳에서 편하게 확인하세요.</p><a href="/brand" target="_blank" rel="noreferrer">브랜드 사이트 보기 <ArrowUpRight size={14} /></a></div><button className="ad-help" onClick={() => helpDialog.current?.showModal()}><CircleHelp size={17} /> 데모 이용 안내 <ArrowUpRight size={14} /></button><div className="ad-profile"><span>Y</span><div><strong>윤 매니저</strong><small>워크스페이스 관리자</small></div><i>DEMO</i></div></div>
      </aside>

      <div className="ad-shell">
        <header className="ad-topbar"><div><button className="ad-menu-button" aria-label="관리자 메뉴 열기" aria-expanded={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}><Menu size={22} /></button><span>워크스페이스</span><ChevronRight size={13} /><strong>{title}</strong></div><div><span className="ad-demo-pill"><span /> 라이브 데모</span><a href="/brand" target="_blank" rel="noreferrer">사이트 보기 <ArrowUpRight size={15} /></a><span className="ad-avatar">Y</span></div></header>
        <main id="ad-main" className="ad-main">
          <div className="ad-page-heading"><div><p className="ad-eyebrow">STAY, SLOW. WORKSPACE</p><h1>{view === 'overview' ? '좋은 하루예요, 윤 매니저님' : title}<span className="ad-heading-dot">.</span></h1><p>{view === 'overview' ? '오늘의 머무름을 준비하는 데 필요한 모든 것을 한눈에 확인하세요.' : view === 'bookings' ? '예약을 찾고, 방문 일정과 진행 상태를 관리하세요.' : '각 공간의 오늘과 다음 머무름을 살펴보세요.'}</p></div><button className="ad-primary" onClick={() => openBooking(null)}><Plus size={17} /> 새 예약 등록</button></div>
          <div className="ad-context"><span><CalendarDays size={14} /> 2026년 9월 17일 목요일 <b>예시 기준일</b></span><span>모든 정보는 가상 데이터이며, 새로고침하면 초기화됩니다.</span></div>
          {notice && <div className="ad-notice" role="status"><Check size={17} />{notice}<button aria-label="알림 닫기" onClick={() => setNotice('')}><X size={15} /></button></div>}

          {view === 'overview' && <>
            <section className="ad-stats" aria-label="운영 요약">{[
              { label: '9월 예약 매출', value: won(revenue), sub: '확정·체크인·이용 완료 기준', icon: Wallet, color: 'purple' },
              { label: '9월 전체 예약', value: `${monthly.length}건`, sub: '체크인 날짜 기준 · 취소 제외', icon: CalendarDays, color: 'blue' },
              { label: '오늘 체크인', value: `${arrivals.length}건`, sub: `오늘 체크아웃 ${departures.length}건`, icon: DoorOpen, color: 'orange' },
              { label: '확인이 필요한 예약', value: `${pending.length}건`, sub: '입금 확인 후 예약을 확정하세요', icon: Clock3, color: 'green' },
            ].map(item => <article key={item.label} className="ad-stat"><div><span>{item.label}</span><i className={item.color}><item.icon size={18} /></i></div><strong>{item.value}</strong><p>{item.sub}</p></article>)}</section>

            <div className="ad-analytics"><section className="ad-panel ad-revenue"><div className="ad-panel-heading"><div><h2>예약 매출 추이</h2><p>체크인 날짜별 확정 예약 금액</p></div><div className="ad-segment" aria-label="매출 기간"><button aria-pressed={period === 'week'} onClick={() => setPeriod('week')}>최근 7일</button><button aria-pressed={period === 'month'} onClick={() => setPeriod('month')}>이번 달</button></div></div><div className="ad-chart-total"><strong>{won(chartTotal)}</strong><span>{period === 'month' ? '9월 1일 — 30일' : '9월 11일 — 17일'}</span></div><div className="ad-chart"><div className="ad-chart-labels"><span>{Math.ceil(chartMax / 10000)}만</span><span>{Math.ceil(chartMax / 20000)}만</span><span>0</span></div><svg viewBox="0 0 680 200" role="img" aria-label={`${period === 'month' ? '9월' : '최근 7일'} 예약 매출 합계 ${won(chartTotal)}. 날짜별 금액은 각 막대의 설명으로 확인할 수 있습니다.`}><defs><linearGradient id="ad-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8978ed" stopOpacity=".2" /><stop offset="100%" stopColor="#8978ed" stopOpacity=".01" /></linearGradient></defs>{[35, 100, 165].map(y => <line key={y} x1="20" x2="655" y1={y} y2={y} stroke="#eeeef4" strokeDasharray="4 5" />)}<path d={`M25,165 L${points.join(' L')} L650,165 Z`} fill="url(#ad-chart-fill)" /><polyline points={points.join(' ')} fill="none" stroke="#8974dc" strokeWidth="2.5" strokeLinejoin="round" />{chartValues.map((amount, index) => <g key={index}><title>{`9월 ${chartStart + index}일: ${won(amount)}`}</title><rect x={25 + index * 625 / (chartLength - 1) - 7} y={25} width="14" height="145" fill="transparent" />{amount > 0 && <circle cx={25 + index * 625 / (chartLength - 1)} cy={165 - amount / chartMax * 130} r="3.5" fill="#8974dc" stroke="white" strokeWidth="2" />}</g>)}{[0, Math.floor((chartLength - 1) / 3), Math.floor((chartLength - 1) * 2 / 3), chartLength - 1].map(index => <text key={index} x={25 + index * 625 / (chartLength - 1)} y="195" textAnchor="middle" fill="#9596a5" fontSize="10">09.{String(chartStart + index).padStart(2, '0')}</text>)}</svg></div></section>
            <section className="ad-panel ad-today"><div className="ad-panel-heading"><div><h2>오늘의 머무름</h2><p>손님을 맞이할 준비를 해볼까요?</p></div><span className="ad-count">{arrivals.length}</span></div>{arrivals.map(item => <button className="ad-arrival" key={item.id} onClick={() => openBooking(item.id)}><span className={`ad-initial room-${item.room}`}>{item.name.slice(0, 1)}</span><span><strong>{item.name}<small>{item.guests}명 · {nights(item.start, item.end)}박</small></strong><small>{rooms[item.room].name}</small></span><span className={`ad-badge ${statusClass[item.status]}`}>{item.status}</span></button>)}{!arrivals.length && <p className="ad-empty-small">오늘 예정된 체크인이 없습니다.</p>}<div className="ad-tasks"><span>TODAY’S CHECKLIST</span>{['체크인 안내 메시지 준비', '객실 컨디션 점검', '웰컴 티와 어메니티 준비'].map((task, index) => <label key={task}><input type="checkbox" checked={tasks[index]} onChange={() => setTasks(tasks.map((value, i) => i === index ? !value : value))} /><span>{task}</span></label>)}</div></section></div>
          </>}

          {view !== 'rooms' && <section className="ad-panel ad-reservations"><div className="ad-panel-heading"><div><h2>{view === 'overview' ? '예약 현황' : '전체 예약'} <span className="ad-heading-count">{bookings.length}</span></h2><p>손님과 공간을 잇는, 모든 예약 내역</p></div><button className="ad-outline" onClick={exportCsv}><ArrowDownToLine size={15} /> CSV 내보내기</button></div><div className="ad-table-tools"><div className="ad-table-tabs" aria-label="예약 상태">{['전체', '예약 확정', '입금 대기', '체크인', '이용 완료', '취소'].map(item => <button key={item} aria-pressed={status === item} onClick={() => { setStatus(item); setPage(1); }}>{item}</button>)}</div><div className="ad-search-tools"><label className="ad-search"><Search size={16} /><input aria-label="예약 검색" placeholder="이름, 예약번호, 공간 검색" value={query} onChange={event => { setQuery(event.target.value); setPage(1); }} /></label><label className="ad-room-filter"><SlidersHorizontal size={14} /><select aria-label="공간 필터" value={roomFilter} onChange={event => { setRoomFilter(event.target.value); setPage(1); }}><option value="all">모든 공간</option>{rooms.map((room, index) => <option key={room.name} value={index}>{room.name}</option>)}</select></label></div></div><div className="ad-table-scroll"><table><thead><tr><th>예약자 / 예약번호</th><th>예약 공간</th><th>이용 일정</th><th>인원</th><th>예약 금액</th><th>상태</th><th><span className="ad-sr-only">상세 보기</span></th></tr></thead><tbody>{visible.map(item => <tr key={item.id}><td><div className="ad-guest"><span className={`ad-initial room-${item.room}`}>{item.name.slice(0, 1)}</span><div><strong>{item.name}</strong><small>{item.id}</small></div></div></td><td>{rooms[item.room].name}</td><td><span>{shortDate(item.start)} — {shortDate(item.end)}</span><small>{nights(item.start, item.end)}박</small></td><td>{item.guests}명</td><td className="ad-money">{won(item.amount)}</td><td><span className={`ad-badge ${statusClass[item.status]}`}>{item.status}</span></td><td><button className="ad-row-open" aria-label={`${item.name} 예약 상세`} onClick={() => openBooking(item.id)}><ChevronRight size={17} /></button></td></tr>)}</tbody></table>{!visible.length && <div className="ad-empty"><Search size={27} /><h3>조건에 맞는 예약이 없어요.</h3><p>검색어나 필터를 바꿔 다시 확인해 보세요.</p><button className="ad-outline" onClick={() => { setQuery(''); setStatus('전체'); setRoomFilter('all'); setPage(1); }}>필터 초기화</button></div>}</div><div className="ad-pagination"><span>총 {filtered.length}건 중 {filtered.length ? (currentPage - 1) * 5 + 1 : 0}–{Math.min(currentPage * 5, filtered.length)}건</span><div><button aria-label="이전 페이지" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}><ChevronLeft size={15} /></button>{Array.from({ length: pageCount }, (_, i) => <button key={i} aria-label={`${i + 1}페이지`} aria-current={currentPage === i + 1 ? 'page' : undefined} onClick={() => setPage(i + 1)}>{i + 1}</button>)}<button aria-label="다음 페이지" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}><ChevronRight size={15} /></button></div></div></section>}

          {view === 'rooms' && <section className="ad-room-grid" aria-label="공간 현황">{rooms.map((room, index) => { const staying = bookings.find(item => item.room === index && item.start <= TODAY && item.end > TODAY && !['취소', '입금 대기'].includes(item.status)); const next = bookings.filter(item => item.room === index && item.start > TODAY && item.status === '예약 확정').sort((a, b) => a.start.localeCompare(b.start))[0]; return <article className="ad-panel ad-room-card" key={room.name}><div className="ad-room-photo"><Image src={room.image} alt={room.label} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className={`ad-badge ${staying ? 'checked-in' : 'completed'}`}>{staying ? '오늘 예약 있음' : '오늘 예약 없음'}</span></div><div className="ad-room-body"><span className="ad-eyebrow">{room.label}</span><h2>{room.name}</h2><p><Users size={14} /> 최대 {room.guests}인 <span>·</span> {room.size}</p><dl><div><dt>기본 1박 요금</dt><dd>{won(room.price)}</dd></div><div><dt>오늘 예약자</dt><dd>{staying ? staying.name : '없음'}</dd></div><div><dt>다음 확정 예약</dt><dd>{next ? `${shortDate(next.start)} · ${next.name}` : '예정 없음'}</dd></div></dl><button className="ad-outline" onClick={() => { setRoomFilter(String(index)); setQuery(''); setStatus('전체'); changeView('bookings'); }}>이 공간 예약 보기 <ArrowRight size={15} /></button></div></article>; })}</section>}
          <div className="ad-footer"><span>© 2026 STAY, SLOW. Workspace</span><span>Thoughtfully designed by <b>webay.</b></span></div>
        </main>
      </div>

      <dialog ref={dialog} className="ad-dialog" aria-labelledby="ad-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="ad-close" aria-label="예약 창 닫기" onClick={() => dialog.current?.close()}><X size={20} /></button><span className="ad-eyebrow">RESERVATION · DEMO</span><h2 id="ad-dialog-title">{current ? `${current.name}님의 예약` : '새로운 머무름 등록'}</h2><p>{current ? `${current.id} · ${rooms[current.room].name}` : '가상의 손님 정보로 예약 관리 흐름을 체험해 보세요.'}</p>
        <form key={selected || 'new'} onSubmit={event => {
          event.preventDefault(); const data = new FormData(event.currentTarget);
          if (current) {
            const nextStatus = String(data.get('status')) as Status;
            if (nextStatus !== '취소' && bookings.some(item => item.id !== current.id && item.room === current.room && item.status !== '취소' && current.start < item.end && current.end > item.start)) { setError('같은 기간에 겹치는 예약이 있어 상태를 변경할 수 없습니다.'); return; }
            setBookings(bookings.map(item => item.id === current.id ? { ...item, status: nextStatus, memo: String(data.get('memo') || '').trim() } : item));
            setNotice(`${current.id} 예약 정보를 저장했습니다.`);
          } else {
            const name = String(data.get('name') || '').trim(); const room = Number(data.get('room')); const start = String(data.get('start')); const end = String(data.get('end')); const guests = Number(data.get('guests')); const count = nights(start, end);
            if (!name || !rooms[room] || start < TODAY || !Number.isFinite(count) || count < 1 || guests < 1 || guests > rooms[room].guests) { setError('예약자, 날짜 순서와 공간의 최대 인원을 확인해 주세요.'); return; }
            if (bookings.some(item => item.room === room && item.status !== '취소' && start < item.end && end > item.start)) { setError('선택한 공간에 겹치는 예약이 있습니다. 다른 날짜를 선택해 주세요.'); return; }
            const nextId = `SS-${Math.max(...bookings.map(item => Number(item.id.slice(3)))) + 1}`;
            setBookings([{ id: nextId, name, room, start, end, guests, amount: count * rooms[room].price, status: '예약 확정', memo: String(data.get('memo') || '').trim() }, ...bookings]);
            setPage(1); setQuery(''); setStatus('전체'); setRoomFilter('all'); setNotice(`${name}님의 예약을 등록했습니다. (${nextId})`);
          }
          dialog.current?.close();
        }}>
          {current ? <><div className="ad-detail-summary"><div><small>이용 일정</small><strong>{current.start} — {current.end}</strong></div><div><small>인원 / 숙박</small><strong>{current.guests}명 · {nights(current.start, current.end)}박</strong></div><div><small>예약 금액</small><strong>{won(current.amount)}</strong></div></div><label>예약 상태<select name="status" defaultValue={current.status}>{statuses.map(item => <option key={item}>{item}</option>)}</select></label></> : <><label>예약자 이름<input name="name" placeholder="가상 이름을 입력하세요" required maxLength={30} /></label><label>예약 공간<select name="room" value={newRoom} onChange={event => setNewRoom(Number(event.target.value))}>{rooms.map((room, index) => <option key={room.name} value={index}>{room.name} · 최대 {room.guests}인</option>)}</select></label><div className="ad-form-row"><label>체크인<input name="start" type="date" min={TODAY} required /></label><label>체크아웃<input name="end" type="date" min="2026-09-18" required /></label></div><label>인원<select name="guests" key={newRoom} defaultValue="2">{Array.from({ length: rooms[newRoom].guests }, (_, i) => <option key={i} value={i + 1}>{i + 1}명</option>)}</select></label><p className="ad-form-hint">1박 {won(rooms[newRoom].price)} · 숙박 일수에 따라 자동 계산</p></>}
          <label>운영 메모<textarea name="memo" defaultValue={current?.memo || ''} placeholder="방문 준비에 필요한 내용을 남겨보세요." maxLength={300} rows={3} /></label><p role="alert" className="ad-form-error">{error}</p><div className="ad-form-actions"><button type="button" className="ad-outline" onClick={() => dialog.current?.close()}>닫기</button><button type="submit" className="ad-primary"><Check size={16} />{current ? '변경사항 저장' : '예약 등록'}</button></div><p className="ad-form-hint">이 브라우저에서만 적용되는 데모입니다. 실제 개인정보는 입력하지 마세요.</p>
        </form>
      </dialog>
      <dialog ref={helpDialog} className="ad-dialog" aria-labelledby="ad-help-title" onClick={event => { if (event.target === event.currentTarget) helpDialog.current?.close(); }}><button className="ad-close" aria-label="이용 안내 닫기" onClick={() => helpDialog.current?.close()}><X size={20} /></button><span className="ad-eyebrow">WELCOME TO THE WORKSPACE</span><h2 id="ad-help-title">직접 운영해 보세요.</h2><div className="ad-help-copy"><p>예약 검색·필터, CSV 내보내기, 신규 예약 등록, 상태 및 메모 변경을 체험할 수 있습니다.</p><p>같은 공간의 일정 중복과 최대 인원을 검사하며, 변경된 예약은 대시보드에도 반영됩니다.</p><p>2026년 9월 17일을 기준으로 한 가상의 데이터입니다. 실제 브랜드 예약과 연결되지 않으며, 새로고침하면 초기 상태로 돌아갑니다.</p></div><button className="ad-primary" onClick={() => helpDialog.current?.close()}>시작하기 <ArrowRight size={16} /></button></dialog>
    </div>
  );
}
