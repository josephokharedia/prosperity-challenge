/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
