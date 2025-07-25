import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Pause, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-cricket-players-in-action-during-a-match-1491-large.mp4" type="video/mp4" />
        {/* Fallback to image if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-r from-rcb-black via-rcb-red/30 to-rcb-gold/20"></div>
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rcb-black/70 via-rcb-red/20 to-transparent"></div>

      {/* Video Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        <Button
          size="sm"
          variant="ghost"
          onClick={togglePlay}
          className="bg-rcb-black/50 text-white hover:bg-rcb-red/80 backdrop-blur-sm"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={toggleMute}
          className="bg-rcb-black/50 text-white hover:bg-rcb-red/80 backdrop-blur-sm"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Content - Reduced Size */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
          ROYAL CHALLENGERS
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          BANGALORE
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl mx-auto">
          Ee Sala Cup Namde! Join the RCB family and experience the passion, power, and pride of Bangalore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button 
            size="default" 
            className="bg-rcb-red hover:bg-rcb-red/90 text-white px-6 py-3 font-semibold group"
          >
            Explore Team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="default"
            className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black px-6 py-3 font-semibold group"
          >
            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
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