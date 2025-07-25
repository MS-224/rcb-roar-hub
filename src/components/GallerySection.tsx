import { useState } from 'react';
import { ImageIcon, Play, Download, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'matches', 'training', 'celebrations', 'behind-scenes'];

  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'matches',
      title: 'Virat Kohli Century Celebration',
      url: '/placeholder.svg',
      likes: 12500,
      date: '2024-03-10'
    },
    {
      id: 3,
      type: 'image',
      category: 'training',
      title: 'Team Practice Session',
      url: '/placeholder.svg',
      likes: 5600,
      date: '2024-03-05'
    },
    {
      id: 4,
      type: 'image',
      category: 'celebrations',
      title: 'Victory Lap at Chinnaswamy',
      url: '/placeholder.svg',
      likes: 15200,
      date: '2024-03-03'
    },
    {
      id: 5,
      type: 'video',
      category: 'behind-scenes',
      title: 'Dressing Room Celebrations',
      url: '/placeholder.svg',
      likes: 9800,
      date: '2024-03-01',
      duration: '1:20'
    },
    {
      id: 6,
      type: 'image',
      category: 'matches',
      title: 'Faf du Plessis Power Hitting',
      url: '/placeholder.svg',
      likes: 7300,
      date: '2024-02-28'
    },
    {
      id: 7,
      type: 'image',
      category: 'training',
      title: 'Bowling Practice with Siraj',
      url: '/placeholder.svg',
      likes: 4200,
      date: '2024-02-25'
    },
    {
      id: 8,
      type: 'video',
      category: 'celebrations',
      title: 'Fan Interaction at Stadium',
      url: '/placeholder.svg',
      likes: 11400,
      date: '2024-02-22',
      duration: '2:15'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    item.type === 'image' && (selectedCategory === 'all' || item.category === selectedCategory)
  );

  const formatCategory = (category: string) => {
    if (category === 'behind-scenes') return 'Behind Scenes';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            GALLERY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relive the magical moments, epic victories, and behind-the-scenes action
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90' 
                : 'border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black'}
            >
              {formatCategory(category)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <div className="relative">
                {/* Image/Video Thumbnail */}
                <div className="aspect-square bg-gradient-to-br from-rcb-red/20 to-rcb-gold/20 flex items-center justify-center">
                  {item.type === 'image' ? (
                    <ImageIcon className="h-16 w-16 text-rcb-red/50" />
                  ) : (
                    <Play className="h-16 w-16 text-rcb-red/50" />
                  )}
                  
                  {/* Video Duration Badge */}
                  {item.type === 'video' && (
                    <Badge className="absolute top-2 left-2 bg-rcb-black/80 text-white">
                      {item.duration}
                    </Badge>
                  )}

                  {/* Category Badge */}
                  <Badge className="absolute top-2 right-2 bg-rcb-gold text-rcb-black">
                    {formatCategory(item.category)}
                  </Badge>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-rcb-black/0 group-hover:bg-rcb-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-rcb-black hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-rcb-black hover:bg-white">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-rcb-black hover:bg-white">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-rcb-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="h-3 w-3 mr-1 text-rcb-red" />
                    <span>{item.likes.toLocaleString()}</span>
                  </div>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black px-8 py-6 text-lg font-semibold"
          >
            Load More Content
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">2500+</div>
            <div className="text-sm text-muted-foreground">Photos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">450+</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">1.2M+</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rcb-red mb-2">85K+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;