import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Izin untuk merender gambar dari domain luar
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Izin untuk mengakses server dev dari IP lokal perangkat lain
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
