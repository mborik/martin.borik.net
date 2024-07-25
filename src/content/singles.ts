import { Release, toReleaseDate } from '@/store';

export const singles: Release[] = [
  {
    id: 'ngnt',
    title: 'Not Great Not Terrible',
    href: '/not-great-not-terrible',
    imagePath: '/images/covers/ngnt.jpg',
    badges: ['cinematic', 'ambient', 'alternative rock'],
    ...toReleaseDate('2024-01-01'),
    duration: '05:58',
    youtubeEmbed: 'CirRHJcMHkI?si=4MGdCqfiXQ-LmxkB',
    bandcampEmbed: 'track=2265910886',
    link: {
      bandcamp: 'https://mborik.bandcamp.com/track/not-great-not-terrible',
      spotify: 'https://open.spotify.com/track/3hBxrjfoZnZXcT5zfGstdl',
      appleMusic:
        'https://music.apple.com/us/album/not-great-not-terrible/1726770109?i=1726770110',
      deezer: 'https://www.deezer.com/sk/album/536585452',
      youtube: 'https://youtu.be/CirRHJcMHkI?feature=shared',
      youtubeMusic:
        'https://music.youtube.com/playlist?list=OLAK5uy_lHHI6rTjnVgTIC9tHLpfrekzWGeb4wJd8',
    },
  },
  {
    id: 'tearing-apart',
    title: 'Tearing Apart',
    href: '/tearing-apart',
    imagePath: '/images/covers/tearing_apart.jpg',
    badges: ['glitch', 'ambient', 'alternative rock'],
    ...toReleaseDate('2023-09-22'),
    duration: '03:45',
  },
  {
    id: 'underscored',
    title: 'Underscored',
    href: '/underscored',
    imagePath: '/images/covers/underscored.jpg',
    badges: ['liquid', `drum'n'bass`, 'cinematic'],
    ...toReleaseDate('2023-09-01'),
    duration: '05:18',
  },
  {
    id: 'bitcrush-on-you',
    title: 'Bitcrush on you',
    href: '/bitcrush-on-you',
    imagePath: '/images/covers/bitcrush_on_you.jpg',
    badges: ['synthwave', 'vocal'],
    ...toReleaseDate('2023-02-01'),
    duration: '04:05',
  },
];

export const getSingle = (id: string): Release | undefined =>
  singles.find((single) => single.id === id);
