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
  async redirects() {
    return [
      {
        source: '/body-menu',
        destination: '/services/body',
        permanent: true,
      },
      {
        source: '/nails',
        destination: '/services/nail-treatment',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/facial',
        destination: '/services/facial',
        permanent: true,
      },
      {
        source: '/nails-menu',
        destination: '/services/nail-treatment',
        permanent: true,
      },
      {
        source: '/about-breath',
        destination: '/about-breathe',
        permanent: true,
      },
    ];
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  //
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

};

export default nextConfig;
