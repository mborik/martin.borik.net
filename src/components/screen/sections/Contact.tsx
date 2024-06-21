import * as React from 'react';

import {
  Email,
  MapPin,
  Phone,
  SocialAppleMusic,
  SocialBandcamp,
  SocialDeezer,
  SocialInstagram,
  SocialLinkedIn,
  SocialSoundCloud,
  SocialSpotify,
  SocialTidal,
  SocialX,
  SocialYouTube,
  SocialYouTubeMusic,
} from '@/components/common/icons';

export const Contact = () => {
  return (
    <footer className='min-h-80'>
      <a id='contact' aria-hidden='true' />
      <div className='SectionContactWrapper'>
        <address>
          <h2>get in touch</h2>
          <p>
            <Phone className='size-6' aria-hidden='true' />
            <a href='tel:+421908343277'>+421 908 343 277</a>
          </p>
          <p>
            <Email className='size-6' aria-hidden='true' />
            <a href='mailto:martin@borik.net'>martin@borik.net</a>
          </p>
          <p>
            <MapPin className='size-6' aria-hidden='true' />
            <span>Košice, Slovakia</span>
          </p>
        </address>
        <section>
          <h3 className='gradient max-w-60 text-center md:max-w-none'>
            streaming & social&nbsp;media
          </h3>
          <div className='flex flex-wrap gap-4 justify-center md:justify-end max-w-48'>
            <a
              title='Bandcamp'
              href='https://mborik.bandcamp.com'
              target='_blank'
              rel='noreferrer'
            >
              <SocialBandcamp className='size-8' />
            </a>
            <a
              title='Spotify'
              href='https://open.spotify.com/artist/1CcVvKGt8fapxbzEwIp42l?si=mPiBojRsQ0qL7qSK8hK0Pw'
              target='_blank'
              rel='noreferrer'
            >
              <SocialSpotify className='size-8' />
            </a>
            <a
              title='YouTube'
              href='https://youtube.com/@mborik128?feature=shared'
              target='_blank'
              rel='noreferrer'
            >
              <SocialYouTube className='size-8' />
            </a>
            <a
              title='YouTube Music'
              href='https://music.youtube.com/channel/UCtX96t20BvYvKCyh3akUcwQ?feature=shared'
              target='_blank'
              rel='noreferrer'
            >
              <SocialYouTubeMusic className='size-8' />
            </a>
            <a
              title='Apple Music'
              href='https://music.apple.com/us/artist/martin-b%C3%B3rik/562280404'
              target='_blank'
              rel='noreferrer'
            >
              <SocialAppleMusic className='size-8' />
            </a>
            <a
              title='Tidal'
              href='https://tidal.com/browse/artist/7097956'
              target='_blank'
              rel='noreferrer'
            >
              <SocialTidal className='size-8' />
            </a>
            <a
              title='Deezer'
              href='https://www.deezer.com/sk/artist/7207640'
              target='_blank'
              rel='noreferrer'
            >
              <SocialDeezer className='size-8' />
            </a>
            <a
              title='SoundCloud'
              href='https://soundcloud.com/mborik?utm_source=homepage'
              target='_blank'
              rel='noreferrer'
            >
              <SocialSoundCloud className='size-8' />
            </a>
            <a
              title='Instagram'
              href='https://www.instagram.com/mborik128/'
              target='_blank'
              rel='noreferrer'
            >
              <SocialInstagram className='size-8' />
            </a>
            <a
              title='X (Twitter)'
              href='https://twitter.com/mborik128'
              target='_blank'
              rel='noreferrer'
            >
              <SocialX className='size-8' />
            </a>
            <a
              title='LinkedIn'
              href='https://www.linkedin.com/in/mborik/'
              target='_blank'
              rel='noreferrer'
            >
              <SocialLinkedIn className='size-8' />
            </a>
          </div>
          <q cite='https://borik.net/'>Copyright &copy; Martin Bórik</q>
        </section>
      </div>
    </footer>
  );
};
