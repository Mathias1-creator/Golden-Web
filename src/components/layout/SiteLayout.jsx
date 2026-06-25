import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingPhone from '../shared/FloatingPhone';
import CursorGlow from '../shared/CursorGlow';
import ScrollToTop from '../shared/ScrollToTop';

export default function SiteLayout() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <ScrollToTop />
      <CursorGlow />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingPhone />
    </div>
  );
}