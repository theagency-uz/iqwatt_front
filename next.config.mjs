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
};

export default nextConfig;
