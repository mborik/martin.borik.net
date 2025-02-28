import React from 'react';
import ReactHowler from 'react-howler';

import { useHolwer } from '@/lib/hooks/useHolwer';
import { usePlayerStore } from '@/lib/player';

import { Player } from './Player';

export const PlayerHowler = () => {
  const { isPlaying, isMute, currentEpisode, volume } = usePlayerStore();
  const { duration, handleTrackRange, soundRef, onLoad, onEnd, seek } =
    useHolwer();

  React.useEffect(() => {
    const unsubscribeEpisodeChange = usePlayerStore.subscribe(
      ({ currentList, currentEpisode }, { currentEpisode: prevEpisode }) => {
        if (currentEpisode === prevEpisode) {
          return;
        }
        if (localStorage) {
          if (currentEpisode) {
            localStorage.setItem('current-episode', currentEpisode.guid);
          } else {
            localStorage.removeItem('current-episode');
          }
          if (currentList?.length) {
            localStorage.setItem(
              'number-of-episodes',
              currentList.length.toString(),
            );
          }
        }
      },
    );
    return () => {
      unsubscribeEpisodeChange();
    };
  }, []);

  return (
    <>
      {currentEpisode?.enclosure && (
        <ReactHowler
          format={['mp3']}
          src={currentEpisode.enclosure.url}
          playing={isPlaying}
          ref={soundRef}
          onLoad={onLoad}
          mute={isMute}
          volume={volume[0]}
          onEnd={onEnd}
          preload={false}
        />
      )}
      <Player
        values={seek}
        onTrackRangeChange={handleTrackRange}
        duration={duration}
      />
    </>
  );
};
