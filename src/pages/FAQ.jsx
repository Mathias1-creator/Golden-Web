import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';
import CTABanner from '../components/shared/CTABanner';
import { Link } from 'react-router-dom';

const HERO_IMG = `${import.meta.env.BASE_URL}images/hero-services.png`;

const FAQS = [
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes — always. We will meet with you, walk your property, listen to your vision, and give you a detailed quote at no cost and no obligation. We want to make sure we are the right fit before anyone commits to anything.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on the size and complexity of the project. A standard backyard makeover typically runs 1–3 weeks. Larger custom landscape builds with hardscape, irrigation, and planting can take 4–8 weeks. We will give you a clear timeline during your consultation so there are no surprises.',
  },
  {
    q: 'Are you licensed, bonded, and insured?',
    a: 'Yes. Golden Heritage Landscape holds California Contractors License #1143878. We are fully licensed, bonded, and insured for your protection and peace of mind.',
  },
  {
    q: 'Do you work with all budgets?',
    a: 'Absolutely. We believe everyone deserves a great outdoor space. We will work with your budget to build the best possible project at your price point — and we will always be upfront about what is and is not feasible so you can make informed decisions.',
  },
  {
    q: 'Do you do both residential and commercial work?',
    a: 'Yes. We handle everything from residential backyard transformations to full commercial landscape builds. Our team is experienced in both scales and we bring the same level of care and craftsmanship to every job.',
  },
  {
    q: 'Is your work warranty backed?',
    a: 'Yes. We stand behind our work. Our installations come with a warranty on labor and we use quality materials backed by manufacturer warranties. If something is not right, we make it right.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Central Valley including Fresno, Clovis, Visalia, Tulare, Madera, Hanford, Lemoore, Reedley, Selma, Kingsburg, Sanger, and Kerman. Don\'t see your city? Reach out — we likely serve your area.',
  },
  {
    q: 'Can I upload photos of my yard when I contact you?',
    a: 'Yes! On our contact page you can attach photos or project files directly with your inquiry. Photos of your space help us come prepared to your consultation so we can give you the most accurate plan and quote right away.',
  },
  {
    q: 'What is the difference between synthetic turf and sod?',
    a: 'Synthetic turf is a high-quality artificial grass that requires no watering, no mowing, and stays green year-round — great for water conservation and low-maintenance living. Natural sod is real living grass that gives you that authentic feel and look. Both are excellent options depending on your priorities, and we install both.',
  },
  {
    q: 'Do you offer drainage solutions?',
    a: 'Yes. Drainage is one of the most important and often overlooked parts of a landscape. We assess your property\'s drainage and install French drains, channel drains, and grading corrections to prevent water damage and keep your landscape looking its best.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.04}>
      <div
        className="rounded-[2px] overflow-hidden"
        style={{ border: '1px solid rgba(201,168,76,0.15)', background: '#111111' }}
      >
        <button
          className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          onClick={() => setOpen(!open)}
        >
          <span className="font-heading text-lg text-white">{item.q}</span>
          <ChevronDown
            className="w-5 h-5 shrink-0 transition-transform duration-300"
            style={{ color: '#c9a84c', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
        {open && (
          <div className="px-6 pb-6">
            <div className="h-px mb-4" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <p className="font-body text-base leading-relaxed" style={{ color: '#a0a0a0' }}>{item.a}</p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="FAQ" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-white mb-4" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            FAQ
          </h1>
          <p className="font-body text-lg" style={{ color: '#a0a0a0' }}>
            Answers to the questions we hear most often.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        <ScrollReveal className="max-w-4xl mx-auto mt-16 text-center">
          <div
            className="p-10 rounded-[4px]"
            style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <p className="font-body text-base mb-2" style={{ color: '#a0a0a0' }}>
              Have a question that isn't covered here?
            </p>
            <h3 className="font-heading text-2xl text-white mb-6">We'd love to hear from you.</h3>
            <Link to="/contact" className="btn-gold-fill">CONTACT US</Link>
          </div>
        </ScrollReveal>
      </section>

      <CTABanner />
    </>
  );
}
