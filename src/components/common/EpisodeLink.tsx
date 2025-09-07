import * as React from 'react';

import { usePlayerStore } from '@/lib/player';
import Link from 'next/link';

type EpisodeLinkProps = {
  children: React.ReactNode;
  season?: number;
  episode: number;
};

export const EpisodeLink = ({
  children,
  season: SEASON = 1,
  episode: EPISODE,
}: EpisodeLinkProps) => {
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
