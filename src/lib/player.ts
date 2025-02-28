import { Episode } from 'podparse';
import getPodcastFromFeed from 'podparse';
import { create } from 'zustand';

import { config } from '@/lib/config';

export const enum HOWLER_STATE {
  UNLOADED = 'unloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
}
type PlayerState = {
  currentEpisode: Episode | null;
  currentList: Episode[] | null;
  volume: number[];
  isInitialized: boolean | null;
  isLoaded: HOWLER_STATE;
  isPlaying: boolean;
  isMute: boolean;
  handleVolumeRange: (_values: number[]) => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setCurrentEpisode: (_song: Episode, _isPlaying: boolean) => void;
  playFromStart: () => void;
  playNextEpisode: () => void;
  playPrevEpisode: () => void;
  setLoaded: (_isLoaded: HOWLER_STATE) => void;
  stop: () => void;
  init: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentEpisode: null,
  currentList: null,
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
  setLoaded: (isLoaded) => set(() => ({ isLoaded })),
  playFromStart: () => {
    set((state) => {
      const currentList = state.currentList;
      if (!currentList) return { currentEpisode: null, isPlaying: false };
      return {
        currentEpisode: currentList[currentList.length - 1],
        isPlaying: true,
      };
    });
  },
  playNextEpisode: () => {
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
  playPrevEpisode: () => {
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
  init: () => {
    set((state) => {
      if (state.isInitialized === null) {
        fetch(config.podcastFeed)
          .then((response) => response.text())
          .then((podcastFeed) => {
            const { episodes } = getPodcastFromFeed(podcastFeed);
            let propsToSet: any = {
              currentList: episodes,
              isInitialized: true,
            };
            if (localStorage) {
              const lastPlayedEpisode = localStorage.getItem('current-episode');
              const lastNumberOfEpisodes =
                parseInt(
                  localStorage.getItem('number-of-episodes') as string,
                ) || 0;
              if (episodes.length > 0) {
                // enforce to play latest episode if there are some new ones
                if (
                  lastNumberOfEpisodes > 1 &&
                  lastNumberOfEpisodes < episodes.length
                ) {
                  propsToSet = {
                    ...propsToSet,
                    currentEpisode: episodes[0],
                    isPlaying: false,
                  };
                  // else select last played episode
                } else if (lastPlayedEpisode) {
                  const lastPlayed = episodes.find(
                    (ep) => ep.guid === lastPlayedEpisode,
                  );
                  if (lastPlayed) {
                    propsToSet = {
                      ...propsToSet,
                      currentEpisode: lastPlayed,
                      isPlaying: false,
                    };
                  }
                }
              }
            }
            set(() => propsToSet);
          });
        return { isInitialized: false };
      }
      return state;
    });
  },
}));
