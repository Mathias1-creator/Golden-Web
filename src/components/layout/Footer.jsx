import { Link } from 'react-router-dom';

const LOGO = '/images/logo.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #c9a84c' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={LOGO} alt="Golden Heritage Landscape" style={{ height: 110 }} className="object-contain" />
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-sm transition-colors duration-300 hover:text-gold"
                style={{ color: '#a0a0a0' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="tel:+15599128046" className="font-body text-sm transition-colors duration-300 hover:text-gold" style={{ color: '#c9a84c' }}>
              (559) 912-8046
            </a>
            <a href="mailto:alberto@goldenhl.com" className="font-body text-sm transition-colors duration-300 hover:text-gold" style={{ color: '#c9a84c' }}>
              alberto@goldenhl.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 space-y-1" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <p className="text-center font-body text-xs" style={{ color: '#a0a0a0' }}>
            © 2026 GHL — Golden Heritage Landscape. All Rights Reserved.
          </p>
          <p className="text-center font-body text-xs" style={{ color: '#a0a0a0' }}>
            CA Contractors License #1143878 | Fresno, CA 93729
          </p>
        </div>
      </div>
    </footer>
  );
}