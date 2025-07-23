import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import rcbHero from '@/assets/rcb-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rcbHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rcb-black/80 via-rcb-red/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
          ROYAL CHALLENGERS
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          BANGALORE
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Ee Sala Cup Namde! Join the RCB family and experience the passion, power, and pride of Bangalore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-rcb-red hover:bg-rcb-red/90 text-white px-8 py-6 text-lg font-semibold group"
          >
            Explore Team
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black px-8 py-6 text-lg font-semibold group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Highlights
          </Button>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-rcb-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rcb-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;