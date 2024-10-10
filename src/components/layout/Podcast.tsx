import Image from 'next/image';
import * as React from 'react';
import KofiButton from 'kofi-button';
import { SocialAppleMusic, SocialSpotify } from '@/components/common/icons';

export const Podcast = () => {
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
          Populárno-náučný podcast
          <br />o histórii výpočtovej techniky
          <br />a príbehoch technológií,
          <br />
          ktoré zmenili svet.
        </h3>
        <h4>
          Volám sa <b>Martin Bórik</b>
          <br />a budem sprievodcom
          <br />v tomto stroji času.
        </h4>
        <div className='socials my-4 flex flex-row gap-4'>
          <a
            title='Spotify Podcasts'
            href='https://open.spotify.com/show/521QTtxKzPPP1gWKTtB2gY'
            target='_blank'
            rel='noreferrer'
          >
            <SocialSpotify className='size-12' />
          </a>
          <a
            title='Apple Podcasts'
            href='https://podcasts.apple.com/us/podcast/zape%C4%8Den%C3%A9-procesory/id1773195594'
            target='_blank'
            rel='noreferrer'
          >
            <SocialAppleMusic className='size-12' />
          </a>
        </div>
        <KofiButton
          color='#e84e57'
          title=' Podporte Zapečené procesory'
          kofiID='J3J714IUF2'
        />
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
