'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/navbar';
import { mockCelebrities } from '@/lib/mock-data';
import { 
  Heart, 
  Users, 
  MapPin, 
  Instagram, 
  Youtube, 
  Music2, 
  Download,
  TrendingUp,
  Calendar,
  Star,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';

export default function CelebrityProfilePage() {
  const params = useParams();
  const [celebrity, setCelebrity] = useState<any>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const celeb = mockCelebrities.find(c => c.id === params.id);
    if (celeb) {
      setCelebrity(celeb);
      setIsFollowing(celeb.isFollowed);
    }
  }, [params.id]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? 'Unfollowed!' : 'Now following!');
  };

  const handleDownloadPDF = () => {
    toast.success('PDF generation started! Check your downloads.');
    // This would trigger the PDF generation API
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Profile link copied to clipboard!');
  };

  if (!celebrity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600">Celebrity not found</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar and Basic Info */}
            <div className="flex-shrink-0">
              <Avatar className="h-48 w-48 ring-8 ring-white shadow-2xl">
                <AvatarImage src={celebrity.avatar} alt={celebrity.name} />
                <AvatarFallback className="text-4xl">{celebrity.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>

            {/* Celebrity Details */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{celebrity.name}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {celebrity.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{celebrity.country}</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-4 max-w-2xl">{celebrity.bio}</p>
                  <p className="text-sm font-medium text-purple-600 mb-6">{celebrity.genre}</p>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleShare} variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                  <Button 
                    onClick={handleFollow}
                    className={isFollowing 
                      ? "bg-gray-600 hover:bg-gray-700" 
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    }
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </div>
              </div>

              {/* Social Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-white/60 p-4 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold">{(celebrity.fanbase / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">Total Fans</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 p-4 rounded-lg">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <div>
                    <div className="text-2xl font-bold">{(celebrity.followers.instagram / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">Instagram</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 p-4 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">8.5%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent News */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Recent News
                </h3>
                <div className="space-y-4">
                  {celebrity.recentNews.map((news: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm font-medium">{news}</p>
                        <p className="text-xs text-gray-500 mt-1">{index + 1} days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance History */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Music2 className="h-5 w-5 mr-2 text-purple-600" />
                  Notable Performances
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {celebrity.performances.map((performance: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">{performance}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Media Links */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Social Media</h3>
                <div className="space-y-3">
                  <a 
                    href={`https://instagram.com/${celebrity.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg hover:from-pink-100 hover:to-rose-100 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-medium">{celebrity.instagram}</div>
                      <div className="text-sm text-gray-600">{(celebrity.followers.instagram / 1000000).toFixed(1)}M followers</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#"
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg hover:from-red-100 hover:to-orange-100 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-medium">YouTube</div>
                      <div className="text-sm text-gray-600">{(celebrity.followers.youtube / 1000000).toFixed(1)}M subscribers</div>
                    </div>
                  </a>

                  {celebrity.followers.spotify > 0 && (
                    <a 
                      href="#"
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors"
                    >
                      <Music2 className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">Spotify</div>
                        <div className="text-sm text-gray-600">{(celebrity.followers.spotify / 1000000).toFixed(1)}M monthly listeners</div>
                      </div>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{celebrity.category}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Country</span>
                    <span className="font-medium">{celebrity.country}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Fanbase</span>
                    <span className="font-medium">{(celebrity.fanbase / 1000000).toFixed(1)}M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Joined</span>
                    <span className="font-medium">2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}