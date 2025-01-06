import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  publicRuntimeConfig: {
    api_origin: "http://localhost:3000",
  },
};

export default nextConfig;
