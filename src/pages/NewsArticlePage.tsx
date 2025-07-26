import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, MessageSquare, Heart, Bookmark } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const NewsArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock article data (in real app, fetch based on ID)
  const article = {
    id: parseInt(id || '1'),
    category: 'team-news',
    title: 'Virat Kohli Returns to Form with Magnificent Century',
    content: `
      <p>In a spectacular display of batting prowess, Virat Kohli returned to his sublime best with a magnificent century against Mumbai Indians at the iconic M. Chinnaswamy Stadium. The RCB captain's knock of 112* off just 58 balls was a masterclass in T20 batting, reminding everyone why he's considered one of the greatest batsmen of all time.</p>

      <p>The innings started cautiously, with Kohli taking his time to settle in against a quality Mumbai Indians bowling attack. However, once he found his rhythm, there was no stopping the RCB skipper. His trademark cover drives and aggressive running between the wickets had the Chinnaswamy crowd on their feet throughout his innings.</p>

      <h3>Key Moments</h3>
      <p>The turning point came in the 12th over when Kohli launched Krunal Pandya for two consecutive sixes, shifting the momentum decisively in RCB's favor. His partnership with AB de Villiers added 89 runs in just 7.2 overs, setting up a formidable total of 201/3.</p>

      <p>Speaking after the match, Kohli expressed his satisfaction with the team's performance: "It feels great to contribute to the team's success. The boys have been working hard, and performances like these give us confidence for the matches ahead."</p>

      <h3>Statistical Highlights</h3>
      <ul>
        <li>12th T20 century for Virat Kohli</li>
        <li>Fastest century by an Indian in IPL 2024</li>
        <li>15 boundaries including 4 sixes</li>
        <li>Strike rate of 193.10</li>
      </ul>

      <p>This knock takes Kohli's tally to 487 runs in 8 matches this season, making him the leading run-scorer for RCB. The captain's return to form couldn't have come at a better time as RCB look to secure their playoff berth.</p>
    `,
    author: 'RCB Media Team',
    date: '2024-03-12',
    readTime: '3 min read',
    trending: true,
    comments: 245,
    shares: 1200,
    tags: ['Virat Kohli', 'Century', 'Mumbai Indians', 'Chinnaswamy']
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="mb-6 hover:bg-rcb-red/10 hover:text-rcb-red"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>

          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-rcb-gold text-rcb-black">
                  {formatCategory(article.category)}
                </Badge>
                {article.trending && (
                  <Badge variant="outline" className="border-rcb-red text-rcb-red">
                    Trending
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div 
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-rcb-gold text-rcb-gold">
                    #{tag.replace(' ', '')}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Engagement Stats */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-muted-foreground">
                      <MessageSquare className="h-5 w-5 mr-2 text-rcb-red" />
                      <span>{article.comments} Comments</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Share2 className="h-5 w-5 mr-2 text-rcb-red" />
                      <span>{article.shares} Shares</span>
                    </div>
                  </div>
                  
                  <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white">
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'RCB Defeats Punjab Kings in Thrilling Last-Ball Finish',
                    category: 'match-reports',
                    date: '2024-03-10'
                  },
                  {
                    title: 'Mohammed Siraj Destroys Opposition with Five-Wicket Haul',
                    category: 'match-reports',
                    date: '2024-03-02'
                  }
                ].map((relatedArticle, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <Badge className="bg-rcb-gold text-rcb-black mb-2">
                        {formatCategory(relatedArticle.category)}
                      </Badge>
                      <h4 className="font-semibold hover:text-rcb-red transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        {formatDate(relatedArticle.date)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;