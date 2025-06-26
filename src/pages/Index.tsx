
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AiWidget from '@/components/AiWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AiWidget />
      <Header />
      <Hero />
      <Companies />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
