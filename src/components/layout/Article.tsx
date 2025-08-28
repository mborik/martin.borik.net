import * as React from 'react';

import { BackButon, ScrollToTop } from '@/components/common';
import { ArrowLeft, ChevronUp } from '@/components/common/icons';

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id='article'>
      <BackButon href='/'>
        <ArrowLeft className='size-8 flex-none' aria-hidden='true' />
      </BackButon>
      <ScrollToTop smooth>
        <ChevronUp className='size-8 flex-none' />
      </ScrollToTop>
      <article>{children}</article>
    </section>
  );
};
