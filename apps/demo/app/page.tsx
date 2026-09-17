'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, HeartPulse, Leaf, MapPin, Menu, Plus, ShieldCheck, Stethoscope, X } from 'lucide-react';

const specialties = [
  { name: '내과', english: 'INTERNAL MEDICINE', icon: Stethoscope, title: '작은 신호부터,\n세심하게 살핍니다.', description: '일상 속 작은 불편함도 가볍게 넘기지 않습니다. 충분한 대화와 체계적인 진료로 나에게 맞는 건강 관리를 시작하세요.', tags: ['소화기 질환', '만성질환 관리', '호흡기 질환'], image: 'photo-1576091160399-112ba8d25d1d' },
  { name: '건강검진', english: 'HEALTH SCREENING', icon: ShieldCheck, title: '건강한 내일을 위한,\n오늘의 좋은 선택.', description: '나이와 생활 습관, 가족력을 함께 살피는 맞춤 검진. 검사 전 상담부터 결과에 대한 설명까지 차근차근 함께합니다.', tags: ['맞춤 건강검진', '국가 건강검진', '검진 결과 상담'], image: 'photo-1576091160550-2173dba999ef' },
  { name: '가정의학과', english: 'FAMILY MEDICINE', icon: HeartPulse, title: '나와 가족의 건강을,\n오래도록 함께.', description: '가족의 일상을 이해하는 가까운 주치의. 생애 주기에 맞춘 예방과 상담으로 지속적인 건강 관리를 돕습니다.', tags: ['생애 주기별 관리', '예방접종', '건강 상담'], image: 'photo-1576091160399-112ba8d25d1d' },
  { name: '웰니스 클리닉', english: 'WELLNESS CLINIC', icon: Leaf, title: '몸과 마음이 찾는,\n일상의 균형.', description: '수면, 영양, 생활 습관까지 나의 일상을 돌아봅니다. 개인별 상담을 통해 지속 가능한 건강 습관을 함께 만들어갑니다.', tags: ['영양 상담', '생활 습관 관리', '수면 상담'], image: 'photo-1472396961693-142e6e269027' },
];
const navigation = [['온유 소개', '#about'], ['진료 안내', '#care'], ['온유의 약속', '#promise'], ['병원 소식', '#news'], ['오시는 길', '#visit']];
const news = [
  { category: '진료 안내', title: '처음 방문하시는 분들을 위한 이용 안내', date: '2026.09.01', body: '처음 방문하실 때는 신분증을 지참해 주세요. 복용 중인 약이나 이전 검사 결과가 있다면 상담 시 함께 확인할 수 있습니다. 이 페이지는 가상 병원 데모이며 실제 진료는 제공하지 않습니다.' },
  { category: '온유 이야기', title: '머무는 순간까지 편안한, 온유의 공간', date: '2026.08.24', body: '온유는 진료를 기다리는 시간도 편안하기를 바랍니다. 자연을 닮은 색, 따뜻한 빛, 여유 있는 대기 공간을 통해 환자 중심의 병원 경험을 제안합니다.' },
  { category: '이용 안내', title: '건강검진 상담은 어떻게 진행되나요?', date: '2026.08.12', body: '건강검진은 현재 건강 상태와 생활 습관을 확인하는 상담에서 시작합니다. 필요한 검사와 준비 사항은 의료진과 상담 후 결정합니다. 데모 예약에서 검진 상담 과정을 체험해 보세요.' },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="온유병원 홈"><span className="brand-symbol"><Plus strokeWidth={1.4} /></span><span>온유병원<small>ONYU HOSPITAL</small></span></a>;
}

function ClinicHours() {
  return <><dl><div><dt>평일</dt><dd>09:00 — 18:00</dd></div><div><dt>토요일</dt><dd>09:00 — 13:00</dd></div><div><dt>점심시간</dt><dd>13:00 — 14:00</dd></div></dl><small>일요일 · 공휴일 휴진 / 데모용 진료시간입니다.</small></>;
}

