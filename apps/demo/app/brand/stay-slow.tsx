'use client';

import Image from 'next/image';
import { useRef, useState, useSyncExternalStore } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu, Minus, Plus, X } from 'lucide-react';

const spaces = [
  {
    name: 'The Light House', subtitle: '빛이 머무는 집', image: '/brand/living.jpg',
    alt: '큰 창으로 햇살이 들어오는 베이지 소파와 나무 테이블의 거실',
    category: '둘만의 쉼', size: '62㎡', guests: 2, price: 240000,
    description: '커다란 창을 따라 천천히 움직이는 햇빛. 책을 읽다 잠시 눈을 감아도 좋은, 둘만의 조용한 하루를 위한 공간입니다.',
    amenities: ['퀸 베드 1', '프라이빗 라운지', '티 세트', '블루투스 스피커'],
  },
  {
    name: 'The Courtyard', subtitle: '바깥을 품은 집', image: '/brand/exterior.jpg',
    alt: '푸른 수영장과 정원을 마주한 밝은 독채 건물',
    category: '함께하는 쉼', size: '118㎡', guests: 4, price: 380000,
    description: '실내와 바깥의 경계를 낮춘 독채. 정원을 바라보는 테라스에서, 소중한 사람들과 조금 더 긴 대화를 나눠보세요.',
    amenities: ['침실 2', '프라이빗 풀', '정원과 테라스', '다이닝 공간'],
  },
  {
    name: 'The Quiet Room', subtitle: '고요를 닮은 방', image: '/brand/bedroom.jpg',
    alt: '따뜻한 조명과 부드러운 침구로 꾸민 편안한 침실',
    category: '둘만의 쉼', size: '48㎡', guests: 2, price: 190000,
    description: '불필요한 것은 덜어내고, 편안한 잠에 집중한 공간. 느지막이 눈을 뜨고 아무 계획 없는 아침을 맞이합니다.',
    amenities: ['킹 베드 1', '프리미엄 침구', '드립 커피', '독서 공간'],
  },
];

const rituals = [
  { time: '08:00', title: '천천히 깨우는 아침', subtitle: 'A morning, unhurried.', text: '알람 대신 창으로 들어오는 빛에 눈을 뜨고, 따뜻한 커피 한 잔으로 하루를 시작해 보세요.', image: '/brand/living.jpg', alt: '아침 햇빛이 가득한 라운지' },
  { time: '14:00', title: '목적지 없는 산책', subtitle: 'Follow the quieter path.', text: '어디에 닿아야 한다는 생각 없이 걷는 시간. 초록 사이로 스치는 바람과 계절의 작은 변화를 발견합니다.', image: '/brand/forest.jpg', alt: '햇살이 나뭇잎 사이로 스며드는 숲' },
  { time: '21:00', title: '하루를 내려놓는 밤', subtitle: 'Less noise, more rest.', text: '조명을 낮추고 좋아하는 책을 펼쳐보세요. 바쁘게 지나온 하루가 고요한 밤 속에서 천천히 정리됩니다.', image: '/brand/bedroom.jpg', alt: '은은한 조명이 켜진 침실' },
];

function dateAfter(value: string, days = 1) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

const money = (amount: number) => `₩${amount.toLocaleString('ko-KR')}`;
const subscribeToDate = () => () => {};
const currentDate = () => new Date().toLocaleDateString('sv-SE');
const serverDate = () => '';

