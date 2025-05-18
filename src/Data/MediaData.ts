const mediaData = [
  {
    id: '1',
    username: 'john_doe',
    description: 'Enjoying the mountain view!',
    profilePic: require('../assets/images/aa.jpg'),
    media: [{ type: 'image', source: require('../assets/images/aa.jpg') }],
  },
  {
    id: '2',
    username: 'travel_guru',
    description: 'Two scenic shots from my recent trip.',
    profilePic: require('../assets/images/aa.jpg'),
    media: [
      { type: 'image', source: require('../assets/images/aa.jpg') },
      { type: 'image', source: require('../assets/images/aa.jpg') },
    ],
  },
  {
    id: '3',
    username: 'video_lover',
    description: 'Check out this amazing video!',
    profilePic: require('../assets/images/aa.jpg'),
    media: [{ type: 'video', source: require('../assets/videos/v1.mp4') }],
  },
  {
    id: '4',
    username: 'nature_addict',
    description: 'Waterfall vibes 🌊',
    profilePic: require('../assets/images/aa.jpg'),
    media: [{ type: 'video', source: require('../assets/videos/v2.mp4') }],
  },
  {
    id: '5',
    username: 'urban_snap',
    description: 'City lights and vibes ✨',
    profilePic: require('../assets/images/aa.jpg'),
    media: [{ type: 'video', source: require('../assets/videos/v3.mp4') }],
  },
  {
    id: '6',
    username: 'fitness_freak',
    description: 'Early morning workout session 💪',
    profilePic: require('../assets/images/aa.jpg'),
    media: [{ type: 'video', source: require('../assets/videos/v4.mp4') }],
  },
];

export default mediaData;
