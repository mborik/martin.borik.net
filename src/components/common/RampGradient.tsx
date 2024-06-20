import * as React from 'react';

export const RampGradient: React.FC<React.SVGAttributes<SVGElement>> = ({
  ...props
}) => {
  return (
    <div className='RampGradient'>
      <svg
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 4000 200'
        {...props}
      >
        <path d='M4000 0v200H0L4000 0Z' />
        <defs>
          <radialGradient
            id='to-light'
            cx='50%'
            cy='100%'
            r='150%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stop-color='#33363a' />
            <stop offset='100%' stop-color='#41484e' />
          </radialGradient>
          <radialGradient
            id='to-dark'
            cx='50%'
            cy='100%'
            r='150%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stop-color='#1d2124' />
            <stop offset='100%' stop-color='#171a1d' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
