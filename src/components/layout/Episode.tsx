import * as React from 'react';

import { Article } from './Article';
import { Seo, Related } from '@/components/common';
import { config } from '@/lib/config';
import { usePlayerStore } from '@/lib/player';

type EpisodeProps = {
  season?: number;
  episode: number;
  children: React.ReactNode;
};

export const Episode = ({
  season: SEASON = 1,
  episode: EPISODE,
  children,
}: EpisodeProps) => {
  const { init, isInitialized, currentList, setCurrentEpisode } =
    usePlayerStore();

  React.useEffect(() => {
    isInitialized == null && init();
    document.documentElement.className = 'episode';
  }, []);

  const episode: any = React.useMemo(() => {
    if (!isInitialized || !currentList?.length) return {};
    const episode = currentList?.find(
      (ep) => ep.season === SEASON && ep.episode === EPISODE,
    );
    if (!episode) return {};
    else {
      setCurrentEpisode(episode, false);
    }
    const div = document.createElement('div');
    div.innerHTML = episode.description;
    return {
      ...episode,
      date: new Date(episode.pubDate),
      descPlainText: div.textContent || div.innerText,
    };
  }, [isInitialized, currentList]);

  return (
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
  );
};
