import { FloatingNavArea } from './_area/FloatingNav.area';
import { HeaderArea } from './_area/Header.area';
import { ScrollyHeroArea } from './_area/ScrollyHero.area';
import { ProcessArea } from './_area/Process.area';
import { FooterArea } from './_area/Footer.area';

export default function Home() {
  return (
    <div
      id="webay-landing-page"
      className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-violet-500/15 selection:text-violet-900"
    >
      <FloatingNavArea />
      <HeaderArea />

      <main id="main-content" className="flex-1">
        <ScrollyHeroArea />
        <ProcessArea />
      </main>

      <FooterArea />
    </div>
  );
}


