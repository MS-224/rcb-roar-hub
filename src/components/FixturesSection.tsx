import { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BookingModal from './BookingModal';

const FixturesSection = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [showAllFixtures, setShowAllFixtures] = useState(false);
  const [selectedFixture, setSelectedFixture] = useState(null);

  // Mock fixture data
  const fixtures = {
    upcoming: [
      {
        id: 1,
        opponent: 'Mumbai Indians',
        date: '2024-03-15',
        time: '19:30',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        type: 'IPL 2024',
        ticketsAvailable: true,
        ticketPrice: '₹500 - ₹5000'
      },
      {
        id: 2,
        opponent: 'Chennai Super Kings',
        date: '2024-03-20',
        time: '15:30',
        venue: 'M. A. Chidambaram Stadium, Chennai',
        type: 'IPL 2024',
        ticketsAvailable: true,
        ticketPrice: '₹400 - ₹4500'
      },
      {
        id: 3,
        opponent: 'Delhi Capitals',
        date: '2024-03-25',
        time: '19:30',
        venue: 'M. Chinnaswamy Stadium, Bangalore',
        type: 'IPL 2024',
        ticketsAvailable: false,
        ticketPrice: 'Sold Out'
      },
      {
        id: 4,
        opponent: 'Kolkata Knight Riders',
        date: '2024-04-02',
        time: '19:30',
        venue: 'Eden Gardens, Kolkata',
        type: 'IPL 2024',
        ticketsAvailable: true,
        ticketPrice: '₹600 - ₹6000'
      }
    ]
  };

  const displayedFixtures = showAllFixtures ? fixtures.upcoming : fixtures.upcoming.slice(0, 2);

  return (
    <section id="fixtures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            FIXTURES & RESULTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss a single moment of RCB action. Book your tickets now!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {displayedFixtures.map((fixture) => (
            <Card key={fixture.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {fixture.type}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-rcb-red transition-colors">
                  RCB vs {fixture.opponent}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-rcb-red" />
                    <span className="text-sm">{fixture.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-rcb-red" />
                    <span className="text-sm">{fixture.time} IST</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
                    onClick={() => setSelectedFixture(fixture)}
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Book Tickets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAllFixtures && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAllFixtures(true)}
              size="lg" 
              className="bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90"
            >
              View Full Schedule
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {selectedFixture && (
        <BookingModal 
          fixture={selectedFixture} 
          onClose={() => setSelectedFixture(null)} 
        />
      )}
    </section>
  );
};

export default FixturesSection;