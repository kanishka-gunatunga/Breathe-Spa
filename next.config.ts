import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/api/sanity/:path*",
        destination: "https://0niaw5c6.api.sanity.io/:path*", 
      },
    ];
  },
};

export default nextConfig;
