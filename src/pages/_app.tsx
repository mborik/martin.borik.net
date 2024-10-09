import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { Layout } from '@/components/layout/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
