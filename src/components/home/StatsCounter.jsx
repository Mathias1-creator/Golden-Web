import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: '', label: 'Counties Served' },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading" style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: '#0a0a0a' }}>
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 px-6" style={{ background: '#c9a84c' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, i) => (
          <div key={i}>
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="font-body text-sm uppercase tracking-[2px] mt-2" style={{ color: '#0a0a0a' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}