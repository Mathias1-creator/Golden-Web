import ScrollReveal from '../shared/ScrollReveal';

const STEPS = [
  { num: '1', title: 'CONSULTATION', desc: 'We listen to your vision, assess your space, and discuss your budget.' },
  { num: '2', title: 'CUSTOM DESIGN', desc: 'Our team creates a detailed plan tailored to your property and goals.' },
  { num: '3', title: 'CONSTRUCTION', desc: 'We build with precision using quality materials and skilled craftsmen.' },
  { num: '4', title: 'FINAL WALKTHROUGH', desc: 'We walk through every detail together to make sure you love the result.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6" style={{ background: '#111111' }}>
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-heading text-white" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
          HOW IT WORKS
        </h2>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">
        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          <div className="absolute top-7 left-[12%] right-[12%] h-[2px]" style={{ background: '#c9a84c' }} />
          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="flex flex-col items-center text-center w-1/4 relative z-10">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: '#c9a84c' }}
              >
                <span className="font-heading text-2xl" style={{ color: '#0a0a0a' }}>{step.num}</span>
              </div>
              <h3 className="font-heading text-2xl mb-2" style={{ color: '#c9a84c' }}>{step.title}</h3>
              <p className="font-body text-[15px] max-w-[200px]" style={{ color: '#a0a0a0' }}>{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex gap-4 items-start">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#c9a84c' }}
              >
                <span className="font-heading text-xl" style={{ color: '#0a0a0a' }}>{step.num}</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl mb-1" style={{ color: '#c9a84c' }}>{step.title}</h3>
                <p className="font-body text-[15px]" style={{ color: '#a0a0a0' }}>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}