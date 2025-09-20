import * as React from 'react';

import { BackButton, ScrollToTop } from '@/components/common';
import { ArrowLeft, ChevronUp } from '@/components/common/icons';

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackButton href='/'>
        <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
      </BackButton>
      <section id='article'>
        <ScrollToTop smooth>
          <ChevronUp className='size-8 flex-none' />
        </ScrollToTop>
        {children}
      </section>
    </>
  );
};
