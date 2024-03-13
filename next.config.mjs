const cspHeader = `
    default-src 'none';
    connect-src 'self';
    script-src 'self';
    img-src * data:;
    style-src 'self' 'unsafe-inline';
    frame-src *
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    // unoptimized: true,
    // domains: ["*.theagency.uz", "192.168.0.204"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.theagency.uz',

      },
      {
        protocol: 'http',
        hostname: '**192.168.0.204**',

      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
