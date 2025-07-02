'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/navbar';
import { useAuth } from '@/lib/auth-context';
import { mockCelebrities, mockDashboardStats } from '@/lib/mock-data';
import { 
  Heart, 
  Star, 
  Users, 
  Eye,
  TrendingUp,
  Music,
  Film,
  Mic,
  Settings,
  Bell
} from 'lucide-react';

export default function FanDashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [followedCelebrities, setFollowedCelebrities] = useState<any[]>([]);

  useEffect(() => {
    if (!isLoading && (!user || user.type !== 'fan')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Mock followed celebrities - first 3 from the list
    setFollowedCelebrities(mockCelebrities.slice(0, 3));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Star className="h-12 w-12 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || user.type !== 'fan') {
    return null;
  }

  const stats = mockDashboardStats.fan;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Avatar className="h-16 w-16 ring-4 ring-purple-100">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hey {user.name}!</h1>
              <p className="text-gray-600">Discover and follow your favorite celebrities</p>
              <Badge variant="secondary" className="mt-1">Fan Account</Badge>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Following</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.followedCelebrities}</p>
                </div>
                <Heart className="h-12 w-12 text-purple-600 bg-purple-100 p-3 rounded-full" />
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="text-gray-500">Celebrities you follow</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Favorite Genre</p>
                  <p className="text-2xl font-bold text-pink-600">{stats.favoriteGenres[0]}</p>
                </div>
                <Music className="h-12 w-12 text-pink-600 bg-pink-100 p-3 rounded-full" />
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="text-gray-500">Your top preference</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-3xl font-bold text-green-600">127</p>
                </div>
                <Eye className="h-12 w-12 text-green-600 bg-green-100 p-3 rounded-full" />
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium">This month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Followed Celebrities */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  Following ({followedCelebrities.length})
                </div>
                <Link href="/">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardTitle>
              <CardDescription>Celebrities you're currently following</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {followedCelebrities.map((celebrity) => (
                  <div key={celebrity.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={celebrity.avatar} alt={celebrity.name} />
                        <AvatarFallback>{celebrity.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{celebrity.name}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          {celebrity.category === 'Singer' && <Music className="h-3 w-3" />}
                          {celebrity.category === 'Actor' && <Film className="h-3 w-3" />}
                          {celebrity.category === 'Speaker' && <Mic className="h-3 w-3" />}
                          <span>{celebrity.category}</span>
                        </div>
                      </div>
                    </div>
                    <Link href={`/celebrity/${celebrity.id}`}>
                      <Button variant="outline" size="sm">View</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest actions on CelebNetwork</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      {activity.includes('Followed') && <Heart className="h-4 w-4 text-purple-600" />}
                      {activity.includes('Liked') && <Star className="h-4 w-4 text-yellow-600" />}
                      {activity.includes('Downloaded') && <Eye className="h-4 w-4 text-green-600" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity}</p>
                      <p className="text-xs text-gray-500">{index + 1} hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Favorite Genres */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="h-5 w-5 mr-2 text-purple-600" />
                Your Favorite Genres
              </CardTitle>
              <CardDescription>Based on the celebrities you follow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {stats.favoriteGenres.map((genre, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-4">Discover More</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/">
                    <Button variant="outline" className="w-full justify-start">
                      <Music className="h-4 w-4 mr-2" />
                      Explore Singers
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full justify-start">
                      <Film className="h-4 w-4 mr-2" />
                      Discover Actors
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full justify-start">
                      <Mic className="h-4 w-4 mr-2" />
                      Find Speakers
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}