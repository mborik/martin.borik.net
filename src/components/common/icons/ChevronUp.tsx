import * as React from 'react';

export const ChevronUp: React.FC<React.SVGAttributes<SVGElement>> = ({
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
        strokeWidth='2'
        d='m17 18-5-5-5 5m10-7-5-5-5 5'
      />
    </svg>
  );
};
