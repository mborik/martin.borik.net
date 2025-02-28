import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import { HOWLER_STATE, usePlayerStore } from '@/lib/player';

export const useHolwer = () => {
  const {
    currentEpisode,
    handleVolumeRange,
    playNextEpisode,
    setLoaded,
    volume,
  } = usePlayerStore();

  const [seek, setSeek] = useState([0]);
  const [duration, setDuration] = useState(0);

  const soundRef = useRef<ReactHowler | null>(null);
  const loading = (soundRef.current?.howlerState() ??
    HOWLER_STATE.UNLOADED) as HOWLER_STATE;

  useEffect(() => {
    if (!soundRef.current) return;

    setLoaded(loading);
  }, [soundRef, currentEpisode, setLoaded, loading]);

  const onLoad = () => {
    if (!soundRef.current) return;

    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };
  const onEnd = () => {
    if (!soundRef.current) return;
    playNextEpisode();
  };
  const handleTrackRange = (values: number[]) => {
    setSeek(values);
    soundRef.current?.seek(values[0]);
  };

  const nextAnimationFrameHandler = () => {
    const seek = soundRef.current?.seek() as number;
    setSeek([seek]);
  };

  useAnimationFrame(() => nextAnimationFrameHandler());
  return {
    volume,
    soundRef,
    seek,
    duration,
    onLoad,
    onEnd,
    handleTrackRange,
    handleVolumeRange,
  };
};
