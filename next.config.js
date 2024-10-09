/** @type {import('next').NextConfig} */
module.exports = {
  distDir: 'build',
  output: 'export',
  cleanDistDir: true,
  trailingSlash: true,

  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    scrollRestoration: true,
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
