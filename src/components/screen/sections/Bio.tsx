import Image from 'next/image';
import * as React from 'react';

import { RampGradient } from '@/components/common';

import { bio_me_png_blurred, bio_studio_png_blurred } from '@/content';

export const Bio = () => {
  return (
    <section id='bio' className='min-h-160'>
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
          <picture>
            <source
              srcSet='/images/bio_me_lo.webp'
              type='image/webp'
              media='(max-width: 640px)'
            />
            <source srcSet='/images/bio_me.webp' type='image/webp' />
            <source srcSet='/images/bio_me.png' type='image/png' />
            <Image
              src='/images/bio_me.png'
              alt='profile photo'
              width={428}
              height={212}
              placeholder='blur'
              blurDataURL={bio_me_png_blurred}
            />
          </picture>
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
          <picture>
            <source
              srcSet='/images/bio_studio_lo.webp'
              type='image/webp'
              media='(max-width: 640px)'
            />
            <source srcSet='/images/bio_studio.webp' type='image/webp' />
            <source srcSet='/images/bio_studio.png' type='image/png' />
            <Image
              src='/images/bio_studio.png'
              alt='studio workspace'
              width={428}
              height={212}
              placeholder='blur'
              blurDataURL={bio_studio_png_blurred}
            />
          </picture>
        </div>
      </div>
      <RampGradient fill='url(#to-dark)' />
    </section>
  );
};
