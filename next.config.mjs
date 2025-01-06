/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  publicRuntimeConfig: {
    api_origin: 'http://localhost:3000'
  }
};

export default nextConfig; 