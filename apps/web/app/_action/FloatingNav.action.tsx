'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero-section', label: '시작' },
  { id: 'showcase', label: '특징' },
  { id: 'process', label: '만드는 과정' },
];

export function FloatingNavAction() {
  const [activeSection, setActiveSection] = useState<string>('hero-section');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const processEl = document.getElementById('process');
      const scrollyContainer = document.getElementById('hero-showcase-scrolly');

      if (processEl && scrollY + viewportHeight * 0.35 >= processEl.offsetTop) {
        setActiveSection('process');
      } else if (scrollyContainer) {
        const totalScroll = scrollyContainer.offsetHeight - viewportHeight;
        const currentScroll = Math.max(0, scrollY - scrollyContainer.offsetTop);
        const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;

        if (progress >= 0.20) {
          setActiveSection('showcase');
        } else {
          setActiveSection('hero-section');
        }
      } else {
        setActiveSection('hero-section');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (id === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero-section');
    } else if (id === 'showcase') {
      const scrollyContainer = document.getElementById('hero-showcase-scrolly');
      if (scrollyContainer) {
        const totalScroll = scrollyContainer.offsetHeight - window.innerHeight;
        const targetY = scrollyContainer.offsetTop + totalScroll * 0.26;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        setActiveSection('showcase');
      }
    } else if (id === 'process') {
      const processEl = document.getElementById('process');
      if (processEl) {
        const headerOffset = 64;
        const targetY = processEl.offsetTop - headerOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        setActiveSection('process');
      }
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl border border-zinc-200/90 shadow-[0_8px_30px_rgba(124,58,237,0.08)] rounded-full py-4 px-2.5 flex flex-col items-center space-y-3.5">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <div
            key={item.id}
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === item.id && (
              <div className="absolute right-8 px-2.5 py-1 rounded-lg bg-zinc-900 text-white text-[11px] font-semibold whitespace-nowrap shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150 flex items-center">
                {item.label}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
              </div>
            )}

            <button
              type="button"
              onClick={(e) => handleNavigate(item.id, e)}
              aria-label={item.label}
              className="group relative flex items-center justify-center w-6 h-6 rounded-full cursor-pointer focus:outline-none"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-[#7C3AED] ring-4 ring-violet-500/25 shadow-xs'
                    : 'w-2 h-2 bg-zinc-300 group-hover:bg-[#7C3AED]/70 group-hover:scale-125'
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
