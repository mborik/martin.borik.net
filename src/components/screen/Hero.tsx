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
          <b>Martin&nbsp;Bórik</b> is a&nbsp;cinematic music composer
          and&nbsp;electronic music producer who aims to&nbsp;cover a&nbsp;broad
          range of musical genres, making him a&nbsp;versatile composer you can
          choose to&nbsp;score an&nbsp;epic video-game soundtrack,
          a&nbsp;commercial background music, a&nbsp;film sequence,
          or&nbsp;a&nbsp;TV show.
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
