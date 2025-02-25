import * as React from 'react';

interface RampGradientProps extends React.SVGAttributes<SVGElement> {
  flip?: boolean;
}

export const RampGradient: React.FC<RampGradientProps> = ({
  flip = false,
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
        <path d={flip ? 'M0 200V0H4000L0 200Z' : 'M4000 0v200H0L4000 0Z'} />
        <defs>
          <radialGradient
            id='to-light'
            cx='50%'
            cy='100%'
            r='150%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stopColor='#33363a' />
            <stop offset='100%' stopColor='#41484e' />
          </radialGradient>
          <radialGradient
            id='to-dark'
            cx='50%'
            cy='100%'
            r='150%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stopColor='#1d2124' />
            <stop offset='100%' stopColor='#171a1d' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
