import Link from 'next/link';
import * as React from 'react';

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
            <h6 className='md:text-xl text-accent-600'>niečo sa pokazilo</h6>
            <div className='mt-8 ButtonSecondary'>
              <Link className='anchor' href='/'>
                späť na stránku
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
