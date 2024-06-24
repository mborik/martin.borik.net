import * as React from 'react';

export const Close: React.FC<React.SVGAttributes<SVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      stroke='currentColor'
      {...props}
    >
      <path
        d='M17 7 7 17M7 7l10 10'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
