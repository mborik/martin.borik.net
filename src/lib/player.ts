import { Episode as PodparseEpisode } from 'podparse';
import getPodcastFromFeed from 'podparse';
import { create } from 'zustand';

import { config } from './config';
import { episodeDetailsAndLinks } from './episodeDetailsAndLinks';
import cachedFeedData from '../ssr/podcast-feed-cache';

export const enum HOWLER_STATE {
  UNLOADED = 'unloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
}
export type Episode = PodparseEpisode & {
  shortId: number;
  related: number[];
  baseTitle: string;
  hasArticle?: boolean;
  slug: string;
};
type PlayerState = {
  currentEpisode: Episode | null;
  viewedEpisode: Episode | null;
  currentList: Episode[] | null;
  volume: number[];
  isInitialized: boolean | null;
  isLoaded: HOWLER_STATE;
  isPlaying: boolean;
  isMute: boolean;
  handleVolumeRange: (_values: number[]) => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setCurrentEpisode: (_ep: Episode, _isPlaying: boolean) => void;
  setViewedEpisode: (_ep: Episode | null, _force?: boolean) => void;
  getNextViewEpisode: () => Episode | null;
  getPrevViewEpisode: () => Episode | null;
  playNextEpisode: () => void;
  playPrevEpisode: () => void;
  setLoaded: (_isLoaded: HOWLER_STATE) => void;
  stop: () => void;
  init: () => void;
};

export type FetchPodcastResponse = {
  currentList: Episode[];
  isInitialized: boolean;
};
export const fetchPodcast = async (): Promise<FetchPodcastResponse> => {
  const response = await fetch(config.podcastFeed);
  const podcastFeed = await response.text();
  const { episodes: episodesFromFeed } = getPodcastFromFeed(podcastFeed);
  const episodes = episodesFromFeed.map((episode) => {
    const detailsAndLinks = episodeDetailsAndLinks.find(
      (link) =>
        link.episode === episode.episode && link.season === episode.season,
    );
    return {
      ...episode,
      shortId: parseInt(
        `${episode.season}${('0' + episode.episode).slice(-2)}`,
      ),
      ...detailsAndLinks,
    } as Episode;
  });
  episodes.sort((a, b) => {
    if (a.shortId > b.shortId) return 1;
    if (a.shortId < b.shortId) return -1;
    return 0;
  });
  return {
    currentList: episodes,
    isInitialized: true,
  };
};

const enrichDataWithLocalStorage = (input: FetchPodcastResponse) => {
  if (
    typeof window !== 'undefined' &&
    window.localStorage &&
    input.currentList
  ) {
    const lastPlayedEpisode = window.localStorage.getItem('current-episode');
    const lastNumberOfEpisodes =
      parseInt(window.localStorage.getItem('number-of-episodes') as string) ||
      0;
    const { currentList: episodes } = input;
    if (episodes.length > 0) {
      // enforce to play latest episode if there are some new ones
      if (lastNumberOfEpisodes > 1 && lastNumberOfEpisodes < episodes.length) {
        return {
          ...input,
          currentEpisode: episodes[0],
          isPlaying: false,
        };
        // else select last played episode
      } else if (lastPlayedEpisode) {
        const lastPlayed = episodes.find((ep) => ep.guid === lastPlayedEpisode);
        if (lastPlayed) {
          return {
            ...input,
            currentEpisode: lastPlayed,
            isPlaying: false,
          };
        }
      }
    }
  }
  return input;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentList: null,
  ...(cachedFeedData as any),
  currentEpisode: null,
  viewedEpisode: null,
  isPlaying: false,
  isMute: false,
  isInitialized: null,
  isLoaded: HOWLER_STATE.UNLOADED,
  volume: [1],
  handleVolumeRange: (values) => set(() => ({ volume: values })),
  toggleMute: () => set((state) => ({ isMute: !state.isMute })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  stop: () => set(() => ({ currentEpisode: null, isPlaying: false })),
  setCurrentEpisode: (currentEpisode, isPlaying) =>
    set(() => ({ currentEpisode, isPlaying })),
  setViewedEpisode: (viewedEpisode: Episode | null, force: boolean = false) =>
    set((state) => {
      const result: Partial<PlayerState> = {};
      if (state.viewedEpisode?.guid !== viewedEpisode?.guid) {
        result.viewedEpisode = viewedEpisode;
        if (!state.isPlaying) {
          result.currentEpisode = viewedEpisode;
        }
      } else if (viewedEpisode == null && force) {
        result.viewedEpisode = null;
      }
      return result;
    }),
  setLoaded: (isLoaded) => set(() => ({ isLoaded })),
  getNextViewEpisode() {
    const { viewedEpisode, currentList } = get();
    if (!viewedEpisode || !currentList) return null;
    const index = currentList.findIndex(
      ({ guid }) => guid === viewedEpisode.guid,
    );
    return index < currentList.length - 1
      ? currentList[index + 1]
      : currentList[0];
  },
  getPrevViewEpisode() {
    const { viewedEpisode, currentList } = get();
    if (!viewedEpisode || !currentList) return null;
    const index = currentList.findIndex(
      ({ guid }) => guid === viewedEpisode.guid,
    );
    return index > 0
      ? currentList[index - 1]
      : currentList[currentList.length - 1];
  },
  playNextEpisode: () => {
    set((state) => {
      const currentList = state.currentList;
      if (!currentList) return { currentEpisode: null, isPlaying: false };
      const index = currentList.findIndex(
        ({ guid }) => guid === state.currentEpisode?.guid,
      );
      return {
        currentEpisode:
          index !== currentList.length - 1
            ? currentList[index + 1]
            : currentList[0],
        isPlaying: true,
      };
    });
  },
  playPrevEpisode: () => {
    set((state) => {
      const currentList = state.currentList;
      if (!currentList) return { currentEpisode: null, isPlaying: false };
      const index = currentList.findIndex(
        ({ guid }) => guid === state.currentEpisode?.guid,
      );
      return {
        currentEpisode: index
          ? currentList[index - 1]
          : currentList[currentList.length - 1],
        isPlaying: true,
      };
    });
  },
  init: () => {
    set((state) => {
      if (state.isInitialized === null) {
        fetchPodcast().then((propsToSet) => {
          set(() => enrichDataWithLocalStorage(propsToSet));
        });
        return { isInitialized: false };
      }
      return state;
    });
  },
}));
