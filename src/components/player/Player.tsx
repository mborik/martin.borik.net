import { motion } from 'framer-motion';
import React from 'react';
import {
  AiFillBackward,
  AiFillStepBackward,
  AiOutlineForward,
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
  const {
    currentEpisode: episode,
    handleVolumeRange,
    isLoaded,
    isMute,
    isPlaying,
    playFromStart,
    playNextEpisode,
    playPrevEpisode,
    stop,
    toggleMute,
    togglePlay,
  } = usePlayerStore();

  return episode ? (
    <div className='glow fixed top-0 left-0 right-0 mx-auto max-w-full flex-col gap-4 rounded-b-md pb-10 lg:px-12'>
      <div className='flex items-start justify-between p-4 pb-1 gap-3'>
        <div className='flex items-center overflow-hidden'>
          <div>
            <div className='text-sm line-clamp-1'>{episode.title}</div>
            <div className='text-xs text-white-400'>
              {config.siteName} #{episode.episode}
            </div>
          </div>
        </div>
        <div className='flex w-1/4 md:w-60 min-w-32 items-center justify-around gap-2'>
          {isMute ? (
            <button type='button' onClick={toggleMute}>
              <MdVolumeOff className='h-5 w-5 text-white/60' />
            </button>
          ) : (
            <button type='button' onClick={toggleMute}>
              <MdVolumeMute className='h-5 w-5 text-white/60' />
            </button>
          )}
          <div className='w-full'>
            <SoundRange />
          </div>
          <button type='button' onClick={() => handleVolumeRange([1])}>
            <MdVolumeUp className='h-5 w-5 text-white/60' />
          </button>
        </div>
      </div>
      <div className='z-50 flex items-center justify-center gap-8'>
        <button onClick={playFromStart}>
          <AiFillStepBackward className='h-7 w-7' />
        </button>
        <button onClick={playNextEpisode}>
          <AiFillBackward className='h-7 w-7' />
        </button>
        {isLoaded !== HOWLER_STATE.LOADED && !isPlaying ? (
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={togglePlay}
            className='rounded-full bg-gradient-to-tr from-secondary-800 to-accent-800 shadow-black/60 shadow-md p-2'
          >
            <MdPlayArrow className='h-6 w-6 text-primary-light' />
          </motion.button>
        ) : isLoaded !== HOWLER_STATE.LOADED ? (
          <button
            disabled
            className='rounded-full bg-gradient-to-tr from-secondary-800 to-accent-800 shadow-black/60 shadow-md p-2 disabled:bg-opacity-50'
          >
            <BiLoaderAlt className='h-6 w-6 animate-spin p-1 text-primary-light/70 duration-500' />
          </button>
        ) : !isPlaying ? (
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={togglePlay}
            className='rounded-full bg-gradient-to-tr from-secondary-800 to-accent-800 shadow-black/60 shadow-md p-2'
          >
            <MdPlayArrow className='h-6 w-6 text-primary-light' />
          </motion.button>
        ) : (
          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 1.1 }}
            className='rounded-full bg-gradient-to-tr from-secondary-800 to-accent-800 shadow-black/60 shadow-md p-2'
          >
            <MdPause className='h-6 w-6 text-primary-light' />
          </motion.button>
        )}
        <button onClick={playPrevEpisode}>
          <AiOutlineForward className='h-7 w-7' />
        </button>
        <button onClick={stop}>
          <MdStop className='h-7 w-7' />
        </button>
      </div>
      {isLoaded !== HOWLER_STATE.LOADED ? (
        <div className='h-6' />
      ) : (
        <div className='flex flex-row gap-4 mx-auto w-1/2 min-w-80 py-3 items-center'>
          <div className='text-xs tabular-nums'>{formatTime(values[0])}</div>
          <div className='mx-auto w-full'>
            <TrackRange
              duration={duration}
              onChange={onTrackRangeChange}
              values={values}
            />
          </div>
          <div className='text-xs tabular-nums'>{formatTime(duration)}</div>
        </div>
      )}
    </div>
  ) : null;
};
