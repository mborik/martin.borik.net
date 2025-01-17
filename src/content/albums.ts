import { Release, toReleaseDate } from '@/store';

export const albums: Release[] = [
  {
    id: 'elara',
    title: 'Elara and Echoes of Destiny',
    href: '/elara-and-echoes-of-destiny',
    imagePath: '/images/covers/elara.jpg',
    badges: ['cinematic', 'orchestral', 'epic'],
    ...toReleaseDate('2024-08-14'),
    duration: '19:23',
    numberOfTracks: 8,
    stickyPlayer: true,
    bandcampEmbed: 'album=1405519782',
    youtubeEmbed: '2BzZym-n2jQ?si=I8BIV3OM61blCuDo',
    link: {
      bandcamp: 'https://mborik.bandcamp.com/album/elara-and-echoes-of-destiny',
      spotify: 'https://open.spotify.com/album/3RgDLf5zLB3YU9QTxzYBXi',
      appleMusic:
        'https://music.apple.com/us/album/elara-and-echoes-of-destiny/1763113792',
      tidal: 'https://tidal.com/browse/album/381471785',
      deezer: 'https://www.deezer.com/sk/album/629917781',
      youtubeMusic:
        'https://music.youtube.com/playlist?list=OLAK5uy_mSLjteBhxIw62eG0UQHfxMAFsdrphc4ik',
    },
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
    mastering: 'Radoslav Košvanec @ TC Lemons',
    stickyPlayer: true,
    bandcampEmbed: 'album=3514002307/package=3543520305',
    link: {
      bandcamp: 'https://mborik.bandcamp.com/album/neobios',
      spotify: 'https://open.spotify.com/album/3ETcubNAShAZxDUNxNLPAl',
      appleMusic: 'https://music.apple.com/us/album/neobios/948721396',
      deezer: 'https://www.deezer.com/sk/album/9341842',
      youtubeMusic:
        'https://music.youtube.com/playlist?list=OLAK5uy_nweTMEcQpBt0f916TRAEZ_9JzCYweTJHA',
    },
  },
  {
    id: 'umbra-linea',
    title: 'Umbra Linea',
    href: '/umbra-linea',
    imagePath: '/images/covers/umbra_linea.jpg',
    badges: ['newage', 'orchestral', 'alternative rock'],
    ...toReleaseDate('2013-07-09'),
    duration: '15:05',
    bandcampEmbed: 'album=1797552204',
    youtubeEmbed: '9GgrisJSkas?si=rE1rtmXy1vjwwNiS',
    link: {
      bandcamp: 'https://mborik.bandcamp.com/album/umbra-linea',
      spotify: 'https://open.spotify.com/album/6Mzt27Y1kFnbmaZ8JFp1pd',
      appleMusic: 'https://music.apple.com/us/album/umbra-linea-ep/1023319315',
      tidal: 'https://tidal.com/browse/track/49499237',
      deezer: 'https://www.deezer.com/sk/album/10906922',
      youtube: 'https://youtu.be/9GgrisJSkas?feature=shared',
    },
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
