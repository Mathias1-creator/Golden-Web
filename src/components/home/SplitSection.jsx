import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

const PHOTO = '/images/service-landscape.png';

export default function SplitSection() {
  return (
    <section className="grid md:grid-cols-2" style={{ background: '#0a0a0a' }}>
      <div className="flex flex-col justify-center items-start py-16 md:py-0 px-8 md:px-[60px] min-h-[400px] md:min-h-[600px]">
        <ScrollReveal className="max-w-lg">
          <h2 className="font-heading text-white leading-none mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            WE BUILD WHAT YOU IMAGINE
          </h2>
          <p className="font-body text-base leading-relaxed mb-8" style={{ color: '#a0a0a0' }}>
            From concept to completion, Golden Heritage Landscape turns your outdoor vision into reality. No project is too bold, no detail too small.
          </p>
          <Link to="/services" className="btn-gold-outline">SEE OUR SERVICES</Link>
        </ScrollReveal>
      </div>
      <div className="relative min-h-[400px] md:min-h-0">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] hidden md:block" style={{ background: '#c9a84c' }} />
        <img src={PHOTO} alt="Lush landscape design" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}