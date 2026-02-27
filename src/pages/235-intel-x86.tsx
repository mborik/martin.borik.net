import * as React from 'react';

import { EpisodeWrapper, FigureEpisodeLogo } from '@/components/common';

export default function S02E35() {
  return (
    <EpisodeWrapper season={2} episode={35}>
      <FigureEpisodeLogo season={2} episode={35} figureClass='right-20rem'>
        <h2>
          Intel x86
          <br />
          <small>Mikroprocesorová architektúra zrodená z paniky</small>
        </h2>
        <p>⚠️ V príprave&hellip;</p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}
