import { Shield, Heart, Clock, Star, Award, ThumbsUp } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Shield, stat: 'CA Lic. #1143878', label: 'Licensed & Bonded' },
  { icon: Award, stat: '25+', label: 'Years of Experience' },
  { icon: Heart, stat: '100%', label: 'Family Owned & Operated' },
  { icon: Star, stat: 'Free', label: 'Consultation' },
  { icon: ThumbsUp, stat: 'Warranty', label: 'Backed Work' },
  { icon: Clock, stat: '1 Day', label: 'Response Time' },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: '#111111',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
      }}
      className="py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {TRUST_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <Icon className="w-6 h-6 mb-1" style={{ color: '#c9a84c' }} />
              <span className="font-heading text-2xl leading-none" style={{ color: '#c9a84c' }}>
                {item.stat}
              </span>
              <span className="font-body text-[12px] uppercase tracking-[2px]" style={{ color: '#a0a0a0' }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}