import { Hammer, ShieldCheck, Eye, Heart } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import CTABanner from '../components/shared/CTABanner';

const HERO_IMG = `${import.meta.env.BASE_URL}images/hero-services.png`;
const TEAM_IMG = `${import.meta.env.BASE_URL}images/team.png`;

const VALUES = [
  { icon: Hammer, title: 'CRAFTSMANSHIP', desc: 'We take pride in every detail, every edge, every plant. Quality is never negotiable.' },
  { icon: ShieldCheck, title: 'INTEGRITY', desc: 'Honest pricing, clear communication, and no surprises. We do what we say we will do.' },
  { icon: Eye, title: 'VISION', desc: "We don't just build landscapes — we bring your imagination to life." },
  { icon: Heart, title: 'FAMILY', desc: 'We are family owned and we treat our clients, our crew, and our community like family.' },
];

const CITIES = [
  'Fresno', 'Clovis', 'Visalia', 'Tulare', 'Madera', 'Hanford',
  'Lemoore', 'Reedley', 'Selma', 'Kingsburg', 'Sanger', 'Kerman',
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '60vh' }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Our story" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-white" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            OUR STORY
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={TEAM_IMG} alt="Golden Heritage job site" className="w-full rounded-[2px]" />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[13px] uppercase tracking-[3px] mb-3" style={{ color: '#c9a84c' }}>
              FAMILY OWNED AND OPERATED
            </p>
            <h2 className="font-heading text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              BUILT ON PASSION. ROOTED IN CRAFT.
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: '#a0a0a0' }}>
              <p>
                Golden Heritage Landscape was founded by the Olivo family with one goal in mind — to bring world-class landscape construction to the Central Valley.
              </p>
              <p>
                While the business is young, our team brings over 25 years of combined hands-on experience in every facet of landscape design and construction. We are a family owned and operated company and we treat every project like it is our own home.
              </p>
              <p>
                From a small backyard makeover to a full commercial landscape build, we pour the same passion and precision into every job. We believe that your outdoor space should be an extension of who you are.
              </p>
              <p>
                That is why we start every project with a conversation — we want to understand your vision, your lifestyle, and your budget before a single shovel hits the ground. Then we build it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: '#111111' }}>
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-white" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
            WHAT DRIVES US
          </h2>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-8 text-center h-full">
                <v.icon className="w-10 h-10 mx-auto mb-4" style={{ color: '#c9a84c' }} />
                <h3 className="font-heading text-2xl mb-3" style={{ color: '#c9a84c' }}>{v.title}</h3>
                <p className="font-body text-[15px]" style={{ color: '#a0a0a0' }}>{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience highlight */}
      <section className="py-20 px-6 text-center" style={{ background: '#c9a84c' }}>
        <ScrollReveal>
          <h2 className="font-heading mb-2" style={{ fontSize: 'clamp(56px, 7vw, 80px)', color: '#0a0a0a' }}>
            25+
          </h2>
          <p className="font-body text-base uppercase tracking-[3px] mb-4" style={{ color: '#0a0a0a' }}>
            YEARS OF COMBINED EXPERIENCE
          </p>
          <p className="font-body text-base max-w-2xl mx-auto" style={{ color: '#1a1a1a' }}>
            Our team has worked on hundreds of residential and commercial landscape projects across the Central Valley. That experience is what we bring to your project on day one.
          </p>
        </ScrollReveal>
      </section>

      {/* Service Area */}
      <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CITIES.map((city) => (
              <span
                key={city}
                className="font-heading text-sm tracking-[2px] px-5 py-2 rounded-full"
                style={{ border: '1px solid #c9a84c', color: '#c9a84c' }}
              >
                {city}
              </span>
            ))}
          </div>
          <p className="font-body text-base mt-10" style={{ color: '#a0a0a0' }}>
            Don't see your city? Contact us — we likely serve your area.
          </p>
        </ScrollReveal>
      </section>

      <CTABanner />
    </>
  );
}