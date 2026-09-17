'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, Code2, Layers3, MessageSquare, Menu, X, Plus, Minus } from 'lucide-react';

const projects = [
  { category: '병원 웹사이트', name: '온유병원 · 건강에 온유한 진심을', type: 'hospital', label: '온유병원', desc: '차분한 자연의 색과 세심한 진료 안내를 담은 병원 홈페이지', href: '/demo' },
  { category: '모바일 청첩장', name: '서준과 하은 · 함께하는 모든 계절', type: 'wedding', label: 'Our forever.', desc: '오월의 초록과 아이보리로 담은 따뜻한 모바일 청첩장', href: '/demo/wedding' },
  { category: '브랜드 웹사이트', name: '머물고 싶은 공간을 온라인으로', type: 'space', label: 'STAY, SLOW.', desc: '공간의 분위기와 정보를 함께 전달하는 웹사이트', href: '#services' },
  { category: '관리자 화면', name: '운영이 편해지는 작은 변화', type: 'dashboard', label: 'Overview', desc: '필요한 정보와 기능을 직관적으로 담은 관리 화면', href: '#services' },
];
const questions = [
  ['기획서가 없어도 시작할 수 있나요?', '네. 마음에 드는 사이트 링크와 사업 소개만 보내주세요. 필요한 페이지와 기능을 함께 정리하고 제작 범위를 안내해 드립니다.'],
  ['제작 과정은 어떻게 확인하나요?', '실제 휴대폰과 PC에서 열어볼 수 있는 미리보기 주소를 공유합니다. 직접 확인하고 피드백을 전달해 주세요.'],
  ['완성된 사이트의 소유권은 누구에게 있나요?', '완료 후 소스코드와 서버 계정을 고객님 명의로 이전합니다. 도메인 비용과 무료 호스팅 제공량을 초과하는 비용은 별도입니다.'],
];

