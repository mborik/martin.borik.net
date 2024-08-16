import Head from 'next/head';
import * as React from 'react';

import { Header } from '@/components/layout/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,shrink-to-fit=no'
        />
      </Head>
      <div className='LayoutWrapper'>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};
