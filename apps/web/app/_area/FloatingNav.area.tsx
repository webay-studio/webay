import { FloatingNavAction } from '../_action/FloatingNav.action';

export function FloatingNavArea() {
  return (
    <nav
      aria-label="콘텐츠 탐색"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-4 select-none pointer-events-auto"
    >
      <FloatingNavAction />
    </nav>
  );
}
