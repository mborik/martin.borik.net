import { usePlayerStore, Episode as EpisodeData } from '@/lib/player';
import Image from 'next/image';
import React from 'react';

interface FigureEpisodeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  season?: number;
  episode: number;
  imgClass?: string;
}

export const FigureEpisodeLogo = ({
  children,
  season: SEASON = 1,
  episode: EPISODE,
  imgClass,
  ...props
}: FigureEpisodeLogoProps) => {
  const { currentList, isInitialized } = usePlayerStore();

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
      <figure className={imgClass}>
        <Image
          src={episode.image?.url}
          width={320}
          height={320}
          alt={episode.baseTitle}
        />
      </figure>
      {children}
    </div>
  ) : (
    <></>
  );
};
