import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import {
  AiFillAudio,
  AiFillBackward,
  AiOutlineForward,
  AiOutlineRead,
} from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import {
  MdPause,
  MdPlayArrow,
  MdStop,
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md';

import { config } from '@/lib/config';
import { formatTime } from '@/lib/formatTime';
import { HOWLER_STATE, usePlayerStore } from '@/lib/player';

import { SoundRange } from './SoundRange';
import { TrackRange } from './TrackRange';

type PlayerProps = {
  duration: number;
  values: number[];
  onTrackRangeChange: (_values: number[]) => void;
};
export const Player = ({
  duration,
  values,
  onTrackRangeChange,
}: PlayerProps) => {
  const router = useRouter();
  const {
    currentEpisode: episode,
    viewedEpisode,
    isLoaded,
    isMute,
    isPlaying,
    playNextEpisode,
    playPrevEpisode,
    setCurrentEpisode,
    getNextViewEpisode,
    getPrevViewEpisode,
    handleVolumeRange,
    stop,
    toggleMute,
    togglePlay,
  } = usePlayerStore();

  return (
    <div className={`player${episode ? ' active' : ''}`}>
      <div className='player-header'>
        <div className='player-header-title'>
          {episode && (
            <div>
              <div className='text-sm line-clamp-1'>{episode.title}</div>
              <div className='text-xs text-white-400'>
                {config.siteName} #{episode.episode}
              </div>
            </div>
          )}
        </div>
        <div className='player-header-volumebar'>
          {isMute ? (
            <button type='button' onClick={toggleMute}>
              <MdVolumeOff className='icon' />
            </button>
          ) : (
            <button type='button' onClick={toggleMute}>
              <MdVolumeMute className='icon' />
            </button>
          )}
          <div className='w-full'>
            <SoundRange />
          </div>
          <button type='button' onClick={() => handleVolumeRange([1])}>
            <MdVolumeUp className='icon' />
          </button>
        </div>
      </div>
      <div className='player-controls'>
        {viewedEpisode ? (
          episode?.guid === viewedEpisode?.guid ? (
            <button
              onClick={() => {
                const nextEp = getPrevViewEpisode();
                nextEp?.slug && router.push(`/${nextEp.slug}`);
              }}
              className='action-button'
            >
              <AiFillBackward className='icon' />
              <span>čítať predošlú</span>
            </button>
          ) : (
            <button
              onClick={() => setCurrentEpisode(viewedEpisode, true)}
              className='action-button'
            >
              <AiFillAudio className='icon md:hidden' />
              <span>prehrať túto epizódu</span>
            </button>
          )
        ) : (
          <>
            {episode?.hasArticle && (
              <button
                onClick={() => episode?.slug && router.push(`/${episode.slug}`)}
                title='Prejsť na stránku epizódy'
              >
                <AiOutlineRead className='bigger-icon' />
              </button>
            )}
            <button onClick={playPrevEpisode} title='Predošlá epizóda'>
              <AiFillBackward className='bigger-icon' />
            </button>
          </>
        )}
        {isLoaded !== HOWLER_STATE.LOADED && !isPlaying ? (
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={togglePlay}
            className='play-button'
          >
            <MdPlayArrow className='icon' />
          </motion.button>
        ) : isLoaded !== HOWLER_STATE.LOADED ? (
          <button disabled className='play-button'>
            <BiLoaderAlt className='spinner' />
          </button>
        ) : !isPlaying ? (
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={togglePlay}
            className='play-button'
          >
            <MdPlayArrow className='icon' />
          </motion.button>
        ) : (
          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 1.1 }}
            className='play-button'
          >
            <MdPause className='icon' />
          </motion.button>
        )}
        {viewedEpisode ? (
          <button
            onClick={() => {
              const nextEp = getNextViewEpisode();
              nextEp?.slug && router.push(`/${nextEp.slug}`);
            }}
            className='action-button'
          >
            <span>čítať nasledujúcu</span>
            <AiOutlineForward className='icon' />
          </button>
        ) : (
          <>
            <button onClick={playNextEpisode}>
              <AiOutlineForward
                className='bigger-icon'
                title='Nasledujúca epizóda'
              />
            </button>
            <button onClick={stop}>
              <MdStop className='bigger-icon' title='Zavrieť prehrávač' />
            </button>
          </>
        )}
      </div>
      {isLoaded !== HOWLER_STATE.LOADED ? (
        <div className='h-10' />
      ) : (
        <div className='player-trackbar'>
          <div className='time'>{formatTime(values[0])}</div>
          <div className='mx-auto w-full'>
            <TrackRange
              duration={duration}
              onChange={onTrackRangeChange}
              values={values}
            />
          </div>
          <div className='time'>{formatTime(duration)}</div>
        </div>
      )}
    </div>
  );
};
