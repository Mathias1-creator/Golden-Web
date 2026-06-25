import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import GoldParticles from '../shared/GoldParticles';

const HERO_IMG = `${import.meta.env.BASE_URL}images/hero-home.png`;
const PHRASES = ['DREAM IT. BUILD IT.', 'YOUR VISION. OUR CRAFT.', 'LANDSCAPES BUILT TO LAST.'];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Luxury landscape design" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
      </div>
      <GoldParticles />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p
          className="font-body text-[13px] uppercase tracking-[4px] mb-6"
          style={{ color: '#c9a84c' }}
        >
          CENTRAL VALLEY'S PREMIER LANDSCAPE BUILDER
        </p>

        <h1
          className="font-heading text-white leading-none mb-6"
          style={{
            fontSize: 'clamp(56px, 8vw, 96px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {PHRASES[phraseIndex]}
        </h1>

        <p className="font-body text-lg mb-10" style={{ color: '#a0a0a0' }}>
          Full-service landscape design and construction for the entire Central Valley.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-gold-fill">GET A FREE QUOTE</Link>
          <Link to="/gallery" className="btn-gold-outline">VIEW OUR WORK</Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <ChevronDown className="w-8 h-8" style={{ color: '#c9a84c' }} />
      </div>
    </section>
  );
}