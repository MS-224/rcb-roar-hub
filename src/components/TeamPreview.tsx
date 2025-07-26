import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const TeamPreview = () => {
  // Captain data
  const captains = [
    {
      id: 1,
      name: 'Virat Kohli',
      role: 'Batter',
      team: 'Men\'s Team',
      matches: 245,
      runs: 7263,
      description: 'Former captain and batting legend, known for his aggressive style and match-winning performances.'
    },
    {
      id: 2,
      name: 'Smriti Mandhana',
      role: 'Batter',
      team: 'Women\'s Team',
      matches: 89,
      runs: 3267,
      description: 'Dynamic captain leading from the front with elegant batting and strategic gameplay.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR CAPTAINS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the leaders who inspire our teams with their passion and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {captains.map((captain) => (
            <Card key={captain.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50 overflow-hidden h-96">
              <div className="relative h-full bg-gradient-to-br from-rcb-red/20 via-rcb-gold/10 to-rcb-black/30 flex items-end">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-rcb-black/80 via-rcb-red/20 to-transparent"></div>
                
                {/* Jersey Number - Left */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-rcb-gold rounded-full flex items-center justify-center">
                  <span className="text-rcb-black font-bold text-lg">18</span>
                </div>
                
                {/* Captain Badge - Right */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-rcb-red text-white">
                    <Star className="h-4 w-4 mr-1" />
                    Captain
                  </Badge>
                </div>
                
                {/* Player Info */}
                <div className="relative z-10 p-6 w-full text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-rcb-gold transition-colors">
                    {captain.name}
                  </h3>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-rcb-gold text-rcb-gold bg-rcb-black/50">
                      {captain.role}
                    </Badge>
                    <Badge variant="outline" className="border-white text-white bg-rcb-black/50">
                      {captain.team}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/team">
            <Button
              size="lg"
              className="bg-rcb-red hover:bg-rcb-red/90 text-white group"
            >
              Explore Full Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;