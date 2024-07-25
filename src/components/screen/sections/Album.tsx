import Image from 'next/image';
import * as React from 'react';

import { RampGradient } from '@/components/common';
import { BackButon } from '@/components/common/BackButton';
import {
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
}

export const Album: React.FC<AlbumProps> = ({
  children,
  imagePath,
  title,
  badges,
  duration,
  releaseDate,
  releaseDateISO,
  numberOfTracks,
  bandcampEmbed,
  link,
}) => {
  return (
    <section id='album'>
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
            {bandcampEmbed && (
              <div className='AlbumPlayer'>
                <iframe
                  title={`${title} album on Bandcamp`}
                  src={`https://martin.borik.net/wp-bandcamp.php?q=small&${bandcampEmbed}`}
                  width={250}
                  height={78}
                  seamless
                  allowTransparency
                  frameBorder='0'
                  allow='autoplay'
                />
              </div>
            )}
          </div>
          <div className='mt-24 -mb-24 PortfolioCard__badges'>
            {badges.map((badge) => (
              <span key={badge}>
                <mark>#{badge}</mark>
              </span>
            ))}
          </div>
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
                </ul>
              </li>
            )}
            {releaseDate && (
              <li key='released'>
                <b>Released:</b>{' '}
                <time dateTime={releaseDateISO.toISOString()}>
                  {releaseDate}
                </time>
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
          </ul>
        </aside>
        <div className='AlbumCopy'>{children}</div>
      </article>
      <RampGradient fill='url(#to-light)' />
    </section>
  );
};