function ClinicLocation() {
  return <><p>서울특별시 강남구 · 상세 위치 준비 중</p><small>가상 병원으로 실제 방문 주소는 제공하지 않습니다.</small></>;
}

export default function DemoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCare, setActiveCare] = useState(0);
  const [reserved, setReserved] = useState(false);
  const [article, setArticle] = useState<(typeof news)[number] | null>(null);
  const [visitInfo, setVisitInfo] = useState<'hours' | 'location'>('hours');
  const visitDialog = useRef<HTMLDialogElement>(null);
  const bookingDialog = useRef<HTMLDialogElement>(null);
  const articleDialog = useRef<HTMLDialogElement>(null);
  const specialty = specialties[activeCare];
  useEffect(() => { if (article) articleDialog.current?.showModal(); }, [article]);
  const openVisitInfo = (info: 'hours' | 'location') => { setVisitInfo(info); setMenuOpen(false); visitDialog.current?.showModal(); };
  const openBooking = () => { setReserved(false); setMenuOpen(false); bookingDialog.current?.showModal(); };

  return <div id="top">
    <a className="skip-link" href="#main">본문 바로가기</a>
    <div className="utility-bar"><span>당신의 일상에, 건강한 온기를 더합니다.</span><span>WEBAY DESIGN DEMO <span className="utility-dot" /> 가상 병원 홈페이지</span></div>
    <header className="site-header"><Brand /><nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="주 메뉴">{navigation.map(([label, href]) => href === '#visit' ? <button key={href} className="navigation-info" onClick={() => openVisitInfo('location')} aria-haspopup="dialog">{label}</button> : <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="header-actions"><button className="booking-button" onClick={openBooking}>진료 예약 <ArrowUpRight size={16} /></button><button className="menu-toggle" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-image" /><div className="hero-content"><span className="eyebrow light"><span /> CARE THAT STAYS WITH YOU</span><h1 id="hero-title">당신의 건강에,<br />온유한 진심을.</h1><p>몸의 작은 신호에 귀 기울이고,<br />건강한 일상으로 돌아가는 길에 함께합니다.</p></div><div className="hero-bottom"><span>더 가까이, 더 따뜻하게. 온유병원</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={15} /></a><span className="hero-index">ONYU <span /> CARE</span></div><div className="hero-caption">A little care.<br /><em>A better everyday.</em></div></section>
      <section className="quick-links container" aria-label="빠른 이용 안내"><button onClick={() => setArticle(news[0])} aria-haspopup="dialog"><CalendarDays /><span><strong>처음 방문 안내</strong><small>방문 전 알아두면 좋은 것</small></span><ArrowUpRight /></button><a href="#care"><Stethoscope /><span><strong>진료과 안내</strong><small>나에게 필요한 진료 찾기</small></span><ArrowUpRight /></a><button onClick={() => openVisitInfo('hours')} aria-haspopup="dialog"><Clock3 /><span><strong>진료시간 안내</strong><small>진료시간 간편하게 확인</small></span><ArrowUpRight /></button><button onClick={() => openVisitInfo('location')} aria-haspopup="dialog"><MapPin /><span><strong>오시는 길</strong><small>위치 안내 간편하게 확인</small></span><ArrowUpRight /></button></section>
      <section className="intro container" id="about"><div><span className="eyebrow">HELLO, ONYU</span><h2>좋은 진료는,<br /><span className="muted-heading">당신을 이해하는 것부터.</span></h2></div><div className="intro-copy"><p>같은 증상이라도, 저마다의 이야기는 다르기에.<br />온유는 질환 너머의 사람을 먼저 바라봅니다.</p><p>충분히 듣고, 알기 쉽게 설명하며, 함께 답을 찾는 진료.<br />당신의 매일이 조금 더 건강하고 편안해지도록<br />가장 가까운 곳에서 함께하겠습니다.</p><a className="text-link" href="#promise">온유의 진료 철학 <ArrowUpRight size={17} /></a></div></section>
      <section className="care-section" id="care"><div className="container"><div className="section-heading"><div><span className="eyebrow">OUR SPECIALTIES</span><h2>당신에게 필요한, 세심한 진료</h2></div><span className="section-note">오늘의 진료부터 내일의 건강까지.</span></div><div className="care-tabs" role="tablist" aria-label="진료 분야">{specialties.map((item, index) => <button id={`care-tab-${index}`} role="tab" aria-selected={activeCare === index} aria-controls="care-panel" tabIndex={activeCare === index ? 0 : -1} key={item.name} onClick={() => setActiveCare(index)} onKeyDown={event => { if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowRight' ? 1 : 3)) % 4; setActiveCare(next); document.getElementById(`care-tab-${next}`)?.focus(); } }}><item.icon size={21} />{item.name}<ArrowUpRight size={16} /></button>)}</div><div className="care-panel" id="care-panel" role="tabpanel" aria-labelledby={`care-tab-${activeCare}`}><div className="care-copy"><span className="eyebrow">{specialty.english}</span><h3>{specialty.title}</h3><p>{specialty.description}</p><div className="care-tags">{specialty.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="text-link" onClick={() => openVisitInfo('hours')} aria-haspopup="dialog">진료시간 확인 <Clock3 size={17} /></button></div><div className="care-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${specialty.image}?auto=format&fit=crop&w=1000&q=85)` }} role="img" aria-label={`${specialty.name} 소개를 위한 이미지`}><span>Thoughtful care, for every you.</span></div></div></div></section>
      <section className="promise-section container" id="promise"><div className="section-heading"><div><span className="eyebrow">THE ONYU PROMISE</span><h2>변하지 않을, 세 가지 약속</h2></div><p className="section-note">진료의 모든 순간에<br />온유의 진심을 담겠습니다.</p></div><div className="promise-grid">{[{ number: '01', icon: HeartPulse, title: '충분히 듣는 진료', text: '작은 불편함부터 일상의 고민까지.\n당신의 이야기에 먼저 귀 기울입니다.' }, { number: '02', icon: ShieldCheck, title: '이해를 돕는 설명', text: '어려운 의학 용어 대신 쉬운 말로.\n진료 과정과 치료 방향을 함께 나눕니다.' }, { number: '03', icon: Leaf, title: '일상까지 이어지는 돌봄', text: '진료실을 나선 뒤의 건강도 생각합니다.\n꾸준한 관리로 건강한 일상을 돕습니다.' }].map(item => <article key={item.number}><div className="promise-top"><span>{item.number}</span><item.icon size={31} strokeWidth={1.2} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="space-banner"><div className="container"><span className="eyebrow light">A SPACE FOR YOUR WELLBEING</span><h2>머무는 순간에도,<br />편안함이 스며들도록.</h2><p>따뜻한 빛과 자연의 여유를 담은 공간.<br />온유에서 잠시, 당신의 건강에만 집중하세요.</p><button className="visit-banner-link" onClick={() => openVisitInfo('location')} aria-haspopup="dialog">온유 만나러 가기 <ArrowUpRight size={18} /></button></div></section>
      <section className="news-section container" id="news"><div className="section-heading"><div><span className="eyebrow">ONYU JOURNAL</span><h2>온유의 새로운 이야기</h2></div><span className="section-note">가까이에서 전하는 온유 소식</span></div><div className="news-grid">{news.map(item => <button className="news-card" key={item.title} onClick={() => setArticle(item)}><span className="news-category">{item.category}</span><h3>{item.title}</h3><div><time>{item.date}</time><ArrowUpRight size={21} /></div></button>)}</div></section>
      <section className="visit-section" id="visit"><div className="container visit-grid"><div><span className="eyebrow">WE ARE HERE FOR YOU</span><h2>건강한 일상으로 가는 길,<br />온유가 함께할게요.</h2><p>방문 전 진료시간을 확인해 주세요.</p><button className="booking-button" onClick={openBooking}>진료 예약하기 <ArrowUpRight size={18} /></button></div><div className="visit-details"><h3><Clock3 size={20} /> 진료시간 안내</h3><ClinicHours /><div className="address"><MapPin size={20} /><div><strong>온유병원 오시는 길</strong><ClinicLocation /></div></div></div></div></section>
    </main>
    <footer><div className="container"><div className="footer-top"><Brand light /><p>당신의 건강에, 온유한 진심을.</p><a href="#top">맨 위로 <ArrowUpRight size={17} /></a></div><div className="footer-bottom"><span>© 2026 ONYU HOSPITAL. Designed by webay.</span><span>본 사이트는 가상의 병원을 소개하는 디자인 데모입니다.</span></div></div></footer>
    <dialog ref={bookingDialog} className="modal" onClick={event => { if (event.target === event.currentTarget) bookingDialog.current?.close(); }} aria-labelledby="booking-title"><button className="modal-close" aria-label="예약 창 닫기" onClick={() => bookingDialog.current?.close()}><X /></button>{reserved ? <div className="booking-success"><span className="success-icon"><Check /></span><span className="eyebrow">THANK YOU</span><h2 id="booking-title">예약 체험을 완료했어요.</h2><p>실제 예약이나 개인정보 전송은 이루어지지 않습니다.<br />온유의 따뜻한 진료 경험을 만나 주셔서 감사합니다.</p><button className="booking-button" onClick={() => bookingDialog.current?.close()}>확인 <ArrowRight size={17} /></button></div> : <><span className="eyebrow">YOUR FIRST STEP TO WELLNESS</span><h2 id="booking-title">온유 진료 예약</h2><p className="modal-description">원하시는 진료와 방문 일정을 선택해 주세요.<br />실제 접수되지 않는 데모 예약입니다.</p><form onSubmit={event => { event.preventDefault(); setReserved(true); }}><label>진료 분야<select defaultValue={specialty.name}>{specialties.map(item => <option key={item.name}>{item.name}</option>)}</select></label><label>방문 희망일<input type="date" required min={new Date().toLocaleDateString('sv-SE')} /></label><label>희망 시간<select defaultValue="" required><option value="" disabled>시간을 선택해 주세요</option><option>오전 09:00 — 12:00</option><option>오후 14:00 — 17:00 (평일)</option></select></label><p className="form-note">개인정보 입력 없이 예약 흐름을 체험할 수 있습니다.<br />일요일·공휴일은 휴진이며, 이 선택은 예약을 확정하지 않습니다.</p><button type="submit" className="booking-button">예약 체험 완료 <ArrowUpRight size={17} /></button></form></>}</dialog>
    <dialog ref={visitDialog} className="modal visit-info-modal" aria-labelledby="visit-info-title" onClick={event => { if (event.target === event.currentTarget) visitDialog.current?.close(); }}>
      <button className="modal-close" aria-label="방문 안내 닫기" onClick={() => visitDialog.current?.close()}><X /></button>
      <span className="visit-info-icon">{visitInfo === 'hours' ? <Clock3 size={25} strokeWidth={1.4} /> : <MapPin size={25} strokeWidth={1.4} />}</span>
      <span className="eyebrow">PLAN YOUR VISIT</span>
      <h2 id="visit-info-title">{visitInfo === 'hours' ? '진료시간 안내' : '오시는 길'}</h2>
      <div className={visitInfo === 'hours' ? 'visit-details visit-info-content' : 'visit-info-content visit-info-location'}>{visitInfo === 'hours' ? <ClinicHours /> : <ClinicLocation />}</div>
      <p className="visit-info-note">이 안내는 페이지 하단에서도 확인하실 수 있습니다.</p>
      <button className="visit-info-done" onClick={() => visitDialog.current?.close()}>확인</button>
    </dialog>
    <dialog ref={articleDialog} className="modal article-modal" onClose={() => setArticle(null)} onClick={event => { if (event.target === event.currentTarget) articleDialog.current?.close(); }} aria-labelledby="article-title"><button className="modal-close" aria-label="소식 닫기" onClick={() => articleDialog.current?.close()}><X /></button>{article && <><span className="eyebrow">{article.category}</span><h2 id="article-title">{article.title}</h2><time>{article.date}</time><p>{article.body}</p></>}</dialog>
  </div>;
}
