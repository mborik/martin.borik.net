import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getSingle } from '@/content';

export default function NGNT() {
  const single = getSingle('ngnt');
  if (!single) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Not Great Not Terrible'
        date={single.releaseDateISO}
        image={single.imagePath}
        single
      />
      <Section.Release {...single} isSingle>
        <h2>Not Great Not Terrible</h2>
        <h4 className='-mt-8'>
          <mark>1986-04-26</mark>
        </h4>
        <p>
          In memory of all the victims, and all who suffered and sacrificed
          during Chernobyl disaster.
        </p>
      </Section.Release>
      <Section.Contact showSocials={false} />
    </>
  );
}
