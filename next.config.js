/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ['images.unsplash.com', 'ik.imagekit.io'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
