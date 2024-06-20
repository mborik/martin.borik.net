import { Button } from '@headlessui/react';
import * as React from 'react';

import { ArrowRight } from '@/components/common/icons/ArrowRight';
import { RampGradient } from '@/components/common/RampGradient';

export const Hero = () => {
  return (
    <section id='hero'>
      <div className='SectionHeroCopy'>
        <h1>
          <mark>composer</mark> and <mark>music&nbsp;producer</mark>{' '}
          from&nbsp;Slovakia
        </h1>
        <p>
          <b>Martin Bórik</b> is a cinematic music composer and electronic music
          producer
          <br />
          who aims to cover a broad range of musical genres, making him a
          versatile
          <br />
          composer you can choose to score an epic video-game soundtrack,
          <br />a commercial background music, a film sequence, or a TV show.
        </p>
        <Button className='ButtonPrimary'>
          <div className='anchor'>
            Check out my Portfolio
            <ArrowRight className='size-6 flex-none' aria-hidden='true' />
          </div>
        </Button>
      </div>
      <RampGradient fill='url(#to-light)' />
    </section>
  );
};
