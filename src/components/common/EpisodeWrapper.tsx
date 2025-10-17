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
  const { init, isInitialized, currentList, setViewedEpisode } =
    usePlayerStore();

  React.useEffect(() => {
    isInitialized == null && init();
    if (typeof window !== 'undefined') {
      window.document.documentElement.className = 'episode';
      window.setTimeout(() => {
        const hash = window.location.hash;
        if (!hash || window.scrollY > 128) return;
        const element = window.document.querySelector(hash);
        if (!element) return;
        const { top: scrollY } = element.getBoundingClientRect();
        window.scrollTo({
          top: scrollY - 128,
          behavior: 'smooth',
        });
      }, 128);
      return () => {
        window.document.documentElement.className = '';
      };
    }
  }, []);

  let episode = React.useMemo<EpisodeData | void>(() => {
    if (!isInitialized || !currentList?.length) return;
    const currentEpisode = currentList?.find(
      (ep) => ep.season === SEASON && ep.episode === EPISODE,
    );
    if (!currentEpisode) return;
    let descPlainText = '';
    if (typeof window !== 'undefined') {
      const div = window.document.createElement('div');
      div.innerHTML = currentEpisode.description;
      descPlainText = div.textContent || div.innerText;
    } else {
      descPlainText = currentEpisode.description.replace(/<[^>]*>?/gm, '');
    }
    return {
      ...currentEpisode,
      date: new Date(currentEpisode.pubDate),
      title: currentEpisode.baseTitle,
      descPlainText,
    };
  }, [isInitialized, currentList]);

  React.useEffect(() => {
    if (isInitialized && episode) {
      setViewedEpisode(episode as EpisodeType);
    }
  }, [isInitialized, episode]);

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
  ) : null;
};
