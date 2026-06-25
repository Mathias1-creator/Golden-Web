import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const BG = '/images/cta-bg.png';

export default function CTABanner() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0">
        <img src={BG} alt="Luxury outdoor living" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)' }} />
      </div>
      <ScrollReveal className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
          READY TO BUILD YOUR DREAM LANDSCAPE?
        </h2>
        <p className="font-body text-lg mb-8" style={{ color: '#a0a0a0' }}>
          Serving Fresno, Clovis, Visalia, Tulare, Madera, and all of the Central Valley.
        </p>
        <Link to="/contact" className="btn-gold-fill">REQUEST A FREE QUOTE</Link>
      </ScrollReveal>
    </section>
  );
}