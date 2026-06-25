import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO = '/images/logo.png';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

function NavLink({ link, isActive }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={link.path}
      className="relative font-body text-sm uppercase tracking-[3px] transition-colors duration-300"
      style={{ color: isActive || hovered ? '#c9a84c' : '#a0a0a0' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {link.label}
      <span
        className="absolute left-0 -bottom-1 h-[1px] transition-all duration-300"
        style={{
          width: isActive || hovered ? '100%' : '0%',
          background: '#c9a84c',
        }}
      />
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);
      if (currentY > lastScrollY && currentY > 50) {
        setHidden(true);
      } else if (currentY < lastScrollY) {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-in-out"
        style={{
          transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
          background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
          <Link to="/">
            <img src={LOGO} alt="Golden Heritage Landscape" style={{ height: 72 }} className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} link={link} isActive={location.pathname === link.path} />
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#c9a84c' }}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(10,10,10,0.97)' }}
        >
          <img src={LOGO} alt="Golden Heritage Landscape" style={{ height: 80, marginBottom: 16 }} className="object-contain" />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-heading text-4xl tracking-wider transition-colors duration-300"
              style={{
                color: location.pathname === link.path ? '#c9a84c' : '#e0e0e0',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}