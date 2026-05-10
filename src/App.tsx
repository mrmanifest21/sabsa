import NeuralRibbon from './components/NeuralRibbon';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Science from './sections/Science';
import Programs from './sections/Programs';
import HowItWorks from './sections/HowItWorks';
import Difference from './sections/Difference';
import Founder from './sections/Founder';
import Impact from './sections/Impact';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A1628]">
      {/* 3D Neural Ribbon Background - persistent throughout */}
      <NeuralRibbon />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Science />
        <Programs />
        <HowItWorks />
        <Difference />
        <Founder />
        <Impact />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
