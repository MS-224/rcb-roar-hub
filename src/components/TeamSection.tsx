import { useState } from 'react';
import { Search, Filter, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PlayerModal from './PlayerModal';

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState('men');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Mock data for players with extended info
  const menPlayers = [
    { id: 1, name: 'Virat Kohli', role: 'Batter', jerseyNumber: 18, matches: 245, runs: 7263, wickets: 4, isCaptain: false, age: 35, average: 37.25, strikeRate: 131.61, bestScore: "113*", country: "India" },
    { id: 2, name: 'Faf du Plessis', role: 'Batter', jerseyNumber: 19, matches: 100, runs: 2935, wickets: 0, isCaptain: true, age: 39, average: 31.26, strikeRate: 127.78, bestScore: "96", country: "South Africa" },
    { id: 3, name: 'Glenn Maxwell', role: 'All-rounder', jerseyNumber: 32, matches: 123, runs: 2771, wickets: 9, isCaptain: false, age: 35, average: 25.88, strikeRate: 154.67, bestScore: "78", country: "Australia" },
    { id: 4, name: 'Mohammed Siraj', role: 'Bowler', jerseyNumber: 73, matches: 93, runs: 183, wickets: 93, isCaptain: false, age: 30, average: 8.72, strikeRate: 115.45, bestScore: "14*", country: "India" },
    { id: 5, name: 'Dinesh Karthik', role: 'Wicket-keeper', jerseyNumber: 7, matches: 232, runs: 4842, wickets: 0, isCaptain: false, age: 39, average: 25.89, strikeRate: 135.36, bestScore: "83*", country: "India" },
    { id: 6, name: 'Harshal Patel', role: 'Bowler', jerseyNumber: 23, matches: 69, runs: 123, wickets: 77, isCaptain: false, age: 33, average: 7.42, strikeRate: 120.15, bestScore: "17", country: "India" }
  ];

  const womenPlayers = [
    { id: 7, name: 'Smriti Mandhana', role: 'Batter', jerseyNumber: 18, matches: 89, runs: 3267, wickets: 2, isCaptain: true, age: 27, average: 41.78, strikeRate: 119.8, bestScore: "87", country: "India" },
    { id: 8, name: 'Ellyse Perry', role: 'All-rounder', jerseyNumber: 3, matches: 134, runs: 4895, wickets: 78, isCaptain: false, age: 33, average: 42.65, strikeRate: 125.34, bestScore: "112*", country: "Australia" },
    { id: 9, name: 'Sophie Devine', role: 'All-rounder', jerseyNumber: 13, matches: 156, runs: 5421, wickets: 67, isCaptain: false, age: 34, average: 39.87, strikeRate: 133.44, bestScore: "105", country: "New Zealand" },
    { id: 10, name: 'Renuka Singh', role: 'Bowler', jerseyNumber: 24, matches: 45, runs: 89, wickets: 67, isCaptain: false, age: 27, average: 4.78, strikeRate: 98.9, bestScore: "12", country: "India" },
    { id: 11, name: 'Richa Ghosh', role: 'Wicket-keeper', jerseyNumber: 9, matches: 34, runs: 876, wickets: 0, isCaptain: false, age: 21, average: 28.9, strikeRate: 128.76, bestScore: "64*", country: "India" },
    { id: 12, name: 'Sabbhineni Meghana', role: 'Batter', jerseyNumber: 16, matches: 28, runs: 654, wickets: 1, isCaptain: false, age: 24, average: 26.34, strikeRate: 115.67, bestScore: "73", country: "India" }
  ];

  const currentPlayers = selectedTeam === 'men' ? menPlayers : womenPlayers;
  const roles = ['all', 'Batter', 'Bowler', 'All-rounder', 'Wicket-keeper'];

  const filteredPlayers = currentPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || player.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

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
            <Card 
              key={player.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-rcb-red/50 cursor-pointer overflow-hidden h-80"
              onClick={() => handlePlayerClick(player)}
            >
              <div className="relative h-full bg-gradient-to-br from-rcb-red/30 via-rcb-gold/20 to-rcb-black/40">
                {/* Full-size player image background */}
                <div className="absolute inset-0 bg-gradient-to-t from-rcb-black/90 via-rcb-black/30 to-transparent"></div>
                
                {/* Jersey Number - Top Left */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-rcb-gold rounded-full flex items-center justify-center">
                  <span className="text-rcb-black font-bold text-sm">{player.jerseyNumber}</span>
                </div>
                
                {/* Role - Top Right */}
                <div className="absolute top-3 right-3">
                  <Badge className="bg-rcb-red text-white text-xs">
                    {player.role}
                  </Badge>
                </div>
                
                {/* Captain Badge - If Captain */}
                {player.isCaptain && (
                  <div className="absolute top-12 right-3">
                    <Badge className="bg-rcb-gold text-rcb-black text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Captain
                    </Badge>
                  </div>
                )}
                
                {/* Player Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-rcb-red to-rcb-gold flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Player Name - Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-rcb-gold transition-colors">
                    {player.name}
                  </h3>
                  <div className="flex justify-center gap-4 mt-2 text-xs text-gray-300">
                    <span>Matches: {player.matches}</span>
                    {player.runs > 0 && <span>Runs: {player.runs}</span>}
                    {player.wickets > 0 && <span>Wickets: {player.wickets}</span>}
                  </div>
                </div>
              </div>
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

      {/* Player Modal */}
      {selectedPlayer && (
        <PlayerModal 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}
    </section>
  );
};

export default TeamSection;