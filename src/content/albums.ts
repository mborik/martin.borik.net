import { Card } from '@/components/layout/PortfolioCards';

export const albums: Card[] = [
  {
    id: 'elara',
    title: 'Elara and Echoes of Destiny',
    href: '/elara',
    imagePath: '/images/covers/elara.jpg',
    badges: ['cinematic', 'orchestral', 'epic'],
  },
  {
    id: 'neobios',
    title: 'Neobios',
    href: '/neobios',
    imagePath: '/images/covers/neobios.jpg',
    badges: ['newage', 'ambient', 'electronic'],
  },
  {
    id: 'umbra-linea',
    title: 'Umbra Linea',
    href: '/umbra-linea',
    imagePath: '/images/covers/umbra_linea.jpg',
    badges: ['newage', 'orchestral', 'alternative rock'],
  },
  {
    id: 'chilled',
    title: 'Chilled',
    href: '/chilled',
    imagePath: '/images/covers/chilled.jpg',
    badges: ['progressive', 'jazz-rock', 'electronic', 'opus'],
  },
];
