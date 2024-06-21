import Image from 'next/image';
import * as React from 'react';

import { RampGradient } from '@/components/common';

import { bio_me_png_blurred, bio_studio_png_blurred } from '@/content';

export const Bio = () => {
  return (
    <section id='bio'>
      <a id='bio' aria-hidden='true' />
      <div className='SectionBioWrapper'>
        <div className='SectionBioLine1'>
          <aside>
            <h2>musical journey</h2>
            <p>
              Started in the late 90s, when&nbsp;I&nbsp;discovered the magic
              of&nbsp;MIDI protocol and started composing my first songs.
            </p>
          </aside>
          <Image
            src='/images/bio_me.png'
            alt='profile photo'
            width={428}
            height={212}
            quality={82}
            placeholder='blur'
            blurDataURL={bio_me_png_blurred}
          />
          <Image
            src='/images/bio_exp.svg'
            alt='20+ years of experience'
            width={212}
            height={212}
            className='frame'
          />
        </div>
        <div className='SectionBioLine2'>
          <aside>
            <h3 className='gradient'>composer & producer</h3>
            <p>
              Have to know the abilities of&nbsp;all musical instruments even if
              I&nbsp;won&apos;t master them. The key is that music comes from my
              mind and heart.
            </p>
          </aside>
          <Image
            src='/images/bio_cnh.svg'
            alt='creativity and heart'
            width={212}
            height={212}
            className='frame order-2 lg:-order-none'
          />
          <Image
            src='/images/bio_studio.png'
            alt='studio workspace'
            width={428}
            height={212}
            quality={82}
            placeholder='blur'
            blurDataURL={bio_studio_png_blurred}
          />
        </div>
      </div>
      <RampGradient fill='url(#to-dark)' />
    </section>
  );
};
