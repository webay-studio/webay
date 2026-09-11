import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="webay-landing-page" className="min-h-screen flex flex-col bg-white">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
