import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import FixturesSection from '@/components/FixturesSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import ShopSection from '@/components/ShopSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <FixturesSection />
      <GallerySection />
      <NewsSection />
      <ShopSection />
    </div>
  );
};

export default Index;
