import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/section';

export default function HomePage() {
  return (
    <>
      <Section.Hero />
      <Seo />
    </>
  );
}
