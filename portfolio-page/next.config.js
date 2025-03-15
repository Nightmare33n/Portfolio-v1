/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['th.bing.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      }
    ],
  },
}

module.exports = nextConfig 