import * as React from 'react';

import { usePlayerStore } from '@/lib/player';

import { Seo } from '@/components/common/Seo';
import { Podcast } from '@/components/layout/Podcast';

export default function HomePage() {
  const { init, isInitialized, setViewedEpisode } = usePlayerStore();

  React.useEffect(() => {
    isInitialized == null && init();
    setViewedEpisode(null, true);
  }, [init]);

  return (
    <>
      <Seo />
      <Podcast />
    </>
  );
}
