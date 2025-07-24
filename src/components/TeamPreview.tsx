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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {captains.map((captain) => (
            <Card key={captain.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-rcb-red to-rcb-gold p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-4xl font-bold text-rcb-red">
                        {captain.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-rcb-gold text-rcb-black">
                      <Star className="h-4 w-4 mr-1" />
                      Captain
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-rcb-red transition-colors">
                    {captain.name}
                  </h3>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge variant="outline" className="border-rcb-gold text-rcb-gold">
                      {captain.role}
                    </Badge>
                    <Badge variant="outline" className="border-rcb-red text-rcb-red">
                      {captain.team}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {captain.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-muted-foreground">Matches</div>
                      <div className="text-2xl font-bold text-rcb-red">{captain.matches}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-muted-foreground">Runs</div>
                      <div className="text-2xl font-bold text-rcb-red">{captain.runs}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
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