export function StaySlow() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('모든 공간');
  const [ritual, setRitual] = useState(0);
  const [selectedSpace, setSelectedSpace] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2');
  const [quote, setQuote] = useState<{ nights: number; guests: number; start: string; end: string } | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);
  const [formError, setFormError] = useState('');
  const today = useSyncExternalStore(subscribeToDate, currentDate, serverDate);
  const spaceDialog = useRef<HTMLDialogElement>(null);
  const bookingDialog = useRef<HTMLDialogElement>(null);

  const openSpace = (index: number) => {
    setSelectedSpace(index);
    spaceDialog.current?.showModal();
  };

  const chooseSpace = () => {
    setGuests(String(spaces[selectedSpace].guests));
    spaceDialog.current?.close();
    document.getElementById('ss-booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('ss-check-in')?.focus({ preventScroll: true });
  };

  return (
    <div className="stay-slow" id="ss-top">
      <a className="ss-skip" href="#ss-main">본문으로 바로가기</a>
      <div className="ss-demo-note"><span>WEBAY — BRAND WEBSITE CONCEPT</span><span>잠시, 일상에 쉼표를.</span></div>
      <header className="ss-header">
        <a className="ss-logo" href="#ss-top" aria-label="스테이 슬로우 홈">stay, slow<span>®</span></a>
        <nav className={menuOpen ? 'ss-nav is-open' : 'ss-nav'} id="ss-navigation" aria-label="브랜드 메뉴">
          {[['Our story', '#ss-story'], ['Spaces', '#ss-spaces'], ['Slow moments', '#ss-moments'], ['Guide', '#ss-guide']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="ss-header-book" href="#ss-booking" onClick={() => setMenuOpen(false)}>머무름 예약 <ArrowUpRight size={15} /></a>
        <button className="ss-menu" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen} aria-controls="ss-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="ss-main">
        <section className="ss-hero" aria-labelledby="ss-title">
          <div className="ss-hero-copy">
            <p className="ss-eyebrow">A SMALL ESCAPE. A DEEPER CONNECTION.</p>
            <h1 id="ss-title">Stay a little.<br /><em>Slow a little.</em></h1>
            <div className="ss-hero-korean"><h2>온전히, 나의 속도로.</h2><p>채우기보다 비워내는 여행.<br />공간에 머물고, 나에게 돌아오는 시간.</p></div>
            <a className="ss-underlink" href="#ss-spaces">나의 쉼을 찾아보기 <ArrowUpRight size={18} /></a>
            <span className="ss-hero-foot">THOUGHTFUL SPACES, SLOWER DAYS.</span>
          </div>
          <div className="ss-hero-visual">
            <Image src="/brand/living.jpg" alt={spaces[0].alt} fill priority sizes="(max-width: 760px) 100vw, 62vw" />
            <div className="ss-image-caption"><span>THE LIGHT HOUSE</span><span>A place to simply be.</span></div>
            <a className="ss-round-link" href="#ss-story" aria-label="브랜드 이야기로 이동"><ArrowDown size={23} strokeWidth={1} /></a>
          </div>
          <span className="ss-hero-stamp" aria-hidden="true">less, but<br /><i>better.</i></span>
        </section>

        <section className="ss-booking ss-container" id="ss-booking" aria-labelledby="ss-booking-title">
          <div className="ss-booking-label"><span className="ss-eyebrow">YOUR NEXT PAUSE</span><h2 id="ss-booking-title">언제 쉬어갈까요?</h2></div>
          <form onSubmit={event => {
            event.preventDefault();
            const values = new FormData(event.currentTarget);
            const start = String(values.get('checkIn') || '');
            const end = String(values.get('checkOut') || '');
            const partySize = Number(values.get('guests'));
            const nights = Math.round((Date.parse(end) - Date.parse(start)) / 86400000);
            if (!start || start < currentDate() || !Number.isFinite(nights) || nights < 1 || partySize < 1 || partySize > 4) { setFormError('오늘 이후의 체크인 날짜와, 그다음 날 이후의 체크아웃 날짜를 선택해 주세요.'); return; }
            setFormError(''); setChosen(null);
            setQuote({ nights, guests: partySize, start, end });
            bookingDialog.current?.showModal();
          }}>
            <label><span>CHECK IN <small>체크인</small></span><input id="ss-check-in" name="checkIn" type="date" aria-describedby="ss-booking-error" required min={today || undefined} onChange={event => setCheckIn(event.currentTarget.value)} /></label>
            <label><span>CHECK OUT <small>체크아웃</small></span><input name="checkOut" type="date" required min={checkIn || today ? dateAfter(checkIn || today) : undefined} /></label>
            <label className="ss-guests"><span>GUESTS <small>인원</small></span><select name="guests" value={guests} onChange={event => setGuests(event.target.value)}>{[1, 2, 3, 4].map(value => <option key={value} value={value}>{value}명</option>)}</select></label>
            <button type="submit" className="ss-solid">머무를 공간 찾기 <ArrowRight size={18} /></button>
          </form>
          <p className="ss-booking-disclaimer">가상의 스테이 예약 체험 · 실제 예약 및 결제는 진행되지 않습니다.</p>
          <p className="ss-form-error" id="ss-booking-error" role="alert">{formError}</p>
        </section>

        <section className="ss-story ss-container" id="ss-story">
          <div className="ss-story-aside"><span className="ss-eyebrow">01 — OUR PHILOSOPHY</span><span className="ss-sun" aria-hidden="true">✳</span><p>Less to do.<br />More to feel.</p></div>
          <div className="ss-story-body"><h2>어떤 여행은,<br />아무것도 하지 않아도 충분하니까.</h2><div className="ss-story-text"><p>빽빽한 일정 대신 느슨한 하루를.<br />낯선 풍경 속에서 발견하는 익숙한 편안함을.<br />스테이 슬로우는 잘 쉬는 방법을 고민합니다.</p><p>손끝에 닿는 나무의 질감, 창을 따라 흐르는 빛,<br />오래 앉아 있고 싶은 의자 하나까지.<br />당신의 속도를 되찾는 공간을 정성껏 고릅니다.</p></div><a href="#ss-moments" className="ss-underlink">우리가 제안하는 하루 <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="ss-spaces ss-container" id="ss-spaces">
          <div className="ss-section-heading"><div><p className="ss-eyebrow">02 — OUR SPACES</p><h2>A place for <em>your pause.</em></h2></div><p>서로 다른 모습, 같은 편안함.<br />지금의 나에게 어울리는 공간을 만나보세요.</p></div>
          <div className="ss-filters" aria-label="공간 유형">{['모든 공간', '둘만의 쉼', '함께하는 쉼'].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === '모든 공간' ? '03' : item === '둘만의 쉼' ? '02' : '01'}</span></button>)}</div>
          <div className="ss-space-grid">{spaces.map((space, index) => (filter === '모든 공간' || filter === space.category) && <button className="ss-space-card" key={space.name} onClick={() => openSpace(index)} aria-label={`${space.name} ${space.subtitle} 자세히 보기`}><div className="ss-space-image"><Image src={space.image} alt={space.alt} fill sizes="(max-width: 640px) 100vw, 48vw" /><span className="ss-space-number">0{index + 1}</span><span className="ss-space-open"><ArrowUpRight size={21} /></span></div><div className="ss-space-info"><div><span className="ss-eyebrow">{space.subtitle} · 최대 {space.guests}인</span><h3>{space.name}</h3></div><span>{space.size}<br /><small>PRIVATE STAY</small></span></div></button>)}</div>
          <p className="ss-space-note">사진은 공간의 분위기를 표현한 콘셉트 이미지입니다.</p>
        </section>

        <section className="ss-moments" id="ss-moments"><div className="ss-container ss-moments-grid"><div className="ss-moments-photo"><Image src={rituals[ritual].image} alt={rituals[ritual].alt} fill sizes="(max-width: 760px) 100vw, 48vw" /><span>{rituals[ritual].subtitle}</span></div><div className="ss-moments-copy"><p className="ss-eyebrow">03 — THE ART OF DOING NOTHING</p><h2>작고 느린 순간이<br />만드는, 좋은 하루.</h2><p className="ss-moments-intro">특별한 계획은 없어도 괜찮아요.<br />여기서는 사소한 순간이 여행이 됩니다.</p><div className="ss-rituals">{rituals.map((item, index) => <div key={item.time} className={ritual === index ? 'is-active' : ''}><button aria-expanded={ritual === index} aria-controls={`ss-ritual-${index}`} onClick={() => setRitual(index)}><span>{item.time}</span><strong>{item.title}</strong>{ritual === index ? <Minus size={17} /> : <Plus size={17} />}</button><p id={`ss-ritual-${index}`} hidden={ritual !== index}>{item.text}</p></div>)}</div></div></div></section>

        <section className="ss-interlude"><Image src="/brand/forest.jpg" alt="깊은 숲 사이로 내려오는 오후의 햇살" fill sizes="100vw" /><div><p className="ss-eyebrow">TAKE NOTHING BUT A DEEP BREATH.</p><h2>조금 느려져도,<br /><em>괜찮은 곳.</em></h2><p>해야 할 일은 잠시 놓아두세요.<br />지금 이 순간에 머무는 것만으로 충분합니다.</p></div><span>STAY, SLOW. — A DIFFERENT KIND OF GETAWAY</span></section>

        <section className="ss-guide ss-container" id="ss-guide"><div><p className="ss-eyebrow">04 — BEFORE YOUR STAY</p><h2>좋은 쉼을 위한,<br />작은 안내.</h2><p>편안한 머무름을 위해<br />미리 알아두면 좋은 것들.</p></div><div className="ss-faq">{[
          ['체크인과 체크아웃은 언제인가요?', '체크인은 오후 3시, 체크아웃은 오전 11시로 제안합니다. 도착부터 떠나는 순간까지 여유로운 시간을 즐겨주세요. 데모용 이용 안내입니다.'],
          ['몇 명까지 머물 수 있나요?', 'The Light House와 The Quiet Room은 최대 2인, The Courtyard는 최대 4인을 위한 공간입니다. 인원을 선택하면 머물 수 있는 공간만 안내합니다.'],
          ['공간에는 무엇이 준비되어 있나요?', '편안한 침구, 수건, 차 또는 커피와 머무름에 필요한 기본 물품을 제안합니다. 공간별 상세 보기를 누르면 각 공간의 시설을 확인할 수 있습니다.'],
          ['예약은 어떻게 진행하나요?', '날짜와 인원을 선택하면 공간별 예시 숙박 비용을 확인할 수 있습니다. 이 사이트는 가상의 브랜드 데모로, 실제 객실 재고를 조회하거나 예약·결제를 진행하지 않습니다.'],
        ].map(([question, answer]) => <details key={question}><summary>{question}<Plus size={16} /></summary><p>{answer}</p></details>)}</div></section>

        <section className="ss-closing"><p className="ss-eyebrow">MAKE ROOM FOR YOURSELF.</p><h2>Your slower days<br /><em>start here.</em></h2><a href="#ss-booking" className="ss-solid">나를 위한 쉼 예약하기 <ArrowUpRight size={18} /></a><p>멀리 떠나지 않아도, 일상과는 조금 멀어질 수 있도록.</p></section>
      </main>

      <footer className="ss-footer"><div className="ss-container"><div className="ss-footer-top"><a href="#ss-top" className="ss-logo">stay, slow<span>®</span></a><p>공간에 머물고,<br />나에게 돌아오는 시간.</p><nav aria-label="하단 메뉴"><a href="#ss-story">Our story</a><a href="#ss-spaces">Our spaces</a><a href="#ss-guide">Stay guide</a></nav><a href="#ss-top" className="ss-back-top" aria-label="맨 위로"><ArrowUpRight size={23} /></a></div><div className="ss-footer-bottom"><span>© 2026 STAY, SLOW. — A WEBAY DESIGN CONCEPT.</span><span>가상의 공간 브랜드입니다. 실제 숙박 서비스는 제공하지 않습니다.</span></div></div></footer>

      <dialog ref={spaceDialog} className="ss-dialog ss-space-dialog" aria-labelledby="ss-space-title" onClick={event => { if (event.target === event.currentTarget) spaceDialog.current?.close(); }}><button className="ss-dialog-close" aria-label="공간 상세 닫기" onClick={() => spaceDialog.current?.close()}><X size={21} /></button><div className="ss-dialog-image"><Image src={spaces[selectedSpace].image} alt={spaces[selectedSpace].alt} fill sizes="700px" /></div><div className="ss-dialog-body"><p className="ss-eyebrow">{spaces[selectedSpace].subtitle} · {spaces[selectedSpace].size} · 최대 {spaces[selectedSpace].guests}인</p><h2 id="ss-space-title">{spaces[selectedSpace].name}</h2><p>{spaces[selectedSpace].description}</p><ul>{spaces[selectedSpace].amenities.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul><div className="ss-dialog-price"><span>{money(spaces[selectedSpace].price)} <small>/ 1박 · 예시 요금</small></span><button className="ss-solid" onClick={chooseSpace}>날짜 선택 <ArrowRight size={17} /></button></div></div></dialog>

      <dialog ref={bookingDialog} className="ss-dialog ss-result-dialog" aria-labelledby="ss-result-title" onClick={event => { if (event.target === event.currentTarget) bookingDialog.current?.close(); }}><button className="ss-dialog-close" aria-label="예약 체험 닫기" onClick={() => bookingDialog.current?.close()}><X size={21} /></button><div className="ss-dialog-body"><p className="ss-eyebrow">YOUR NEXT PAUSE · DEMO</p><h2 id="ss-result-title">{chosen === null ? '당신의 머무름을 골라보세요.' : '쉼을 위한 준비가 되었어요.'}</h2>{quote && <><p className="ss-result-dates">{quote.start} — {quote.end} · {quote.nights}박 · {quote.guests}명</p>{chosen === null ? <div className="ss-result-list">{spaces.map((space, index) => space.guests >= quote.guests && <button key={space.name} onClick={() => setChosen(index)}><Image src={space.image} alt="" width={90} height={85} /><span><strong>{space.name}</strong><small>최대 {space.guests}인 · {quote.nights}박 예시 합계</small><b>{money(space.price * quote.nights)}</b></span><ArrowUpRight size={20} /></button>)}</div> : <div className="ss-confirmed"><Check size={30} /><h3>{spaces[chosen].name}</h3><p>예시 숙박 비용 <strong>{money(spaces[chosen].price * quote.nights)}</strong></p><button className="ss-underlink" onClick={() => setChosen(null)}><ArrowLeft size={15} /> 다른 공간 살펴보기</button></div>}</>}<p className="ss-result-note">예약 흐름을 체험하는 데모입니다. 표시된 공간과 요금은 예시이며, 실제 예약·결제나 개인정보 수집은 이루어지지 않습니다.</p></div></dialog>
    </div>
  );
}
