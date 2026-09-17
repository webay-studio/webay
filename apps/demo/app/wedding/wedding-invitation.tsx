'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight, CalendarDays, Check, Copy, Heart, MapPin, Share2, X } from 'lucide-react';

const days = Array.from({ length: 31 }, (_, i) => i + 1);

function Botanical() {
  return <svg className="w-botanical" viewBox="0 0 200 260" fill="none" aria-hidden="true"><path d="M95 248C116 186 77 119 122 20M102 203C65 173 43 134 34 90M104 156C134 141 157 109 173 74" stroke="currentColor" strokeWidth="1.2" />{[[116, 45, -20], [103, 88, 24], [99, 126, -15], [75, 155, -45], [52, 119, -35], [132, 131, 30], [156, 100, 38], [104, 182, 20]].map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx="10" ry="23" transform={'rotate(' + r + ' ' + x + ' ' + y + ')'} fill="currentColor" opacity={0.22 + (i % 3) * 0.12} />)}</svg>;
}

export function WeddingInvitation() {
  const [notice, setNotice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const gallery = useRef<HTMLDialogElement>(null);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setNotice('청첩장 링크를 복사했어요.'); }
    catch { setNotice('주소창의 링크를 복사해 공유해 주세요.'); }
  };
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: '서준과 하은의 청첩장 · 디자인 데모', url: window.location.href }); }
      catch (error) { if (!(error instanceof Error && error.name === 'AbortError')) await copyLink(); }
    } else await copyLink();
  };
  return <div className="wedding">
    <div className="w-demo-bar"><Link href="/"> <ArrowLeft size={13} /> 다른 데모 보기</Link><span>WEBAY · WEDDING DEMO</span></div>
    <div className="w-paper">
      <header className="w-header"><a href="#invitation">S <span>&</span> H</a><span>THE WEDDING INVITATION</span><button aria-label="청첩장 공유" onClick={share}><Share2 size={17} /></button></header>
      <main>
        <section className="w-hero" id="invitation">
          <p className="w-eyebrow">WE ARE GETTING MARRIED</p><h1>함께하는<br /><em>모든 계절.</em></h1>
          <div className="w-hero-frame"><Image src="/wedding/celebration.jpg" alt="따뜻한 햇살 아래 부케를 함께 든 신랑과 신부" fill priority sizes="(max-width: 640px) 85vw, 430px" /><span className="w-photo-script">Our forever<br />starts here.</span></div>
          <div className="w-names"><span>김서준</span><Heart size={13} strokeWidth={1} /><span>이하은</span></div>
          <p className="w-date">2027. 05. 22. SAT. PM 02:00</p><p className="w-venue">가든 오브 메이 · 그린홀</p><a href="#letter" className="w-scroll" aria-label="초대 글 읽기"><ArrowDown size={16} /></a>
          <div className="w-hero-botanical"><Botanical /></div>
        </section>
        <section className="w-letter w-section" id="letter"><p className="w-eyebrow">A LETTER TO YOU</p><h2>소중한 당신을 초대합니다.</h2><div className="w-divider" /><p>서로의 평범한 하루에<br />가장 따뜻한 안부가 되어준 두 사람이<br />이제 같은 계절을 걸어가려 합니다.</p><p>초록이 깊어지는 오월,<br />저희의 새로운 시작에 함께해 주세요.<br />보내주신 마음 오래도록 간직하겠습니다.</p><div className="w-family"><p>김영호 · 박정희 <span>의 아들</span> <b>서준</b></p><p>이정우 · 최수연 <span>의 딸</span> <b>하은</b></p></div><span className="w-little-flower">✳</span></section>
        <section className="w-calendar-section w-section"><p className="w-eyebrow">SAVE THE DATE</p><h2>우리의 오월, 스물두 번째 날</h2><p className="w-calendar-date">2027년 5월 22일 토요일 오후 2시</p><div className="w-calendar"><div className="w-month">May <span>2027</span></div><div className="w-calendar-grid">{['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <span className="w-weekday" key={d}>{d}</span>)}{Array.from({ length: 6 }, (_, i) => <span key={'blank' + i} />)}{days.map(day => <span key={day} className={day === 22 ? 'w-selected-day' : ''} aria-label={day === 22 ? '5월 22일, 결혼식' : undefined}>{day}</span>)}</div></div><a className="w-outline-button" href="/wedding/event.ics" download><CalendarDays size={15} /> 캘린더에 저장하기</a></section>
        <section className="w-gallery-section w-section"><p className="w-eyebrow">THE MOOD OF OUR DAY</p><h2>이런 순간을, 함께.</h2><p className="w-small-copy">따뜻한 빛, 초록의 향기, 그리고 소중한 사람들.</p><button className="w-gallery-image" onClick={() => { setGalleryOpen(true); gallery.current?.showModal(); }} aria-label="웨딩 사진 크게 보기"><Image src="/wedding/celebration.jpg" alt="초록 잎과 꽃으로 만든 부케를 든 커플의 웨딩 사진" fill sizes="(max-width: 640px) 90vw, 500px" /><span>VIEW PHOTO <ArrowUpRight size={15} /></span></button></section>
        <section className="w-location w-section"><p className="w-eyebrow">COME CELEBRATE WITH US</p><h2>오시는 길</h2><h3>가든 오브 메이 · 그린홀</h3><p className="w-small-copy">푸른 정원과 따뜻한 햇살이 함께하는 곳</p><div className="w-map" role="img" aria-label="가상의 예식장 위치 안내 그래픽"><div className="w-map-road road-one" /><div className="w-map-road road-two" /><span className="w-map-park">GARDEN</span><span className="w-map-pin"><MapPin size={25} /><b>가든 오브 메이</b></span><span className="w-map-station">M · 지하철역</span></div><p className="w-location-note">데모용 가상 예식장입니다. 실제 주소와 길 안내는 제공하지 않습니다.</p><div className="w-transport"><div><span>SUBWAY</span><p>실제 청첩장에는 가까운 역과<br />출구, 도보 경로를 안내합니다.</p></div><div><span>PARKING</span><p>주차장 위치와 이용 시간을<br />한눈에 확인할 수 있습니다.</p></div></div></section>
        <section className="w-rsvp w-section"><Heart size={21} strokeWidth={1} /><p className="w-eyebrow">KINDLY REPLY</p><h2>함께해 주실 수 있나요?</h2><p>귀한 발걸음을 더 정성껏 준비할 수 있도록<br />참석 의사를 알려주세요.</p><button className="w-solid-button" onClick={() => { setSubmitted(false); dialog.current?.showModal(); }}>참석 의사 전달하기 <ArrowUpRight size={15} /></button><span className="w-demo-note">실제 전송 없이 체험하는 데모입니다.</span></section>
        <section className="w-ending"><Botanical /><p>우리의 첫 페이지에<br />함께해 주셔서 감사합니다.</p><span>Seo Jun & Ha Eun</span><button className="w-outline-button" onClick={copyLink}><Copy size={14} /> 청첩장 링크 복사</button><p className="w-status" role="status">{notice}</p></section>
      </main><footer className="w-footer">MADE WITH LOVE, BY WEBAY<span>이름·일정·장소는 디자인 시연을 위한 가상 정보입니다.</span></footer>
    </div>
    <dialog className="w-dialog" ref={dialog} aria-labelledby="w-rsvp-title" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}><button className="w-dialog-close" aria-label="닫기" onClick={() => dialog.current?.close()}><X size={20} /></button>{submitted ? <div className="w-success"><Check size={28} /><h2 id="w-rsvp-title">따뜻한 마음, 감사합니다.</h2><p>참석 의사 전달을 체험하셨어요.<br />입력 내용은 저장되거나 전송되지 않습니다.</p><button className="w-solid-button" onClick={() => dialog.current?.close()}>확인</button></div> : <><p className="w-eyebrow">RÉPONDEZ S’IL VOUS PLAÎT</p><h2 id="w-rsvp-title">참석 의사 전달</h2><p className="w-small-copy">이름이나 연락처 없이 체험할 수 있어요.</p><form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}><label>어느 쪽 하객이신가요?<select required defaultValue=""><option value="" disabled>선택해 주세요</option><option>신랑 측</option><option>신부 측</option></select></label><label>참석 여부<select required defaultValue=""><option value="" disabled>선택해 주세요</option><option>기쁜 마음으로 참석합니다</option><option>마음으로 축하를 전합니다</option></select></label><label>동반 인원<select defaultValue="0"><option value="0">동반인 없음</option><option value="1">1명</option><option value="2">2명</option><option value="3">3명 이상</option></select></label><button type="submit" className="w-solid-button">참석 의사 전달 체험 <ArrowUpRight size={15} /></button><span className="w-demo-note">실제 전송 및 저장은 이루어지지 않습니다.</span></form></>}</dialog>
    <dialog className="w-gallery-dialog" ref={gallery} onClose={() => setGalleryOpen(false)} aria-label="웨딩 사진 확대" onClick={e => { if (e.target === e.currentTarget) gallery.current?.close(); }}><button className="w-dialog-close" aria-label="사진 닫기" onClick={() => gallery.current?.close()}><X /></button>{galleryOpen && <Image src="/wedding/celebration.jpg" width={1200} height={800} alt="웨딩 사진 확대" sizes="90vw" />}</dialog>
  </div>;
}
