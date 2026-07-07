import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const BG = `${import.meta.env.BASE_URL}images/cta-bg.jpg`;

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
<Link to="/contact" className="btn-gold-fill">REQUEST A FREE QUOTE</Link>
      </ScrollReveal>
    </section>
  );
}