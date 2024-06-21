import Link from 'next/link';
import * as React from 'react';

import { ArrowRight } from '@/components/common/icons';
import { Seo } from '@/components/common/Seo';
import { Layout } from '@/components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='404 Not Found' />

      <main>
        <section>
          <div className='flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-8 text-6xl md:text-8xl leading-none'>404</h1>
            <h6 className='md:text-xl text-accent-600'>page not found</h6>
            <div className='mt-8 ButtonSecondary'>
              <Link className='anchor' href='/'>
                back to home
                <ArrowRight className='size-6 flex-none' aria-hidden='true' />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
