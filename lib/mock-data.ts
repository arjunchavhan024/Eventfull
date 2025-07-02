export const mockCelebrities = [
  {
    id: '1',
    name: 'Diljit Dosanjh',
    category: 'Singer',
    country: 'India',
    avatar: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 15000000,
    instagram: '@diljitdosanjh',
    followers: { instagram: 15000000, youtube: 8500000, spotify: 5200000 },
    bio: 'Punjabi singer and actor who performed at Coachella, bridging Punjabi music with global audiences.',
    genre: 'Punjabi, Pop',
    recentNews: [
      'Diljit Dosanjh announces world tour 2024',
      'Historic Coachella performance breaks streaming records'
    ],
    performances: ['Coachella 2023', 'Mumbai Concert 2024', 'London O2 Arena'],
    isFollowed: false
  },
  {
    id: '2',
    name: 'Chris Martin',
    category: 'Singer',
    country: 'United Kingdom',
    avatar: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 45000000,
    instagram: '@coldplay',
    followers: { instagram: 45000000, youtube: 25000000, spotify: 35000000 },
    bio: 'Lead vocalist of Coldplay, creating anthemic music that unites millions worldwide.',
    genre: 'Alternative Rock, Pop',
    recentNews: [
      'Coldplay announces Music of the Spheres World Tour extension',
      'New album features collaborations with global artists'
    ],
    performances: ['Wembley Stadium 2024', 'MetLife Stadium 2024', 'Sydney Opera House'],
    isFollowed: false
  },
  {
    id: '3',
    name: 'Priyanka Chopra',
    category: 'Actor',
    country: 'India',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 88000000,
    instagram: '@priyankachopra',
    followers: { instagram: 88000000, youtube: 2100000, spotify: 0 },
    bio: 'Global actress and producer, bridging Bollywood and Hollywood with powerful performances.',
    genre: 'Acting, Production',
    recentNews: [
      'Priyanka Chopra stars in upcoming Amazon Prime series',
      'Named UNICEF Goodwill Ambassador for South Asia'
    ],
    performances: ['Quantico (TV Series)', 'The Matrix Resurrections', 'Citadel'],
    isFollowed: false
  },
  {
    id: '4',
    name: 'Tony Robbins',
    category: 'Speaker',
    country: 'United States',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 12000000,
    instagram: '@tonyrobbins',
    followers: { instagram: 12000000, youtube: 1800000, spotify: 0 },
    bio: 'World-renowned life and business strategist, empowering millions through transformational events.',
    genre: 'Motivational Speaking, Life Coaching',
    recentNews: [
      'Tony Robbins announces Date With Destiny 2024 events',
      'New book "Life Force" becomes international bestseller'
    ],
    performances: ['Date With Destiny', 'Business Mastery', 'Unleash the Power Within'],
    isFollowed: false
  },
  {
    id: '5',
    name: 'Billie Eilish',
    category: 'Singer',
    country: 'United States',
    avatar: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 106000000,
    instagram: '@billieeilish',
    followers: { instagram: 106000000, youtube: 47000000, spotify: 95000000 },
    bio: 'Grammy-winning artist known for her unique sound and environmental advocacy.',
    genre: 'Pop, Alternative',
    recentNews: [
      'Billie Eilish announces sustainable world tour',
      'Wins multiple Grammy Awards for "Happier Than Ever"'
    ],
    performances: ['Coachella 2022', 'Glastonbury 2022', 'The Forum LA'],
    isFollowed: false
  },
  {
    id: '6',
    name: 'Shah Rukh Khan',
    category: 'Actor',
    country: 'India',
    avatar: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    fanbase: 42000000,
    instagram: '@iamsrk',
    followers: { instagram: 42000000, youtube: 5600000, spotify: 0 },
    bio: 'King of Bollywood with over 80 films, beloved globally for his romantic roles and charisma.',
    genre: 'Acting, Film Production',
    recentNews: [
      'Shah Rukh Khan returns with blockbuster "Pathaan"',
      'Receives Lifetime Achievement Award at Cannes'
    ],
    performances: ['Pathaan', 'My Name is Khan', 'Dilwale Dulhania Le Jayenge'],
    isFollowed: false
  }
];

export const mockDashboardStats = {
  celebrity: {
    totalFans: 1250000,
    profileViews: 45000,
    engagementRate: 8.5,
    monthlyGrowth: 12.3
  },
  fan: {
    followedCelebrities: 8,
    favoriteGenres: ['Pop', 'Rock', 'Bollywood'],
    recentActivities: [
      'Followed Diljit Dosanjh',
      'Liked Chris Martin\'s latest post',
      'Downloaded Priyanka Chopra\'s profile PDF'
    ]
  }
};