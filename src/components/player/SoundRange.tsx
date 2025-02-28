import { Range } from 'react-range';

import { usePlayerStore } from '@/lib/player';

import { RangeThumb, RangeTrack } from '@/components/common/range';

export const SoundRange = () => {
  const { handleVolumeRange, volume } = usePlayerStore();
  return (
    <Range
      key='sound-range'
      step={0.05}
      min={0}
      max={1}
      values={volume}
      onChange={handleVolumeRange}
      renderTrack={({ props, children, isDragged, disabled }) => (
        <RangeTrack
          key='sound-range'
          isDragged={isDragged}
          disabled={disabled}
          props={props}
          values={volume}
          max={1}
        >
          {children}
        </RangeTrack>
      )}
      renderThumb={({ props }) => (
        <RangeThumb props={props} key='sound-range' />
      )}
    />
  );
};
