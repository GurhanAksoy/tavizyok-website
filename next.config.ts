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
  // Turbopack için boş config (uyarıyı susturur)
  turbopack: {},
}

export default nextConfig