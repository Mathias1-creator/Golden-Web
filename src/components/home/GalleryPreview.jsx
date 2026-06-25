import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

const IMAGES = [
  { src: '/images/gallery-1.png', alt: 'Custom stone patio hardscape' },
  { src: '/images/gallery-2.png', alt: 'Lush residential garden planting' },
  { src: '/images/gallery-3.png', alt: 'Outdoor pathway lighting design' },
  { src: '/images/service-sod.png', alt: 'Premium synthetic turf lawn' },
  { src: '/images/gallery-5.png', alt: 'Stone retaining wall with lighting' },
  { src: '/images/gallery-9.png', alt: 'Custom fire pit with stone seating' },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 px-6" style={{ background: '#0a0a0a' }}>
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-heading text-white" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
          OUR WORK
        </h2>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {IMAGES.map((img, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="relative overflow-hidden rounded-[2px] group break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: '2px solid #c9a84c' }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="text-center mt-12">
        <Link to="/gallery" className="btn-gold-outline">VIEW FULL GALLERY</Link>
      </ScrollReveal>
    </section>
  );
}