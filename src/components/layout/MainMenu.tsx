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
};
export const MainMenu: React.FC<Props> = ({ isMobile }) => {
  return (
    <>
      <MenuItem
        key='bandcamp'
        title='Bandcamp'
        href='https://mborik.bandcamp.com'
        external
      >
        <SocialBandcamp className='size-4' />
      </MenuItem>
      <MenuItem
        key='spotify'
        title='Spotify'
        href='https://open.spotify.com/artist/1CcVvKGt8fapxbzEwIp42l?si=mPiBojRsQ0qL7qSK8hK0Pw'
        external
      >
        <SocialSpotify className='size-4' />
      </MenuItem>
      <MenuItem
        key='youtube'
        title='YouTube'
        href='https://youtube.com/@mborik128?feature=shared'
        external
      >
        <SocialYouTube className='size-4' />
      </MenuItem>
      <MenuItem
        key='ytmusic'
        title='YouTube Music'
        href='https://music.youtube.com/channel/UCtX96t20BvYvKCyh3akUcwQ?feature=shared'
        external
      >
        <SocialYouTubeMusic className='size-4' />
      </MenuItem>
      <MenuItem
        key='apple'
        title='Apple Music'
        href='https://music.apple.com/us/artist/martin-b%C3%B3rik/562280404'
        external
      >
        <SocialAppleMusic className='size-4' />
      </MenuItem>
      <MenuItem
        key='tidal'
        title='Tidal'
        href='https://tidal.com/browse/artist/7097956'
        external
      >
        <SocialTidal className='size-4' />
      </MenuItem>
      <MenuItem
        key='deezer'
        title='Deezer'
        href='https://www.deezer.com/sk/artist/7207640'
        external
      >
        <SocialDeezer className='size-4' />
      </MenuItem>
      <MenuItem
        key='soundcloud'
        title='SoundCloud'
        href='https://soundcloud.com/mborik?utm_source=homepage'
        external
      >
        <SocialSoundCloud className='size-4' />
      </MenuItem>
    </>
  );
};
