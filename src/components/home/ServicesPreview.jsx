import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Layers, TreePine, Droplets, Lightbulb, Leaf, Sprout, Waves, ArrowRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const SERVICES = [
  {
    icon: PenTool,
    name: 'Custom Landscape Design',
    teaser: 'Full custom builds from concept to completion',
    desc: 'We handle every phase of your custom landscape build with precision and craftsmanship. From initial design to final installation, we bring your vision to life.',
  },
  {
    icon: Layers,
    name: 'Hardscape',
    teaser: 'Patios, walkways, walls, and outdoor structures',
    desc: 'We build the structural elements that define your outdoor space using concrete, pavers, natural stone, and more.',
  },
  {
    icon: TreePine,
    name: 'Planting Services',
    teaser: 'Trees, shrubs, groundcover, and seasonal color',
    desc: 'We source and install the perfect plants to bring life, texture, and beauty to your landscape.',
  },
  {
    icon: Droplets,
    name: 'Irrigation Systems',
    teaser: 'Smart water-efficient irrigation design and installation',
    desc: 'We design and install water-efficient irrigation systems tailored to California\'s climate and your landscape.',
  },
  {
    icon: Lightbulb,
    name: 'Outdoor Lighting',
    teaser: 'Architectural and landscape lighting for beauty and security',
    desc: 'Professionally designed low-voltage LED lighting that transforms your landscape at night.',
  },
  {
    icon: Leaf,
    name: 'Synthetic Turf',
    teaser: 'Premium artificial turf — lush year-round, zero water',
    desc: 'High-quality synthetic turf that looks and feels like real grass. Pet-friendly, child-safe, and built to last with no water bill.',
  },
  {
    icon: Sprout,
    name: 'Sod Installation',
    teaser: 'Natural sod for a beautiful living lawn',
    desc: 'Professional natural sod installation for a lush, healthy lawn. We prepare the ground right so your sod takes root and thrives.',
  },
  {
    icon: Waves,
    name: 'Drainage Solutions',
    teaser: 'French drains, channel drains, and water management',
    desc: 'We assess and solve drainage problems before they become costly damage. French drains, channel drains, grading, and more.',
  },
];

function FlipCard({ service, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="relative cursor-pointer"
        style={{ perspective: 1000, height: 260 }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 glass-card flex flex-col items-center justify-center p-6 text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Icon className="w-10 h-10 mb-4" style={{ color: '#c9a84c' }} />
            <h3 className="font-heading text-[28px] text-white mb-2">{service.name}</h3>
            <p className="font-body text-sm" style={{ color: '#a0a0a0' }}>{service.teaser}</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center rounded-[4px]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#1a1a1a',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <h3 className="font-heading text-2xl mb-3" style={{ color: '#c9a84c' }}>{service.name}</h3>
            <p className="font-body text-sm mb-4" style={{ color: '#e0e0e0' }}>{service.desc}</p>
            <Link to="/services" className="font-body text-sm flex items-center gap-2 transition-colors duration-300 hover:text-white" style={{ color: '#c9a84c' }}>
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6" style={{ background: '#0d0d0d' }}>
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
          WHAT WE BUILD
        </h2>
        <div className="w-[60px] h-[2px] mx-auto" style={{ background: '#c9a84c' }} />
      </ScrollReveal>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <FlipCard key={i} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}