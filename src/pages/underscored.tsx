import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getSingle } from '@/content';

export default function Underscored() {
  const single = getSingle('underscored');
  if (!single) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Underscored'
        date={single.releaseDateISO}
        image={single.imagePath}
        single
      />
      <Section.Release {...single} isSingle>
        <h2>Underscored</h2>
        <h4 className='-mt-8'>
          <mark>Liquid unhappy</mark>
        </h4>
        <p>
          Liquid drum&apos;n&apos;bass cinematic piece, accompanied by an edited
          monologue of the debate that introduces <b>The Last of Us</b> series
          on HBO (Max) with voice of John Hannah. I was very moved by the
          message of this debate and decided to incorporate this dystopian
          vision into this, my toughest musical creation.
        </p>
        <blockquote className='order-9'>
          <p>
            The song also exists in a <b>Slovak version</b>, where the character
            was dubbed by voice-actor <b>Peter Sklár</b>. You can watch it{' '}
            <a
              href='https://youtu.be/jX8ipXInjNA?feature=shared'
              target='_blank'
              rel='noreferrer'
            >
              <mark className='font-bold'>on YouTube</mark>
            </a>
            .
          </p>
        </blockquote>
      </Section.Release>
      <Section.Contact showSocials={false} />
    </>
  );
}
