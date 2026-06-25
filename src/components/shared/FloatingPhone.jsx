import { Phone } from 'lucide-react';

export default function FloatingPhone() {
  return (
    <a
      href="tel:+15599128046"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{
        background: '#c9a84c',
        boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
      }}
    >
      <Phone className="w-6 h-6 text-[#0a0a0a]" />
    </a>
  );
}