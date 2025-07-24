import Navigation from '@/components/Navigation';
import ShopSection from '@/components/ShopSection';

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ShopSection />
      </div>
    </div>
  );
};

export default ShopPage;