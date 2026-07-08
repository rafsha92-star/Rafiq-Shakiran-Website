import CustomCursor from '@/components/shared/CustomCursor';
import ScrollProgress from '@/components/shared/ScrollProgress';
import BackgroundBeams from '@/components/shared/BackgroundBeams';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import WhyMe from '@/components/sections/WhyMe';
import Process from '@/components/sections/Process';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackgroundBeams />
      
      <Header />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Projects />
        <WhyMe />
        <Process />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
