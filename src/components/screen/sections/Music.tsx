import * as React from 'react';

import { RampGradient } from '@/components/common';
import { PortfolioCards } from '@/components/layout/PortfolioCards';

import { albums, singles } from '@/content';

export const Music = () => {
  return (
    <section id='music'>
      <a id='music' aria-hidden='true' />
      <div className='SectionMusicWrapper'>
        <h2 className='self-end'>discography</h2>
        <h3 className='lg:-mt-8'>
          <mark>LPs and EPs</mark>
        </h3>
        <PortfolioCards list={albums.slice(0, 4)} />
        <h3>
          <mark>singles</mark>
        </h3>
        <PortfolioCards list={singles.slice(0, 4)} />
      </div>
      <RampGradient fill='url(#to-light)' />
    </section>
  );
};
