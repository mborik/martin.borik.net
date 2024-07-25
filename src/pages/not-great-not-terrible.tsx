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
      <Seo templateTitle='Not Great Not Terrible' />
      <Section.Album {...single} isSingle>
        <h2>Not Great Not Terrible</h2>
        <p>
          In memory of all the victims, and all who suffered and sacrificed
          during Chernobyl disaster.
        </p>
      </Section.Album>
      <Section.Contact showSocials={false} />
    </>
  );
}
