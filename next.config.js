/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demoapus1.com',
      },
    ],
  },
}

module.exports = nextConfig
