import { useState } from 'react';
import { Search, Filter, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState('men');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  // Mock data - in real app, this would come from API
  const menPlayers = [
    { id: 1, name: 'Virat Kohli', role: 'Batter', image: '/placeholder.svg', matches: 245, runs: 7263, captain: true },
    { id: 2, name: 'Faf du Plessis', role: 'Batter', image: '/placeholder.svg', matches: 124, runs: 3890, captain: false },
    { id: 3, name: 'Glenn Maxwell', role: 'All-Rounder', image: '/placeholder.svg', matches: 103, runs: 2771, captain: false },
    { id: 4, name: 'Mohammed Siraj', role: 'Bowler', image: '/placeholder.svg', matches: 93, wickets: 91, captain: false },
    { id: 5, name: 'Wanindu Hasaranga', role: 'All-Rounder', image: '/placeholder.svg', matches: 34, wickets: 43, captain: false },
    { id: 6, name: 'Josh Hazlewood', role: 'Bowler', image: '/placeholder.svg', matches: 12, wickets: 12, captain: false },
    { id: 7, name: 'Dinesh Karthik', role: 'Wicket-Keeper', image: '/placeholder.svg', matches: 232, runs: 4127, captain: false },
    { id: 8, name: 'Harshal Patel', role: 'Bowler', image: '/placeholder.svg', matches: 67, wickets: 65, captain: false },
  ];

  const womenPlayers = [
    { id: 1, name: 'Smriti Mandhana', role: 'Batter', image: '/placeholder.svg', matches: 89, runs: 3267, captain: true },
    { id: 2, name: 'Ellyse Perry', role: 'All-Rounder', image: '/placeholder.svg', matches: 345, runs: 6453, captain: false },
    { id: 3, name: 'Sophie Devine', role: 'All-Rounder', image: '/placeholder.svg', matches: 298, runs: 5897, captain: false },
    { id: 4, name: 'Richa Ghosh', role: 'Wicket-Keeper', image: '/placeholder.svg', matches: 23, runs: 456, captain: false },
    { id: 5, name: 'Poonam Yadav', role: 'Bowler', image: '/placeholder.svg', matches: 123, wickets: 134, captain: false },
    { id: 6, name: 'Shafali Verma', role: 'Batter', image: '/placeholder.svg', matches: 67, runs: 1876, captain: false },
  ];

  const currentPlayers = selectedTeam === 'men' ? menPlayers : womenPlayers;
  const roles = ['all', 'Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];

  const filteredPlayers = currentPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || player.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            OUR CHAMPIONS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the warriors who wear the RCB jersey with pride and passion
          </p>
        </div>

        {/* Team Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-full p-1 flex">
            <Button
              variant={selectedTeam === 'men' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTeam === 'men' 
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90' 
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTeam('men')}
            >
              <Users className="mr-2 h-4 w-4" />
              Men's Team
            </Button>
            <Button
              variant={selectedTeam === 'women' ? 'default' : 'ghost'}
              className={`rounded-full px-8 py-2 ${selectedTeam === 'women' 
                ? 'bg-rcb-red text-white hover:bg-rcb-red/90' 
                : 'text-foreground hover:text-rcb-red'}`}
              onClick={() => setSelectedTeam('women')}
            >
              <Users className="mr-2 h-4 w-4" />
              Women's Team
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search player name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {roles.map((role) => (
              <Button
                key={role}
                variant={selectedRole === role ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRole(role)}
                className={selectedRole === role 
                  ? 'bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90' 
                  : 'border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black'}
              >
                <Filter className="mr-1 h-3 w-3" />
                {role === 'all' ? 'All Roles' : role}
              </Button>
            ))}
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <Card key={player.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-rcb-red to-rcb-gold p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Users className="h-12 w-12 text-rcb-red" />
                    </div>
                  </div>
                  {player.captain && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-rcb-gold text-rcb-black">
                        <Star className="h-3 w-3 mr-1" />
                        Captain
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-rcb-red transition-colors">
                    {player.name}
                  </h3>
                  <Badge variant="outline" className="mb-3 border-rcb-gold text-rcb-gold">
                    {player.role}
                  </Badge>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Matches:</span>
                      <span className="font-semibold">{player.matches}</span>
                    </div>
                    {player.runs && (
                      <div className="flex justify-between">
                        <span>Runs:</span>
                        <span className="font-semibold text-rcb-red">{player.runs}</span>
                      </div>
                    )}
                    {player.wickets && (
                      <div className="flex justify-between">
                        <span>Wickets:</span>
                        <span className="font-semibold text-rcb-red">{player.wickets}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No players found matching your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;