import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getSingle } from '@/content';

export default function TearingApart() {
  const single = getSingle('tearing-apart');
  if (!single) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Tearing Apart'
        date={single.releaseDateISO}
        image={single.imagePath}
        single
      />
      <Section.Release {...single} isSingle>
        <h2>Tearing Apart</h2>
        <p>
          Putting the feelings of a divided society and climate crisis denial
          into the mix of ambient and alternative rock.
        </p>
      </Section.Release>
      <Section.Contact showSocials={false} />
    </>
  );
}
