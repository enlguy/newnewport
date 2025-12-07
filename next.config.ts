import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Next.js to generate the image optimizer properly
  images: {
    unoptimized: false,
    loader: "default",
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
