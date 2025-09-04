import * as React from 'react';

import { BackButon, ScrollToTop } from '@/components/common';
import { ArrowLeft, ChevronUp } from '@/components/common/icons';

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackButon href='/'>
        <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
      </BackButon>
      <section id='article'>
        <ScrollToTop smooth>
          <ChevronUp className='size-8 flex-none' />
        </ScrollToTop>
        {children}
      </section>
    </>
  );
};
