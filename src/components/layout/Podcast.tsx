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
          src='/res/logo_transparent.png'
          alt='Zapečené procesory'
          priority
          width={254}
          height={283}
          className='mb-4'
        />
        <h4 className='text-xl'>
          Populárno-náučný podcast <br />
          o&nbsp;histórii výpočtovej techniky <br />
          a&nbsp;príbehoch technológií, <br />
          ktoré zmenili svet.
        </h4>
        <div className='socials'>
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
        <div className='credits'>
          <strong>Podcast vzniká aj vďaka mojim spolupracovníkom:</strong>
          <br />
          <b>zvuk:</b> Robo Gajarský, <b>fact-checking:</b>{' '}
          Martin&nbsp;&quot;Logout&quot;&nbsp;Kukač,
          Ella&nbsp;&quot;Aki&quot;&nbsp;Šenovská,
          Eduard&nbsp;&quot;Ventyl&quot;&nbsp;Drusa a&nbsp;Roman Bórik.
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
