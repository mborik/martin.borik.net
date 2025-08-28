import { usePlayerStore, Episode as EpisodeData } from '@/lib/player';
import Image from 'next/image';
import React from 'react';

interface FigureEpisodeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  season?: number;
  episode: number;
  figureClass?: string;
}

export const FigureEpisodeLogo = ({
  children,
  season: SEASON = 1,
  episode: EPISODE,
  figureClass,
  ...props
}: FigureEpisodeLogoProps) => {
  const { currentList, isInitialized } = usePlayerStore();
  const [isSkeleton, setIsSkeleton] = React.useState(true);

  const episode: any = React.useMemo<EpisodeData | void>(() => {
    if (!isInitialized || !currentList?.length) return;
    const episode = currentList?.find(
      (ep) => ep.season === SEASON && ep.episode === EPISODE,
    );
    return episode;
  }, [isInitialized, currentList]);

  return episode?.image ? (
    <div
      {...props}
      className={`figure-paragraph${props.className ? ` ${props.className}` : ''}`}
    >
      <figure
        className={`${figureClass ?? ''}${isSkeleton ? ' skeleton' : ''}`}
      >
        <Image
          src={episode.image?.url}
          alt={episode.baseTitle}
          width={320}
          height={320}
          onLoad={() => setIsSkeleton(false)}
        />
        {isSkeleton && <div className='skeleton-overlay' />}
      </figure>
      {children}
    </div>
  ) : (
    <></>
  );
};
