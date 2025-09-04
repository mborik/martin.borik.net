import * as React from 'react';

import { usePlayerStore } from '@/lib/player';
import Link from 'next/link';

type EpisodeProps = {
  season?: number;
  episode: number;
  children: React.ReactNode;
};

export const EpisodeLink = ({
  season: SEASON = 1,
  episode: EPISODE,
  children,
}: EpisodeProps) => {
  const { currentList, isInitialized } = usePlayerStore();

  const episode: any = React.useMemo(() => {
    if (!isInitialized || !currentList?.length) return {};
    const episode = currentList?.find(
      (ep) => ep.season === SEASON && ep.episode === EPISODE,
    );
    if (!episode) return {};
    return {
      number: episode.episode,
      title: episode.baseTitle,
      slug: episode.slug,
    };
  }, [isInitialized, currentList]);

  return (
    <Link
      href={`/${episode.slug}`}
      title={`#${episode.number}: ${episode.title}`}
    >
      {children}
    </Link>
  );
};
