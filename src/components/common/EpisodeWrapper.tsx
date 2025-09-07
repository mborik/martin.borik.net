import * as React from 'react';

import { Article } from '../layout/Article';
import { Seo, Related } from '@/components/common';
import { config } from '@/lib/config';
import { Episode as EpisodeType, usePlayerStore } from '@/lib/player';

export type EpisodeData = EpisodeType & {
  date: Date;
  title: string;
  descPlainText: string;
};

type EpisodeWrapperProps = {
  children: React.ReactNode;
  season?: number;
  episode: number;
};

export const EpisodeWrapper = ({
  season: SEASON = 1,
  episode: EPISODE,
  children,
}: EpisodeWrapperProps) => {
  const { init, isInitialized, isPlaying, currentList, setCurrentEpisode } =
    usePlayerStore();

  React.useEffect(() => {
    isInitialized == null && init();
    document.documentElement.className = 'episode';
  }, []);

  const episode = React.useMemo<EpisodeData | void>(() => {
    if (!isInitialized || !currentList?.length) return;
    const currentEpisode = currentList?.find(
      (ep) => ep.season === SEASON && ep.episode === EPISODE,
    );
    if (!currentEpisode) return;
    const div = document.createElement('div');
    div.innerHTML = currentEpisode.description;
    return {
      ...currentEpisode,
      date: new Date(currentEpisode.pubDate),
      descPlainText: div.textContent || div.innerText,
      title: currentEpisode.baseTitle,
    };
  }, [isInitialized, currentList]);

  React.useEffect(() => {
    if (!isPlaying) {
      setCurrentEpisode(episode as EpisodeType, false);
    }
  }, [isPlaying, episode]);

  return episode ? (
    <>
      <Seo
        type='article'
        title={`${config.siteName} #${episode.episode}: ${episode.title}`}
        image={episode.image?.url}
        date={episode.date}
        description={episode.descPlainText}
        templateTitle={`${episode.title}`}
      />
      <Article>
        <h1>
          {config.siteName} #{episode.episode}
        </h1>
        <article>{children}</article>
        <Related episode={episode} />
      </Article>
    </>
  ) : (
    <></>
  );
};
