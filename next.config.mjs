/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: [
    '127.0.0.1',
    '127.0.0.1:3001',
    'localhost',
    'localhost:3001',
    '10.152.69.29',
    '10.152.69.29:3001',
    '10.22.221.29',
    '10.22.221.29:3001'
  ],
}

export default nextConfig
