'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Navbar } from '@/components/navbar';
import { mockCelebrities } from '@/lib/mock-data';
import { Search, Star, Users, MapPin, Heart, TrendingUp, Music, Film, Mic } from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCelebrities, setFilteredCelebrities] = useState(mockCelebrities);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let filtered = mockCelebrities;

    if (searchQuery) {
      filtered = filtered.filter(celeb =>
        celeb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        celeb.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        celeb.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(celeb => celeb.category === selectedCategory);
    }

    setFilteredCelebrities(filtered);
  }, [searchQuery, selectedCategory]);

  const categories = ['All', 'Singer', 'Actor', 'Speaker'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover & Connect with
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Global Celebrities
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premium celebrity discovery platform featuring international singers, actors, speakers, and performers. 
              Connect with your favorite stars and discover new talent.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search celebrities, genres, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2 shadow-lg"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                    : ""
                  }
                >
                  {category === 'Singer' && <Music className="h-4 w-4 mr-2" />}
                  {category === 'Actor' && <Film className="h-4 w-4 mr-2" />}
                  {category === 'Speaker' && <Mic className="h-4 w-4 mr-2" />}
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Global Celebrities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50M+</div>
              <div className="text-gray-600">Total Fanbase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">1M+</div>
              <div className="text-gray-600">Active Fans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Celebrities</h2>
            <p className="text-lg text-gray-600">Discover and connect with your favorite stars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCelebrities.map((celebrity) => (
              <Card key={celebrity.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16 ring-4 ring-purple-100">
                        <AvatarImage src={celebrity.avatar} alt={celebrity.name} />
                        <AvatarFallback>{celebrity.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {celebrity.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{celebrity.country}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {celebrity.category}
                    </Badge>
                    <p className="text-sm text-gray-600 line-clamp-2">{celebrity.bio}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{(celebrity.fanbase / 1000000).toFixed(1)}M fans</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>Trending</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link href={`/celebrity/${celebrity.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCelebrities.length === 0 && (
            <div className="text-center py-12">
              <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No celebrities found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Are you a celebrity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join CelebNetwork and connect with your fans like never before. 
            Get discovered, build your fanbase, and manage your public profile.
          </p>
          <Link href="/celebrity-signup">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
              Join as Celebrity
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}