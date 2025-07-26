import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NewsSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'team-news', 'match-reports', 'transfers', 'interviews'];

  // Mock news data
  const newsArticles = [
    {
      id: 1,
      category: 'team-news',
      title: 'Virat Kohli Returns to Form with Magnificent Century',
      excerpt: 'The RCB captain played a masterful innings, scoring his first century of the season against Mumbai Indians at the Chinnaswamy Stadium.',
      author: 'RCB Media Team',
      date: '2024-03-12',
      readTime: '3 min read',
      trending: true,
      comments: 245,
      shares: 1200
    },
    {
      id: 2,
      category: 'match-reports',
      title: 'RCB Defeats Punjab Kings in Thrilling Last-Ball Finish',
      excerpt: 'A nail-biting encounter saw RCB chase down 181 runs with Glenn Maxwell hitting the winning six off the last ball of the match.',
      author: 'Sports Correspondent',
      date: '2024-03-10',
      readTime: '5 min read',
      trending: false,
      comments: 189,
      shares: 850
    },
    {
      id: 3,
      category: 'transfers',
      title: 'RCB Signs New Fast Bowler for Upcoming Season',
      excerpt: 'The franchise has announced the signing of promising young fast bowler who impressed in domestic cricket this year.',
      author: 'Transfer News',
      date: '2024-03-08',
      readTime: '2 min read',
      trending: true,
      comments: 156,
      shares: 620
    },
    {
      id: 4,
      category: 'interviews',
      title: 'Faf du Plessis Talks About Team Strategy and Leadership',
      excerpt: 'In an exclusive interview, the RCB opener discusses the teams preparation and his role as a senior player in the squad.',
      author: 'RCB Insider',
      date: '2024-03-06',
      readTime: '4 min read',
      trending: false,
      comments: 98,
      shares: 420
    },
    {
      id: 5,
      category: 'team-news',
      title: 'Chinnaswamy Stadium Gets Major Upgrades for New Season',
      excerpt: 'The iconic venue has undergone significant improvements including new facilities for fans and enhanced player amenities.',
      author: 'Stadium Management',
      date: '2024-03-04',
      readTime: '3 min read',
      trending: false,
      comments: 134,
      shares: 380
    },
    {
      id: 6,
      category: 'match-reports',
      title: 'Mohammed Siraj Destroys Opposition with Five-Wicket Haul',
      excerpt: 'The pace spearhead delivered a devastating bowling performance, taking 5 wickets for just 25 runs in his four overs.',
      author: 'Match Reporter',
      date: '2024-03-02',
      readTime: '4 min read',
      trending: true,
      comments: 278,
      shares: 950
    }
  ];

  const filteredNews = newsArticles.filter(article => 
    selectedCategory === 'all' || article.category === selectedCategory
  );

  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            LATEST NEWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings from the RCB camp
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

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-rcb-red/20 hover:border-rcb-red/50 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-rcb-red/20 to-rcb-gold/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-rcb-red mx-auto mb-4" />
                    <Badge className="bg-rcb-red text-white">Featured Story</Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-rcb-gold text-rcb-black">
                      {formatCategory(filteredNews[0].category)}
                    </Badge>
                    {filteredNews[0].trending && (
                      <Badge variant="outline" className="border-rcb-red text-rcb-red">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-rcb-red transition-colors cursor-pointer">
                    {filteredNews[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {filteredNews[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {filteredNews[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(filteredNews[0].date)}
                      </div>
                      <span>{filteredNews[0].readTime}</span>
                    </div>
                    
                    <Button 
                      onClick={() => navigate(`/news/${filteredNews[0].id}`)}
                      className="bg-rcb-red hover:bg-rcb-red/90 text-white"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-rcb-gold text-rcb-black">
                    {formatCategory(article.category)}
                  </Badge>
                  {article.trending && (
                    <Badge variant="outline" className="border-rcb-red text-rcb-red">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-bold group-hover:text-rcb-red transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      <span>{article.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="h-3 w-3 mr-1" />
                      <span>{article.shares}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {formatDate(article.date)}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate(`/news/${article.id}`)}
                  className="w-full border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More and Newsletter Signup */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black px-8 py-6 text-lg font-semibold"
            >
              Load More Articles
            </Button>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter and get the latest RCB news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-rcb-red"
              />
              <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;