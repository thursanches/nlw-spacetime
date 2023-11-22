/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.8',
        port: '3333',
        pathname: '/uploads/**',
      },
    ],
    domains: ["avatars.githubusercontent.com", "192.168.1.8"],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;