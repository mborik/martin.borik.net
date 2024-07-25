import { Release, toReleaseDate } from '@/store';

export const albums: Release[] = [
  {
    id: 'elara',
    title: 'Elara and Echoes of Destiny',
    href: '/elara-and-echoes-of-destiny',
    imagePath: '/images/covers/elara.jpg',
    badges: ['cinematic', 'orchestral', 'epic'],
    ...toReleaseDate('2024-08-14'),
  },
  {
    id: 'neobios',
    title: 'Neobios',
    href: '/neobios',
    imagePath: '/images/covers/neobios.jpg',
    badges: ['newage', 'ambient', 'electronic'],
    ...toReleaseDate('2014-08-14'),
    duration: '56:43',
    numberOfTracks: 11,
  },
  {
    id: 'umbra-linea',
    title: 'Umbra Linea',
    href: '/umbra-linea',
    imagePath: '/images/covers/umbra_linea.jpg',
    badges: ['newage', 'orchestral', 'alternative rock'],
    ...toReleaseDate('2013-07-09'),
    duration: '15:05',
  },
  {
    id: 'chilled',
    title: 'Chilled',
    href: '/chilled',
    imagePath: '/images/covers/chilled.jpg',
    badges: ['progressive', 'jazz-rock', 'electronic', 'opus'],
    ...toReleaseDate('2007-08-14'),
    duration: '41:09',
    bandcampEmbed: 'track=2699410751',
    link: {
      bandcamp: 'https://mborik.bandcamp.com/album/chilled',
      spotify: 'https://open.spotify.com/album/5aK0B67oeLyNGbOCsW1akf',
      appleMusic: 'https://music.apple.com/us/album/chilled/1020757588',
      tidal: 'https://tidal.com/browse/album/49270200',
      youtubeMusic:
        'https://music.youtube.com/playlist?list=OLAK5uy_nUoUUSKcqobRQE60KOsaV6hxqpxPKRUrY',
    },
  },
];

export const getAlbum = (id: string): Release | undefined =>
  albums.find((album) => album.id === id);
