import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ['leaflet', 'react-leaflet'],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
}

export default nextConfig
