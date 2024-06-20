import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

export default function HomePage() {
  return (
    <>
      <Seo />
      <Section.Hero />
      <Section.Bio />
    </>
  );
}
