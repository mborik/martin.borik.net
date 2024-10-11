import KofiButton from 'kofi-button';
import Image from 'next/image';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import { SocialAppleMusic, SocialSpotify } from '@/components/common/icons';

export const Podcast = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 490px)' });
  return (
    <section id='podcast'>
      <div className='Hero'>
        <Image
          src='/images/logo_transparent.png'
          alt='Zapečené procesory'
          width={254}
          height={283}
          className='mb-4'
        />
        <h3>
          {isMobile ? (
            <>
              Populárno-náučný podcast o&nbsp;histórii výpočtovej techniky
              a&nbsp;príbehoch technológií, ktoré zmenili svet.
            </>
          ) : (
            <>
              Populárno-náučný podcast
              <br />o histórii výpočtovej techniky
              <br />a príbehoch technológií,
              <br />
              ktoré zmenili svet.
            </>
          )}
        </h3>
        <h4 className='w-80'>
          Volám sa <b>Martin&nbsp;Bórik</b> a&nbsp;budem Váš sprievodca
          v&nbsp;tomto stroji času.
        </h4>
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
        </div>
        <KofiButton
          color='#e84e57'
          title=' Podporte podcast'
          kofiID='J3J714IUF2'
        />
        <small>
          Za mesačné predplatné získate
          <br />
          novú epizódu vždy týždeň vopred.
        </small>
      </div>
      {/* <iframe
        src='https://podcasters.spotify.com/pod/show/zapeceneprocesory/embed'
        height='102px'
        width='500px'
        frameBorder='0'
        scrolling='no'
      ></iframe> */}
    </section>
  );
};
