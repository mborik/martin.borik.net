import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import { RampGradient } from '@/components/common';
import { BackButon } from '@/components/common/BackButton';
import {
  Bars3Icon,
  SocialAppleMusic,
  SocialBandcamp,
  SocialDeezer,
  SocialSpotify,
  SocialTidal,
  SocialYouTube,
  SocialYouTubeMusic,
} from '@/components/common/icons';

import { Release } from '@/store';

interface AlbumProps extends Release {
  children?: React.ReactNode;
  isSingle?: boolean;
}

export const Album: React.FC<AlbumProps> = ({
  children,
  isSingle,
  imagePath,
  title,
  badges,
  duration,
  releaseDate,
  releaseDateISO,
  numberOfTracks,
  mastering,
  stickyPlayer,
  bandcampEmbed,
  youtubeEmbed,
  link,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isPortraitKind = useMediaQuery({ query: '(min-height: 767px)' });
  const [stickyPlayerOpen, setStickyPlayerOpen] =
    React.useState(isPortraitKind);
  const sideInfoSection = () => (
    <>
      <ul className='AlbumSummary'>
        {link && (
          <li key='links' className='AlbumLinks'>
            <ul>
              {link.bandcamp && (
                <li key='bandcamp'>
                  <a
                    href={link.bandcamp}
                    target='_blank'
                    rel='noreferrer'
                    title='Bandcamp'
                  >
                    <SocialBandcamp />
                    <span>Bandcamp</span>
                  </a>
                </li>
              )}
              {link.spotify && (
                <li key='spotify'>
                  <a
                    href={link.spotify}
                    target='_blank'
                    rel='noreferrer'
                    title='Spotify'
                  >
                    <SocialSpotify />
                    <span>Spotify</span>
                  </a>
                </li>
              )}
              {link.appleMusic && (
                <li key='apple'>
                  <a
                    href={link.appleMusic}
                    target='_blank'
                    rel='noreferrer'
                    title='Apple Music'
                  >
                    <SocialAppleMusic />
                    <span>Apple Music</span>
                  </a>
                </li>
              )}
              {link.youtubeMusic && (
                <li key='youtubeMusic'>
                  <a
                    href={link.youtubeMusic}
                    target='_blank'
                    rel='noreferrer'
                    title='YouTube Music'
                  >
                    <SocialYouTubeMusic />
                    <span>YouTube Music</span>
                  </a>
                </li>
              )}
              {link.tidal && (
                <li key='tidal'>
                  <a
                    href={link.tidal}
                    target='_blank'
                    rel='noreferrer'
                    title='Tidal'
                  >
                    <SocialTidal />
                    <span>Tidal</span>
                  </a>
                </li>
              )}
              {link.deezer && (
                <li key='deezer'>
                  <a
                    href={link.deezer}
                    target='_blank'
                    rel='noreferrer'
                    title='Deezer'
                  >
                    <SocialDeezer />
                    <span>Deezer</span>
                  </a>
                </li>
              )}
              {link.youtube && (
                <li key='youtube'>
                  <a
                    href={link.youtube}
                    target='_blank'
                    rel='noreferrer'
                    title='YouTube'
                  >
                    <SocialYouTube />
                    <span>YouTube</span>
                  </a>
                </li>
              )}
            </ul>
          </li>
        )}
        {releaseDate && (
          <li key='released'>
            <b>Released:</b>{' '}
            <time dateTime={releaseDateISO.toISOString()}>{releaseDate}</time>
          </li>
        )}
        {numberOfTracks && (
          <li key='tracks'>
            <b>Number of tracks:</b> <span>{numberOfTracks}</span>
          </li>
        )}
        {duration && (
          <li key='duration'>
            <b>Duration:</b> <span>{duration}</span>
          </li>
        )}
        {mastering && (
          <li key='mastering' className='mt-3'>
            <b>Mastering:</b>
            <br />
            {mastering}
          </li>
        )}
      </ul>
    </>
  );
  return (
    <>
      <section id='album' className={isSingle ? 'single' : ''}>
        <BackButon />
        <article>
          <aside>
            <div className='AlbumContainer'>
              <div className='AlbumCover'>
                <Image
                  src={imagePath}
                  alt={`${title} album cover`}
                  width={300}
                  height={300}
                />
              </div>
              {bandcampEmbed &&
                (!stickyPlayer || (isMobile && stickyPlayer)) && (
                  <div className='AlbumPlayer'>
                    <iframe
                      title={`${title} album on Bandcamp`}
                      src={`https://martin.borik.net/wp-bandcamp.php?q=small&${bandcampEmbed}`}
                      width={250}
                      height={78}
                      seamless
                      allow='autoplay'
                      {...{
                        /* avoid React warnings */
                        allowtransparency: 'allowtransparency',
                        frameBorder: '0',
                      }}
                    />
                  </div>
                )}
            </div>
            <div className='PortfolioCard__badges'>
              {badges.map((badge) => (
                <span key={badge}>
                  <mark>#{badge}</mark>
                </span>
              ))}
            </div>
            {!isSingle && sideInfoSection()}
          </aside>
          <div className='AlbumCopy'>
            {children}
            {isSingle && <div>{sideInfoSection()}</div>}
          </div>
        </article>
        {youtubeEmbed ? (
          <RampGradient fill='url(#to-dark)' transform='scale(-1,-1)' />
        ) : (
          <RampGradient fill='url(#to-light)' />
        )}
      </section>
      {youtubeEmbed && (
        <section id='youtube'>
          <div className='SectionYoutube'>
            <iframe
              width='1120'
              height='630'
              src={`https://www.youtube-nocookie.com/embed/${youtubeEmbed}&amp;controls=1&amp;hd=1`}
              title={title}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              className='w-full h-full absolute top-0 left-0'
              {...{
                /* avoid React warnings */
                allowFullscreen: 'allowFullscreen',
                frameBorder: '0',
              }}
            ></iframe>
          </div>
          <RampGradient fill='url(#to-light)' />
        </section>
      )}
      {bandcampEmbed && stickyPlayer && !isMobile && (
        <motion.div
          key='sticky'
          className='StickyPlayer'
          initial='hidden'
          exit='hidden'
          animate={stickyPlayerOpen ? 'visible' : 'hidden'}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          variants={{
            visible: { y: 0 },
            hidden: { y: 128 },
          }}
        >
          <button
            type='button'
            onClick={() => setStickyPlayerOpen(!stickyPlayerOpen)}
          >
            <Bars3Icon className='size-4 flex-none' aria-hidden='true' />
          </button>
          <iframe
            title='Neobios album on Bandcamp'
            src={`https://martin.borik.net/wp-bandcamp.php?q=large&${bandcampEmbed}`}
            width={908}
            height={100}
            seamless
            allow='autoplay'
            {...{
              /* avoid React warnings */
              allowtransparency: 'allowtransparency',
              frameBorder: '0',
            }}
          />
        </motion.div>
      )}
    </>
  );
};