export function StudioLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('전체');
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  return (
    <div className="studio-site">
      <div className="studio-top">
        <header className="studio-header studio-container">
          <a href="#" className="studio-logo" aria-label="webay 홈"><Image src="/webay-logo.png" alt="webay" width={655} height={144} className="studio-logo-image" priority /><span className="studio-logo-caption">digital studio</span></a>
          <nav className={menuOpen ? 'studio-nav is-open' : 'studio-nav'} aria-label="주요 메뉴">
            {[['서비스', '#services'], ['만드는 과정', '#process'], ['디자인 방향', '#work'], ['자주 묻는 질문', '#faq']].map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
          </nav>
          <a href="#services" className="studio-button header-cta">프로젝트 알아보기 <ArrowUpRight size={14} /></a>
          <button className="studio-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </header>
        <main id="main-content">
          <section className="studio-hero studio-container">
            <p className="studio-eyebrow">SMALL STUDIO. BIG POSSIBILITIES.</p>
            <h1>비즈니스에 꼭 맞는<br /><span>디자인과 웹사이트.</span></h1>
            <p className="studio-description">당신의 좋은 아이디어가 더 많은 사람에게 닿도록.<br />기획부터 디자인, 개발까지 webay가 함께 만듭니다.</p>
            <a href="#services" className="studio-button">우리에게 필요한 웹사이트 <ArrowRight size={15} /></a>
            <div className="studio-hero-note"><span /> 직접 소통하고, 세심하게 완성하는 1인 스튜디오</div>
          </section>
          <section className="studio-banner studio-container" aria-label="브랜드와 웹사이트 디자인">
            <div className="studio-art"><div className="ribbon ribbon-one" /><div className="ribbon ribbon-two" /><div className="ribbon ribbon-three" /><div className="studio-banner-content"><span>DESIGNED TO MAKE A DIFFERENCE</span><h2>좋은 디자인에서 시작되는<br />비즈니스의 새로운 가능성.</h2><p>브랜드의 개성을 담고, 사용자의 경험을 생각합니다.</p><a href="#work">디자인 방향 둘러보기 <ArrowUpRight size={18} /></a></div><span className="banner-index">WEBAY® — DIGITAL EXPERIENCES</span><span className="banner-number">01 / 01</span></div>
          </section>
          <section id="process" className="studio-process studio-container studio-section">
            <SectionHeading eyebrow="HOW WE WORK" title="복잡한 준비 없이, 세 단계로." description="처음 만드는 웹사이트도 괜찮아요. 어려운 과정은 저희가 정리할게요." />
            <div className="studio-steps">{[
              { icon: MessageSquare, title: '이야기를 나눕니다', description: '마음에 드는 사이트와 하고 싶은 일을 알려주세요. 필요한 기능과 방향을 함께 정리합니다.', color: 'green' },
              { icon: Layers3, title: '디자인하고 만듭니다', description: '브랜드에 맞춰 디자인하고 개발합니다. 미리보기 링크로 확인하며 함께 다듬어갑니다.', color: 'blue' },
              { icon: Code2, title: '온전히 전달합니다', description: '최종 확인 후 사이트와 소스코드를 이전합니다. 직접 운영할 수 있도록 안내해 드립니다.', color: 'pink' },
            ].map((step, i) => <article key={step.title}><span className={'step-icon ' + step.color}><step.icon size={24} /></span><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          </section>
          <section className="studio-callout"><div className="studio-container"><p className="studio-eyebrow">LET’S MAKE SOMETHING GOOD</p><h2>당신의 제품과 서비스,<br />그 가치를 함께 보여줄게요.</h2><p>작은 시작도 좋습니다. 어떤 웹사이트가 필요한지 먼저 살펴보세요.</p><a href="#services" className="studio-button">서비스 알아보기 <ArrowUpRight size={15} /></a></div></section>
          <section id="services" className="studio-services studio-section studio-container">
            <SectionHeading eyebrow="WHAT WE DO" title="보기 좋은 것, 그 이상의 웹사이트." description="첫인상부터 실제 운영까지, 비즈니스에 필요한 경험을 설계합니다." />
            <div className="studio-service-grid"><div className="studio-design-art" aria-label="웹사이트 디자인을 표현한 그래픽"><span className="design-art-label">IDEAS INTO<br />EXPERIENCES.</span><div className="design-orbit" /><div className="design-window"><div className="window-bar"><i /><i /><i /><span>your next website</span></div><div className="window-body"><span>HELLO, NEW POSSIBILITIES.</span><strong>Make<br />it yours<span>↗</span></strong><div className="window-lines" /><b>Discover more →</b></div></div><div className="design-tag"><Code2 size={19} /> Built for you.</div><span className="design-art-footer">DESIGN + DEVELOPMENT / WEBAY</span></div><div className="studio-service-copy"><p className="studio-eyebrow">THOUGHTFULLY DESIGNED. CAREFULLY BUILT.</p><h2>어떤 모습이 필요한지,<br />함께 찾아볼까요?</h2><p>멋진 첫인상은 물론, 빠르고 편리한 사용성까지.<br />브랜드에 어울리는 웹사이트를 만듭니다.</p>{[['01', '웹사이트 디자인', '브랜드의 색과 이야기를 담은 반응형 웹사이트. PC에서도 모바일에서도 자연스럽게.'], ['02', '랜딩 페이지 제작', '전하고 싶은 메시지는 선명하게, 고객의 다음 행동은 간결하게. 목적이 분명한 페이지.'], ['03', '개발과 운영 환경', '필요한 관리자 기능부터 배포와 소유권 이전까지. 직접 운영할 수 있는 기반.']].map(([num, title, desc]) => <div className="service-line" key={num}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={18} /></div>)}</div></div>
          </section>
          <section id="work" className="studio-work studio-section"><div className="studio-container"><SectionHeading eyebrow="DESIGN POSSIBILITIES" title="다양한 모습, 같은 세심함." description="우리 브랜드에는 어떤 분위기가 어울릴까요? 제작 가능한 디자인 방향을 살펴보세요." /><div className="studio-filters" aria-label="디자인 유형">{['전체', '병원 웹사이트', '모바일 청첩장', '브랜드 웹사이트', '관리자 화면'].map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'active' : ''}>{item}</button>)}</div><div className="studio-projects">{projects.filter(p => filter === '전체' || p.category === filter).map(project => <a href={project.href} target={project.href.startsWith("/demo") ? "_blank" : undefined} rel={project.href.startsWith("/demo") ? "noopener noreferrer" : undefined} className="studio-project" key={project.type}><div className={'project-cover ' + project.type}><span className="project-cover-top">{project.href.startsWith("/demo") ? "WEBAY LIVE DEMO" : "WEBAY CONCEPT / 2026"}</span><strong>{project.label}</strong><div className="project-shape" />{project.type === 'dashboard' && <div className="mini-bars">{[35, 56, 42, 75, 61, 90, 78].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div>}<span className="project-cover-bottom">{project.href.startsWith("/demo") ? "EXPLORE THE WEBSITE ↗" : "DESIGN EXPLORATION ↗"}</span></div><div className="project-copy"><span>{project.category} · {project.href.startsWith("/demo") ? "라이브 데모" : "디자인 콘셉트"}</span><h3>{project.name}</h3><p>{project.desc}</p><b>{project.href.startsWith("/demo") ? "데모 보기 · 새 창" : "서비스 알아보기"} <ArrowUpRight size={14} /></b></div></a>)}</div></div></section>
          <section id="faq" className="studio-faq studio-container studio-section"><div><p className="studio-eyebrow">A LITTLE MORE ABOUT US</p><h2>궁금한 점부터<br />편하게 풀어볼게요.</h2><p>처음부터 모든 것을 알 필요는 없으니까요.</p><span className="studio-promise"><Check size={16} /> 직접 소통 · 투명한 과정 · 온전한 소유</span></div><div className="faq-list">{questions.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setOpenQuestion(openQuestion === i ? null : i)} aria-expanded={openQuestion === i} aria-controls={'faq-answer-' + i}>{q}{openQuestion === i ? <Minus size={18} /> : <Plus size={18} />}</button><p id={'faq-answer-' + i} hidden={openQuestion !== i}>{a}</p></div>)}</div></section>
          <section className="studio-closing studio-container"><Image src="/webay-symbol.png" alt="" width={200} height={144} className="studio-closing-mark" /><h2>좋은 시작을, 함께.</h2><p>당신의 다음 웹사이트를 만드는 파트너, webay.</p><a className="studio-button" href="#process">제작 과정 살펴보기 <ArrowUpRight size={16} /></a></section>
        </main>
      </div>
      <footer className="studio-footer"><div className="studio-container"><a href="#" className="footer-wordmark">webay.</a><span>작은 디테일이 만드는 더 나은 웹.</span><nav aria-label="하단 메뉴"><a href="#services">서비스</a><a href="#process">만드는 과정</a><a href="#faq">FAQ</a></nav><small>© {new Date().getFullYear()} webay studio</small><a href="#" aria-label="맨 위로">↑</a></div></footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="studio-section-heading"><p className="studio-eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>;
}
