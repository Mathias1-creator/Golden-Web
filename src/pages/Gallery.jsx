import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';

const HERO_IMG = `${import.meta.env.BASE_URL}images/hero-services.jpg`;

const IMAGES = [
  { src: `${import.meta.env.BASE_URL}images/gallery-1.jpg`, alt: 'Custom stone patio', category: 'hardscape' },
  { src: `${import.meta.env.BASE_URL}images/gallery-2.jpg`, alt: 'Residential garden planting', category: 'planting' },
  { src: `${import.meta.env.BASE_URL}images/gallery-3.jpg`, alt: 'Pathway lighting design', category: 'lighting' },
  { src: `${import.meta.env.BASE_URL}images/service-sod.jpg`, alt: 'Sod lawn installation', category: 'turf' },
  { src: `${import.meta.env.BASE_URL}images/gallery-5.jpg`, alt: 'Retaining wall with uplighting', category: 'hardscape' },
  { src: `${import.meta.env.BASE_URL}images/service-drainage.jpg`, alt: 'Irrigation system installation', category: 'irrigation' },
  { src: `${import.meta.env.BASE_URL}images/gallery-7.jpg`, alt: 'Outdoor kitchen and dining', category: 'hardscape' },
  { src: `${import.meta.env.BASE_URL}images/gallery-8.jpg`, alt: 'Lit garden pathway at night', category: 'lighting' },
  { src: `${import.meta.env.BASE_URL}images/gallery-9.jpg`, alt: 'Fire pit with stone seating', category: 'hardscape' },
  { src: `${import.meta.env.BASE_URL}images/gallery-10.jpg`, alt: 'Modern pergola structure', category: 'hardscape' },
  { src: `${import.meta.env.BASE_URL}images/gallery-11.jpg`, alt: 'Drought-tolerant native plantings', category: 'planting' },
  { src: `${import.meta.env.BASE_URL}images/gallery-12.jpg`, alt: 'Complete backyard transformation', category: 'hardscape' },
];

const FILTERS = ['All', 'Hardscape', 'Planting', 'Irrigation', 'Lighting', 'Turf'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeFilter === 'All'
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeFilter.toLowerCase());

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  const nextImage = () => setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            OUR PORTFOLIO
          </h1>
          <p className="font-body text-lg" style={{ color: '#a0a0a0' }}>
            Every project is a reflection of our craft and your vision.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="py-8 px-6" style={{ background: '#0a0a0a' }}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="font-body text-sm uppercase tracking-[2px] px-6 py-2 rounded-[2px] transition-all duration-300"
              style={{
                background: activeFilter === f ? '#c9a84c' : 'transparent',
                color: activeFilter === f ? '#0a0a0a' : '#c9a84c',
                border: '1px solid #c9a84c',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="px-6 pb-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.05}>
              <div
                className="relative overflow-hidden rounded-[2px] group break-inside-avoid cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2
                    className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: '#c9a84c' }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)', animation: 'fadeIn 0.3s ease' }}
          onClick={closeLightbox}
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <button
            className="absolute top-6 right-6 z-10"
            onClick={closeLightbox}
            style={{ color: '#c9a84c' }}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{ color: '#c9a84c' }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{ color: '#c9a84c' }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}