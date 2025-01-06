/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://b1g1testtask.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
