import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import { HOWLER_STATE, usePlayerStore } from '@/lib/player';

export const useHolwer = () => {
  const {
    currentEpisode,
    handleVolumeRange,
    isRepeating,
    playNextEpisode,
    setLoaded,
    volume,
  } = usePlayerStore();

  const [seek, setSeek] = useState([0]);
  const [duration, setDuration] = useState(0);

  const repeatRef = useRef(isRepeating);

  const soundRef = useRef<ReactHowler | null>(null);
  const loading = (soundRef.current?.howlerState() ??
    HOWLER_STATE.UNLOADED) as HOWLER_STATE;

  useEffect(() => {
    if (!soundRef.current) return;

    setLoaded(loading);
  }, [soundRef, currentEpisode, setLoaded, loading]);
  useEffect(() => {
    repeatRef.current = isRepeating;
  }, [isRepeating]);

  const onLoad = () => {
    if (!soundRef.current) return;

    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };
  const onEnd = () => {
    if (!soundRef.current) return;

    if (repeatRef.current) {
      setSeek([0]);

      soundRef.current.seek(0);
    } else {
      playNextEpisode();
    }
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
