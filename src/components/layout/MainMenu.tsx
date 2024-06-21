import * as React from 'react';

import {
  SocialAppleMusic,
  SocialBandcamp,
  SocialDeezer,
  SocialSoundCloud,
  SocialSpotify,
  SocialTidal,
  SocialYouTube,
  SocialYouTubeMusic,
} from '@/components/common/icons';
import { MenuItem } from '@/components/common/MenuItem';

type Props = {
  isMobile?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
export const MainMenu: React.FC<Props> = ({ isMobile, onClick }) => {
  return (
    <>
      {isMobile && (
        <>
          <MenuItem key='#home' title='HOME' href='/' onClick={onClick} />
          <MenuItem key='#bio' title='BIO' href='/#bio' onClick={onClick} />
          <MenuItem
            key='#music'
            title='MUSIC'
            href='/#music'
            onClick={onClick}
          />
          <MenuItem
            key='#contact'
            title='CONTACT'
            href='/#contact'
            onClick={onClick}
          />
          <div className='w-full h-px -mx-1 my-4 bg-secondary-glow' />
        </>
      )}
      <MenuItem
        key='bandcamp'
        title='Bandcamp'
        href='https://mborik.bandcamp.com'
        external
        onClick={onClick}
      >
        <SocialBandcamp className='size-4' />
      </MenuItem>
      <MenuItem
        key='spotify'
        title='Spotify'
        href='https://open.spotify.com/artist/1CcVvKGt8fapxbzEwIp42l?si=mPiBojRsQ0qL7qSK8hK0Pw'
        external
        onClick={onClick}
      >
        <SocialSpotify className='size-4' />
      </MenuItem>
      <MenuItem
        key='youtube'
        title='YouTube'
        href='https://youtube.com/@mborik128?feature=shared'
        external
        onClick={onClick}
      >
        <SocialYouTube className='size-4' />
      </MenuItem>
      <MenuItem
        key='ytmusic'
        title='YouTube Music'
        href='https://music.youtube.com/channel/UCtX96t20BvYvKCyh3akUcwQ?feature=shared'
        external
        onClick={onClick}
      >
        <SocialYouTubeMusic className='size-4' />
      </MenuItem>
      <MenuItem
        key='apple'
        title='Apple Music'
        href='https://music.apple.com/us/artist/martin-b%C3%B3rik/562280404'
        external
        onClick={onClick}
      >
        <SocialAppleMusic className='size-4' />
      </MenuItem>
      <MenuItem
        key='tidal'
        title='Tidal'
        href='https://tidal.com/browse/artist/7097956'
        external
        onClick={onClick}
      >
        <SocialTidal className='size-4' />
      </MenuItem>
      <MenuItem
        key='deezer'
        title='Deezer'
        href='https://www.deezer.com/sk/artist/7207640'
        external
        onClick={onClick}
      >
        <SocialDeezer className='size-4' />
      </MenuItem>
      <MenuItem
        key='soundcloud'
        title='SoundCloud'
        href='https://soundcloud.com/mborik?utm_source=homepage'
        external
        onClick={onClick}
      >
        <SocialSoundCloud className='size-4' />
      </MenuItem>
    </>
  );
};
