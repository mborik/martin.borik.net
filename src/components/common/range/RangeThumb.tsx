import { IThumbProps } from 'react-range/lib/types';

export const RangeThumb = ({ props }: { props: IThumbProps }) => {
  return (
    <div
      {...props}
      key={`thumb-${props.key}`}
      className='h-3 w-3 items-center justify-center rounded-full bg-black/90 shadow-lg'
    />
  );
};
