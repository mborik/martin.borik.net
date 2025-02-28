import KofiButton from 'kofi-button';
import Image from 'next/image';
import * as React from 'react';

import { ScrollToTop } from '@/components/common';
import {
  ChevronUp,
  SocialAppleMusic,
  SocialSpotify,
  SocialYouTube,
} from '@/components/common/icons';
import { ListTable } from '@/components/player';

export const Podcast = () => {
  return (
    <section id='podcast'>
      <ScrollToTop smooth>
        <ChevronUp className='size-8 flex-none' />
      </ScrollToTop>
      <div className='Hero'>
        <Image
          src='/images/logo_transparent.png'
          alt='Zapečené procesory'
          width={254}
          height={283}
          className='mb-4'
        />
        <h4>
          Populárno-náučný podcast <br />
          o&nbsp;histórii výpočtovej techniky <br />
          a&nbsp;príbehoch technológií, <br />
          ktoré zmenili svet.
        </h4>
        <h5 className='w-80'>
          Som <b>Martin&nbsp;Bórik</b> a&nbsp;budem Váš sprievodca v&nbsp;tomto
          stroji času.
        </h5>
        <div className='socials my-4 flex flex-row gap-4'>
          <a
            title='Spotify Podcasts'
            href='https://open.spotify.com/show/521QTtxKzPPP1gWKTtB2gY'
            target='_blank'
            rel='noreferrer'
            className='LinkBtn'
          >
            <SocialSpotify />
          </a>
          <a
            title='Apple Podcasts'
            href='https://podcasts.apple.com/us/podcast/zape%C4%8Den%C3%A9-procesory/id1773195594'
            target='_blank'
            rel='noreferrer'
            className='LinkBtn'
          >
            <SocialAppleMusic />
          </a>
          <a
            title='YouTube Podcast'
            href='https://youtube.com/playlist?list=PLx2Nc0zFeia4E4cHihecd5wNhRtw__7wP&feature=shared'
            target='_blank'
            rel='noreferrer'
            className='LinkBtn'
          >
            <SocialYouTube />
          </a>
        </div>
        <KofiButton
          color='#e84e57'
          title=' Podporte podcast'
          kofiID='J3J714IUF2'
        />
        <ListTable />
      </div>
    </section>
  );
};
