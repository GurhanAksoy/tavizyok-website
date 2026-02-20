/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tavizyok.com' }],
        destination: 'https://tavizyok.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tavizyok.com' }],
        missing: [{ type: 'header', key: 'x-forwarded-proto', value: 'https' }],
        destination: 'https://tavizyok.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
