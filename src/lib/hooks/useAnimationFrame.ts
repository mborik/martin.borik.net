import { useCallback, useEffect, useRef } from 'react';

export const useAnimationFrame = ({
  nextAnimationFrameHandler,
  duration = Number.POSITIVE_INFINITY,
  shouldAnimate = true,
}: {
  nextAnimationFrameHandler: (_timeFraction: number) => void;
  duration?: number;
  shouldAnimate: boolean;
}) => {
  const frame = useRef(0);
  // keep track of when animation is started
  const firstFrameTime = useRef(performance.now());

  const animate = useCallback(
    (now: number) => {
      // calculate at what time fraction we are currently of whole time of animation
      let timeFraction = (now - firstFrameTime.current) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }

      if (timeFraction <= 1) {
        nextAnimationFrameHandler(timeFraction);

        // request next frame only in cases when we not reached 100% of duration
        if (timeFraction != 1) frame.current = requestAnimationFrame(animate);
      }
    },
    [duration, nextAnimationFrameHandler]
  );

  useEffect(() => {
    if (shouldAnimate) {
      firstFrameTime.current = performance.now();
      frame.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(frame.current);
    }

    return () => cancelAnimationFrame(frame.current);
  }, [shouldAnimate, animate]);
};
