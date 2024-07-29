import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getSingle } from '@/content';

export default function BitcrushOnYou() {
  const single = getSingle('bitcrush-on-you');
  if (!single) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Bitcrush on you'
        date={single.releaseDateISO}
        image={single.imagePath}
        single
      />
      <Section.Album {...single} isSingle>
        <h2>Bitcrush on you</h2>
        <p>
          Commercially tuned track in popular synth-pop / electropop / synthwave
          style with modern vocal. Lyrics by Michal Orlovský.
        </p>
        <blockquote className='order-9 !flex flex-col gap-4'>
          <p>
            Thinking about us, you know what I mean,
            <br />
            Try to understand, what could have been,
            <br />
            Hoping deep inside, not to make a scene,
            <br />
            Together <mark>[...together]</mark>
          </p>
          <p>
            Imagine a day,
            <br />
            When your little hand, continues to mine,
            <br />
            Where the troubled souls, brightly shine,{' '}
            <mark className='text-nowrap'>[...so brightly shine]</mark>
            <br />
            My treasure.
          </p>
          <p>
            <b className='text-white'>CHORUS:</b>
            <br />
            One too many times, not now.
            <br />
            Be in other lives, just how. <br />
            You had given up, that vow. <mark>[...oh oh]</mark>
            <br />
            Bit from you that moment dies, and so.
            <br />
            Listen longingly to her eyes, say no.
            <br />
            Dream of crushing nights, below.{' '}
            <mark className='text-nowrap'>[...deep down below]</mark>
          </p>
          <p>
            Love should never come,
            <br />
            It is not a game, with stakes up high,{' '}
            <mark className='text-nowrap'>[...really high]</mark>
            <br />
            Rules must be followed, and the years go by,
            <br />
            No pressure.
          </p>
          <p>
            I keep asking what if,
            <br />
            As your feeling rots, each day slowly,
            <br />
            Might&apos;ve been perfect, almost holy,
            <br />
            Forever.
          </p>
        </blockquote>
      </Section.Album>
      <Section.Contact showSocials={false} />
    </>
  );
}
