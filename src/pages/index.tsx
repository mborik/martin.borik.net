import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Podcast } from '@/components/layout/Podcast';

export default function HomePage() {
  return (
    <>
      <Seo />
      <Podcast />
    </>
  );
}
