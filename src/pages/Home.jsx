import HeroSection from '../components/home/HeroSection';
import SplitSection from '../components/home/SplitSection';
import ServicesPreview from '../components/home/ServicesPreview';
import ProcessTimeline from '../components/home/ProcessTimeline';
import GalleryPreview from '../components/home/GalleryPreview';
import StatsCounter from '../components/home/StatsCounter';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SplitSection />
      <ServicesPreview />
      <ProcessTimeline />
      <GalleryPreview />
      <StatsCounter />
      <CTABanner />
    </>
  );
}