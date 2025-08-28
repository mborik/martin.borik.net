import * as React from 'react';

export const ArrowLeft: React.FC<React.SVGAttributes<SVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19 12H5m0 0 7 7m-7-7 7-7'
      />
    </svg>
  );
};
