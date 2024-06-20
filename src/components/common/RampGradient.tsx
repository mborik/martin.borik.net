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
            cx='0'
            cy='0'
            r='1.25'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(50vw 200)'
          >
            <stop offset='0' stop-color='#41484e' />
            <stop offset='1' stop-color='#33363a' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
