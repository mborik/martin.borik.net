import * as React from 'react';

import { EpisodeWrapper, FigureEpisodeLogo } from '@/components/common';

export default function S01E08() {
  return (
    <EpisodeWrapper episode={8}>
      <FigureEpisodeLogo episode={8} figureClass='right-20rem'>
        <h2>Commodore 64</h2>
        <p>⚠️ V príprave&hellip;</p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}
