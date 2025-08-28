import * as React from 'react';

import { EpisodeWrapper, FigureEpisodeLogo } from '@/components/common';

export default function S01E12() {
  return (
    <EpisodeWrapper episode={12}>
      <FigureEpisodeLogo episode={12} figureClass='right-20rem'>
        <h2>Amiga!</h2>
        <p>⚠️ V príprave&hellip;</p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}
