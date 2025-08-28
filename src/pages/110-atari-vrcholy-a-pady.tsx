import * as React from 'react';

import { EpisodeWrapper, FigureEpisodeLogo } from '@/components/common';

export default function S01E10() {
  return (
    <EpisodeWrapper episode={10}>
      <FigureEpisodeLogo episode={10} figureClass='right-20rem'>
        <h2>Vrcholy a pády značky Atari</h2>
        <p>⚠️ V príprave&hellip;</p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}
