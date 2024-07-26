import * as React from 'react';

import { RampGradient } from '@/components/common';

export const Hero = () => {
  return (
    <section id='hero'>
      <div className='SectionHeroCopy'>
        <h1>
          <mark>composer</mark> and <mark>music&nbsp;producer</mark>{' '}
          from&nbsp;Slovakia
        </h1>
        <p>
          <b>Martin&nbsp;Bórik</b> is a&nbsp;cinematic music composer
          and&nbsp;electronic music producer who aims to&nbsp;cover a&nbsp;broad
          range of&nbsp;musical genres, making him a&nbsp;versatile composer you
          can choose to&nbsp;score an&nbsp;epic video-game soundtrack,
          a&nbsp;commercial background music, a&nbsp;film sequence,
          or&nbsp;a&nbsp;TV&nbsp;show.
        </p>
        {/* TODO
        <Button className='ButtonPrimary'>
          <div className='anchor'>
            Check out my Portfolio
            <ArrowRight className='size-6 flex-none' aria-hidden='true' />
          </div>
        </Button> */}
      </div>
      <RampGradient fill='url(#to-light)' />
    </section>
  );
};
