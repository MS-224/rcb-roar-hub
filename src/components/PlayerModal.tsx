import { X, Star, Trophy, Target, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Player {
  id: number;
  name: string;
  role: string;
  jerseyNumber: number;
  matches: number;
  runs: number;
  wickets: number;
  isCaptain: boolean;
  age: number;
  average: number;
  strikeRate: number;
  bestScore: string;
  country: string;
}

interface PlayerModalProps {
  player: Player;
  onClose: () => void;
}

const PlayerModal = ({ player, onClose }: PlayerModalProps) => {
  return (
    <div className="fixed inset-0 bg-rcb-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-rcb-red/50">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-rcb-black/50 text-white hover:bg-rcb-red"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="md:flex">
            {/* Player Image Section */}
            <div className="md:w-1/2 relative h-64 md:h-96 bg-gradient-to-br from-rcb-red/30 via-rcb-gold/20 to-rcb-black/40">
              <div className="absolute inset-0 bg-gradient-to-t from-rcb-black/80 to-transparent"></div>
              
              {/* Jersey Number */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-rcb-gold rounded-full flex items-center justify-center">
                <span className="text-rcb-black font-bold text-2xl">{player.jerseyNumber}</span>
              </div>
              
              {/* Captain Badge */}
              {player.isCaptain && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-rcb-red text-white">
                    <Star className="h-4 w-4 mr-1" />
                    Captain
                  </Badge>
                </div>
              )}
              
              {/* Player Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-rcb-red to-rcb-gold flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            {/* Player Info Section */}
            <div className="md:w-1/2 p-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
                  {player.name}
                </h2>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-rcb-red text-white">{player.role}</Badge>
                  <Badge variant="outline" className="border-rcb-gold text-rcb-gold">
                    {player.country}
                  </Badge>
                  <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                    Age: {player.age}
                  </Badge>
                </div>
              </div>

              {/* Career Stats */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-rcb-gold" />
                    Career Statistics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Matches</div>
                      <div className="text-2xl font-bold text-rcb-red">{player.matches}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Runs</div>
                      <div className="text-2xl font-bold text-rcb-red">{player.runs}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Average</div>
                      <div className="text-2xl font-bold text-rcb-red">{player.average}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-muted-foreground text-sm">Strike Rate</div>
                      <div className="text-2xl font-bold text-rcb-red">{player.strikeRate}</div>
                    </div>
                  </div>
                </div>

                {/* Performance Highlights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-rcb-gold" />
                    Performance Highlights
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground">Best Score</span>
                      <span className="font-semibold text-rcb-red">{player.bestScore}</span>
                    </div>
                    {player.wickets > 0 && (
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-muted-foreground">Wickets</span>
                        <span className="font-semibold text-rcb-red">{player.wickets}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground">RCB Debut</span>
                      <span className="font-semibold text-rcb-red">2019</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white flex-1">
                    View Full Profile
                  </Button>
                  <Button variant="outline" className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black">
                    Share Player
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerModal;