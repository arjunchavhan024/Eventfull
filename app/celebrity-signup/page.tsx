'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navbar } from '@/components/navbar';
import { Star, Sparkles, User, Globe, Instagram, Users, Music } from 'lucide-react';
import { toast } from 'sonner';

export default function CelebritySignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [showAiResults, setShowAiResults] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    name: '',
    category: '',
    country: '',
    genre: '',
    instagram: '',
    fanbase: '',
    bio: ''
  });
  const router = useRouter();

  const handleAiSearch = async () => {
    if (!aiSuggestion.trim()) {
      toast.error('Please enter a description');
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Mock AI response based on common descriptions
      if (aiSuggestion.toLowerCase().includes('punjabi') || aiSuggestion.toLowerCase().includes('coachella')) {
        setFormData({
          ...formData,
          name: 'Diljit Dosanjh',
          category: 'Singer',
          country: 'India',
          genre: 'Punjabi, Pop',
          instagram: '@diljitdosanjh',
          fanbase: '15000000',
          bio: 'Punjabi singer and actor who performed at Coachella, bridging Punjabi music with global audiences.'
        });
      } else if (aiSuggestion.toLowerCase().includes('coldplay') || aiSuggestion.toLowerCase().includes('chris martin')) {
        setFormData({
          ...formData,
          name: 'Chris Martin',
          category: 'Singer',
          country: 'United Kingdom',
          genre: 'Alternative Rock, Pop',
          instagram: '@coldplay',
          fanbase: '45000000',
          bio: 'Lead vocalist of Coldplay, creating anthemic music that unites millions worldwide.'
        });
      } else {
        // Generic AI-suggested form
        setFormData({
          ...formData,
          name: 'Celebrity Name',
          category: 'Singer',
          country: 'United States',
          genre: 'Pop',
          instagram: '@celebrity',
          fanbase: '1000000',
          bio: 'Talented performer making waves in the entertainment industry.'
        });
      }
      
      setShowAiResults(true);
      setIsLoading(false);
      toast.success('AI has auto-filled your form based on your description!');
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock submission
    setTimeout(() => {
      toast.success('Celebrity profile created successfully!');
      router.push('/celebrity-dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-purple-600" />
            <Sparkles className="h-6 w-6 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join CelebNetwork as a
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Celebrity
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let our AI help you create the perfect celebrity profile. Just describe yourself in one line!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Discovery Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <span>AI-Powered Discovery</span>
              </CardTitle>
              <CardDescription>
                Describe yourself in one line and let our AI auto-fill your celebrity profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-description">Describe yourself</Label>
                <Textarea
                  id="ai-description"
                  placeholder="e.g., Punjabi singer from India who performed at Coachella"
                  value={aiSuggestion}
                  onChange={(e) => setAiSuggestion(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <Button
                onClick={handleAiSearch}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    AI is working...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate with AI
                  </>
                )}
              </Button>

              {showAiResults && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">AI Results</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    AI has detected and auto-filled your celebrity profile! Review and submit on the right.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Celebrity Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-6 w-6 text-purple-600" />
                <span>Celebrity Profile</span>
              </CardTitle>
              <CardDescription>
                Complete your celebrity profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Celebrity Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="name"
                        placeholder="Your stage/celebrity name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Singer">Singer</SelectItem>
                        <SelectItem value="Actor">Actor</SelectItem>
                        <SelectItem value="Speaker">Speaker</SelectItem>
                        <SelectItem value="Dancer">Dancer</SelectItem>
                        <SelectItem value="Comedian">Comedian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="country"
                        placeholder="Your country"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="genre">Genre/Style</Label>
                    <div className="relative">
                      <Music className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="genre"
                        placeholder="e.g., Pop, Rock, Comedy"
                        value={formData.genre}
                        onChange={(e) => setFormData({...formData, genre: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram Handle</Label>
                    <div className="relative">
                      <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="instagram"
                        placeholder="@yourusername"
                        value={formData.instagram}
                        onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fanbase">Fanbase Size</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="fanbase"
                        type="number"
                        placeholder="1000000"
                        value={formData.fanbase}
                        onChange={(e) => setFormData({...formData, fanbase: e.target.value})}
                        className="pl-10"
                        min="1000"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself, your achievements, and what makes you unique..."
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isLoading ? 'Creating Profile...' : 'Create Celebrity Profile'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}