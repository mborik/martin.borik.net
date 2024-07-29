import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Martin Bórik: music',
  siteName: 'Martin Bórik: music',
  description: 'composer and music producer from Slovakia',
  url: 'https://martin.borik.net',
  type: 'website',
  robots: 'follow, index',
  image: 'https://martin.borik.net/images/screenshot.jpg',
};

type SeoProps = {
  date?: string;
  image?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;
  meta['image'] = props.image ? `${meta.url}${props.image}` : meta.image;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' name='image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mborik128' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Martin Bórik'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '96x96',
    href: '/favicon/icon-96x96.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '128x128',
    href: '/favicon/icon-128x128.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '192x192',
    href: '/favicon/icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/icon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/icon-192x192.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
