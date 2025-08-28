import * as React from 'react';

import { EpisodeWrapper, FigureEpisodeLogo } from '@/components/common';

export default function S01E06() {
  return (
    <EpisodeWrapper episode={6}>
      <FigureEpisodeLogo episode={6} figureClass='right-20rem'>
        <h2>
          ZX Spectrum
          <br />
          <small>História jeho vzniku a význam tejto legendy</small>
        </h2>
        <p>⚠️ V príprave&hellip;</p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}
