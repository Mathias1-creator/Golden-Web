import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';

const HERO_IMG = '/images/hero-services.png';

const SERVICES = [
  {
    name: 'CUSTOM LANDSCAPE DESIGN',
    label: 'FULL SERVICE',
    desc: 'From initial concept to final planting, we handle every phase of your custom landscape build. Our team brings your unique vision to life with precision and craftsmanship.',
    bullets: ['Custom design consultation', 'Full project management', 'Residential and commercial', 'Licensed subcontractor network'],
    img: '/images/service-landscape.png',
  },
  {
    name: 'HARDSCAPE',
    label: 'STRUCTURAL',
    desc: 'We build the structural elements that define your outdoor space — patios, walkways, retaining walls, fire pits, pergolas, and more.',
    bullets: ['Concrete pavers and natural stone', 'Retaining walls and raised planters', 'Outdoor kitchens and fire features', 'Pergolas and shade structures'],
    img: '/images/service-hardscape.png',
  },
  {
    name: 'PLANTING SERVICES',
    label: 'BOTANICAL',
    desc: 'We source and install trees, shrubs, groundcover, perennials, and seasonal color to bring life and texture to your landscape.',
    bullets: ['Custom planting plans', 'Trees and large specimen plants', 'Native and drought-tolerant options', 'Seasonal color rotations'],
    img: '/images/service-planting.png',
  },
  {
    name: 'IRRIGATION SYSTEMS',
    label: 'WATER MANAGEMENT',
    desc: 'Smart water-efficient irrigation systems designed for California\'s climate and your specific landscape layout.',
    bullets: ['Drip and spray system design', 'Smart controller installation', 'System repair and upgrades', 'Water conservation focused'],
    img: '/images/service-irrigation.png',
  },
  {
    name: 'OUTDOOR LIGHTING',
    label: 'ILLUMINATION',
    desc: 'Professionally designed lighting that enhances the beauty of your landscape at night while adding safety and security.',
    bullets: ['Architectural uplighting', 'Path and step lighting', 'Accent and feature lighting', 'Low-voltage LED systems'],
    img: '/images/service-lighting.png',
  },
  {
    name: 'SYNTHETIC TURF',
    label: 'ARTIFICIAL LAWN',
    desc: 'Premium synthetic turf that looks and feels like real grass — lush, green, and beautiful year-round without the water bill.',
    bullets: ['Premium synthetic turf installation', 'Pet-friendly and child-safe materials', 'Edging and border finishing', 'Long-lasting and low-maintenance'],
    img: '/images/service-turf.png',
  },
  {
    name: 'SOD INSTALLATION',
    label: 'NATURAL LAWN',
    desc: 'Professional natural sod installation for a lush, healthy, living lawn. We prepare the ground correctly so your sod takes root and thrives.',
    bullets: ['Ground preparation and grading', 'Premium sod varieties available', 'Edging and border work', 'Post-installation care guidance'],
    img: '/images/service-sod.png',
  },
  {
    name: 'DRAINAGE SOLUTIONS',
    label: 'WATER MANAGEMENT',
    desc: 'We identify and solve drainage issues before they turn into costly damage — keeping your property protected and your landscape looking its best.',
    bullets: ['French drain design and installation', 'Channel and surface drains', 'Grading and slope correction', 'Downspout and runoff management'],
    img: '/images/service-drainage.png',
  },
];

function ServiceBlock({ service, index }) {
  const reversed = index % 2 !== 0;

  return (
    <ScrollReveal>
      <div className={`grid md:grid-cols-2 gap-0 ${reversed ? 'direction-rtl' : ''}`}>
        <div className={`${reversed ? 'md:order-2' : 'md:order-1'}`}>
          <img src={service.img} alt={service.name} className="w-full h-full object-cover min-h-[350px]" />
        </div>
        <div className={`flex items-center px-8 py-16 md:px-16 ${reversed ? 'md:order-1' : 'md:order-2'}`} style={{ background: '#0a0a0a' }}>
          <div>
            <p className="font-body text-[13px] uppercase tracking-[3px] mb-3" style={{ color: '#c9a84c' }}>
              {service.label}
            </p>
            <h3 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              {service.name}
            </h3>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#a0a0a0' }}>
              {service.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-[15px]" style={{ color: '#e0e0e0' }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#c9a84c' }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold-outline">GET A QUOTE</Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '60vh' }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Landscape services" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            OUR SERVICES
          </h1>
          <p className="font-body text-lg" style={{ color: '#a0a0a0' }}>
            Full-service landscape construction for every vision and every budget.
          </p>
        </div>
        {/* Trust card */}
        <div
          className="absolute bottom-8 right-8 hidden md:block p-5 rounded-[4px]"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(201,168,76,0.3)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="font-body text-sm mb-1" style={{ color: '#c9a84c' }}>✓ Licensed and Bonded</p>
          <p className="font-body text-sm mb-1" style={{ color: '#c9a84c' }}>✓ Fully Insured</p>
          <p className="font-body text-sm" style={{ color: '#c9a84c' }}>✓ Family Owned and Operated</p>
        </div>
      </section>

      {/* Service blocks */}
      {SERVICES.map((service, i) => (
        <ServiceBlock key={i} service={service} index={i} />
      ))}
    </>
  );
}