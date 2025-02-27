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
  currentScreen: 'main' | 'playing';
  volume: number[];
  isInitialized: boolean | null;
  isLoaded: HOWLER_STATE;
  isPlayListShown: boolean;
  isPlaying: boolean;
  isRepeating: boolean;
  isMute: boolean;
  isShuffle: boolean;
  handleVolumeRange: (_values: number[]) => void;
  togglePlay: () => void;
  toggleRepeat: () => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleList: () => void;
  toggleScreen: (_screen: 'main' | 'playing') => void;
  setCurrentEpisode: (_song: Episode, _isPlaying: boolean) => void;
  setCurrentList: (_list: Episode[]) => void;
  playNextSong: () => void;
  playPrevSong: () => void;
  setLoaded: (_isLoaded: HOWLER_STATE) => void;
  init: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentEpisode: null,
  currentList: null,
  isPlaying: false,
  isRepeating: false,
  isMute: false,
  isShuffle: false,
  isPlayListShown: false,
  isInitialized: null,
  isLoaded: HOWLER_STATE.UNLOADED,
  currentScreen: 'main',
  volume: [1],
  handleVolumeRange: (values) => set(() => ({ volume: values })),
  toggleMute: () => set((state) => ({ isMute: !state.isMute })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleRepeat: () => set((state) => ({ isRepeating: !state.isRepeating })),
  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  toggleScreen: (screen) => set(() => ({ currentScreen: screen })),
  setCurrentEpisode: (currentEpisode, isPlaying) => {
    if (localStorage) {
      localStorage.setItem('current-episode', currentEpisode.guid);
    }
    set(() => ({ currentEpisode, isPlaying }));
  },
  setLoaded: (isLoaded) => set(() => ({ isLoaded })),
  setCurrentList: (list) => set(() => ({ currentList: list })),
  toggleList: () =>
    set((state) => ({ isPlayListShown: !state.isPlayListShown })),
  playNextSong: () => {
    set((state) => {
      const currentList = state.currentList;
      if (!currentList) return { currentEpisode: null, isPlaying: false };

      const index = currentList.findIndex(
        (ep) => ep.guid === state.currentEpisode?.guid,
      );

      const isShuffle = state.isShuffle;
      if (isShuffle) {
        const nextIndex = Math.floor(Math.random() * currentList.length);

        if (nextIndex === index) {
          state.playNextSong();
        }

        return {
          currentEpisode: currentList[nextIndex],
          isPlaying: true,
        };
      }

      return {
        currentEpisode:
          index !== currentList.length - 1
            ? currentList[index + 1]
            : currentList[0],
        isPlaying: true,
      };
    });
  },
  playPrevSong: () => {
    set((state) => {
      const currentList = state.currentList;
      if (!currentList) return { currentEpisode: null, isPlaying: false };

      const index = currentList.findIndex(
        (ep) => ep.guid === state.currentEpisode?.guid,
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
        fetch(config.podcastFeed)
          .then((response) => response.text())
          .then((podcastFeed) => {
            const { episodes } = getPodcastFromFeed(podcastFeed);
            let propsToSet: any = {
              currentList: episodes,
              isInitialized: true,
            };
            const lastPlayedEpisode =
              localStorage && localStorage.getItem('current-episode');
            if (lastPlayedEpisode && episodes.length) {
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
            set(() => propsToSet);
          });
        return { isInitialized: false };
      }
      return state;
    });
  },
}));
