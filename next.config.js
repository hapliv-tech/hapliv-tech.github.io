/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ['images.unsplash.com', 'ik.imagekit.io'],
  },
};

module.exports = nextConfig;
